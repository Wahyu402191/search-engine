from flask import Flask, jsonify, request
from preprocessing import preprocessing
from stats import get_avgdl
from db import get_connection
from repository import get_doc_dates, get_inverted_data, get_documents_by_ids
from bm25 import calculate_scores, rank_documents, rerank_with_time_decay



app = Flask(__name__)

AVGDL = get_avgdl()

@app.route("/")
def home():
    return jsonify({"message": "Server is Up!"})

@app.route("/api/v1/news", methods=["GET"])
def get_news():
    page = int(request.args.get("page", 1))
    conn = get_connection()
    with conn.cursor() as cursor:
        cursor.execute("SELECT id, judul, tanggal, penulis, link, artikel FROM documents LIMIT 10 OFFSET %s", ((page - 1) * 10,))
        news_data = cursor.fetchall()
    conn.close()
    
    return jsonify(news_data)

@app.route("/api/v1/news/<int:id>", methods=["GET"])
def get_news_by_id(id):
    conn = get_connection()
    with conn.cursor() as cursor:
        cursor.execute("SELECT id, judul, tanggal, penulis, link, artikel FROM documents WHERE id = %s", (id,))
        news_data = cursor.fetchone()
    conn.close()

    if not news_data:
        return jsonify({"error": "News item not found"}), 404

    return jsonify(news_data)

@app.route("/api/v1/news/search", methods=["GET"])
def search_news():
    query = request.args.get("q")
    if not query:
        return jsonify({"error": "Search query is required"}), 400

    terms = preprocessing(query)
    if not terms:
        return jsonify({"error": "No valid search terms found"}), 400

    # 1. ambil inverted index
    rows = get_inverted_data(terms)

    # 2. hitung BM25
    scores = calculate_scores(rows, AVGDL)

    # 3. ranking awal
    ranked_docs = rank_documents(scores, top_n=50)

    # 4. ambil doc_id kandidat
    doc_ids = [doc_id for doc_id, _ in ranked_docs]

    # 5. ambil tanggal SEKALI
    doc_dates = get_doc_dates(doc_ids)

    # 6. rerank dengan time decay
    final_ranked = rerank_with_time_decay(ranked_docs, doc_dates)

    # 7. ambil top 20 final
    final_doc_ids = [doc_id for doc_id, _ in final_ranked[:20]]

    # 8. ambil dokumen
    documents = get_documents_by_ids(final_doc_ids)

    return jsonify(documents)
    
if __name__ == "__main__":
    app.run(debug=True)