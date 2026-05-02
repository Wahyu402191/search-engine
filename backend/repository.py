# repository.py
from db import get_connection

def get_doc_dates(doc_ids):
    conn = get_connection()
    cursor = conn.cursor()

    placeholders = ','.join(['%s'] * len(doc_ids))

    sql = f"""
        SELECT id, tanggal
        FROM documents
        WHERE id IN ({placeholders})
    """

    cursor.execute(sql, doc_ids)
    rows = cursor.fetchall()

    return {row["id"]: row["tanggal"] for row in rows}

def get_inverted_data(terms):
    conn = get_connection()
    cursor = conn.cursor()

    placeholders = ','.join(['%s'] * len(terms))

    sql = f"""
        SELECT 
            i.doc_id,
            i.term,
            i.tf,
            ts.idf,
            dl.doc_len
        FROM inverted_index i
        JOIN term_stats ts ON i.term = ts.term
        JOIN doc_len dl ON i.doc_id = dl.doc_id
        WHERE i.term IN ({placeholders})
    """

    cursor.execute(sql, terms)
    results = cursor.fetchall()

    cursor.close()
    conn.close()

    return results

def get_documents_by_ids(doc_ids):
    conn = get_connection()
    cursor = conn.cursor()

    placeholders = ','.join(['%s'] * len(doc_ids))

    sql = f"""
        SELECT id, judul, tanggal, penulis, link, artikel
        FROM documents
        WHERE id IN ({placeholders})
    """

    cursor.execute(sql, doc_ids)
    docs = cursor.fetchall()

    cursor.close()
    conn.close()

    return docs