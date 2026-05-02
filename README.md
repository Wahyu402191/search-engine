# 🌐 Fullstack Web App (Flask + React)

Project ini merupakan aplikasi web fullstack dengan:

* **Backend:** Python Flask (REST API)
* **Frontend:** React (Vite)

---

## 📁 Struktur Project

```
website/
├── backend/        # Flask API
│   ├── app.py
│   ├── requirements.txt
│   └── ...
├── frontend/       # React App (Vite)
│   ├── src/
│   ├── package.json
│   └── ...
└── README.md
```

---

## ⚙️ Persiapan Awal

Pastikan sudah terinstall:

* Python (>= 3.8)
* Node.js (>= 18)
* npm / yarn

Cek versi:

```
python --version
node -v
npm -v
```

---

# 🚀 Setup Backend (Flask)

## 1. Masuk ke folder backend

```
cd backend
```

## 2. Buat virtual environment

```
python -m venv venv
```

## 3. Aktifkan virtual environment

### Windows

```
venv\Scripts\activate
```

### Linux / Mac

```
source venv/bin/activate
```

## 4. Install dependencies

```
pip install -r requirements.txt
```

## 5. Jalankan server Flask

```
python app.py
```

Atau jika pakai flask CLI:

```
flask run
```

📌 Default berjalan di:

```
http://localhost:5000
```

---

# ⚛️ Setup Frontend (React)

## 1. Masuk ke folder frontend

```
cd frontend
```

## 2. Install dependencies

```
npm install
```

## 3. Jalankan React app

```
npm run dev
```

📌 Default berjalan di:

```
http://localhost:5173
```

---

# 🔗 Koneksi Frontend ke Backend

Pastikan endpoint API sesuai, contoh:

```js
const API_URL = "http://localhost:5000";
```

Atau gunakan `.env` di frontend:

```
VITE_API_URL=http://localhost:5000
```

Lalu akses di React:

```js
import.meta.env.VITE_API_URL
```

---
