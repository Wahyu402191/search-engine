# stats.py
import math
from datetime import datetime

from db import get_connection

def get_avgdl():
    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute("SELECT AVG(doc_len) as avgdl FROM doc_len")
    avgdl = cursor.fetchone()["avgdl"]

    cursor.close()
    conn.close()

    return avgdl

def compute_time_decay(created_at, lambda_=0.1):
    now = datetime.now()
    age_days = (now - created_at).days

    decay = math.exp(-lambda_ * age_days)
    return decay