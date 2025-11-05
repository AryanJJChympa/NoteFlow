<h1 align="center">📝 NoteFlow</h1>

<p align="center">
  <b>A sleek and secure note-taking web app built with the MERN Stack</b><br/>
  Create, manage, and search your notes — all in one place.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Stack-MERN-blue?style=for-the-badge&logo=mongodb&logoColor=white"/>
  <img src="https://img.shields.io/badge/Frontend-React-61DAFB?style=for-the-badge&logo=react&logoColor=black"/>
  <img src="https://img.shields.io/badge/Backend-Node.js-green?style=for-the-badge&logo=node.js&logoColor=white"/>
  <img src="https://img.shields.io/badge/Database-MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"/>
  <img src="https://img.shields.io/badge/License-ISC-yellow?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/Status-Live-brightgreen?style=for-the-badge"/>
</p>

<p align="center">
  <a href="https://github.com/AryanJJChympa/NoteFlow">🔗 View Repository</a> •
  <a href="https://noteflow.onrender.com">🌐 Live Demo</a>
</p>

---



```markdown
# 📝 NoteFlow

![MERN](https://img.shields.io/badge/Stack-MERN-blue?style=for-the-badge&logo=mongodb&logoColor=white)
![Node.js](https://img.shields.io/badge/Backend-Node.js-green?style=for-the-badge&logo=node.js&logoColor=white)
![React](https://img.shields.io/badge/Frontend-React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![License](https://img.shields.io/badge/License-ISC-yellow?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Live-brightgreen?style=for-the-badge)

> A modern, full-stack note-taking web app that allows users to create, read, update, and delete notes — with authentication, search, and rate limiting.

---

## 📚 Table of Contents
- [About the Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)
- [Installation & Setup](#installation--setup)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)
- [Future Enhancements](#future-enhancements)
- [Author](#author)
- [License](#license)

---

## 📖 About the Project
NoteFlow is a full-stack note management application built using the MERN stack.  
It provides users with a secure way to manage their personal notes — from writing ideas to organizing information — all with an elegant interface and fast CRUD operations.  

The app features user authentication, note search, and secure rate-limiting for stable performance.

---

## 🚀 Features

⭐ Authentication (Login / Register)  
⭐ Create, Read, Update, Delete notes  
⭐ Search notes using a keyword filter  
⭐ Protected routes with JWT  
⭐ Rate limiting for backend endpoints  
⭐ Responsive UI using Tailwind CSS  
⭐ Deployed seamlessly on Render  

---

## 🧠 Tech Stack

Frontend
- React.js (Vite)
- Tailwind CSS
- Axios
- React Router DOM

Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- Upstash Rate Limiter
- Dotenv, CORS

---

## 🗂 Folder Structure

```bash

NoteFlow/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   ├── db.js
│   │   │   └── upstash.js
│   │   ├── controllers/
│   │   │   ├── authController.js
│   │   │   └── notesController.js
│   │   ├── middleware/
│   │   │   ├── authMiddleware.js
│   │   │   └── rateLimiter.js
│   │   ├── models/
│   │   │   ├── notesModel.js
│   │   │   └── userModel.js
│   │   ├── routes/
│   │   │   ├── authRoutes.js
│   │   │   └── notesRoutes.js
│   │   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── NoteCard.jsx
│   │   │   ├── NotesNotFound.jsx
│   │   │   ├── PrivateRoutes.jsx
│   │   │   ├── RateLimiterUI.jsx
│   │   │   └── SearchBar.jsx
│   │   ├── pages/
│   │   │   ├── CreatePage.jsx
│   │   │   ├── HomePage.jsx
│   │   │   ├── LoginPage.jsx
│   │   │   ├── NoteDetailPage.jsx
│   │   │   └── RegisterPage.jsx
│   │   ├── lib/
│   │   │   ├── axios.js
│   │   │   └── utils.js
│   │   ├── services/
│   │   │   └── notesService.js
│   │   └── App.jsx
│
├── package.json
└── README.md

````

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/AryanJJChympa/NoteFlow.git
cd NoteFlow
````

### 2️⃣ Install dependencies

```bash
npm run build
```

### 3️⃣ Run the project

```bash
npm run start
```

Frontend: [http://localhost:5173](http://localhost:5173)
Backend: [http://localhost:5001](http://localhost:5001)

---

## 🔐 Environment Variables

Create `.env` files for both `backend` and `frontend`.

### Backend (`/backend/.env`)

```
PORT=5001
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
UPSTASH_REDIS_REST_URL=your_upstash_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_token
NODE_ENV=development
```

### Frontend (`/frontend/.env`)

```
VITE_API_BASE_URL=http://localhost:5001/api
```

---

## 🌐 Deployment

NoteFlow is hosted on Render.
During deployment, the root `package.json` handles both environments.

Build Command:

```bash
npm run build
```

Start Command:

```bash
npm run start
```

Render automatically installs dependencies for both backend and frontend.

---

## 🔮 Future Enhancements

✨ WYSIWYG / Rich Text editor
🌙 Dark & Light theme toggle
📎 File attachments in notes
📅 Reminder or pin feature
🤝 Real-time collaborative notes

---

## 👨‍💻 Author

Aryan J. Chympa
BCA Student | MERN Developer | Problem Solver

* 💻 [GitHub](https://github.com/AryanJJChympa)
* 🌐 [LinkedIn](https://www.linkedin.com/in/aryanjchympa)

---

## 📄 License

This project is licensed under the ISC License.
See the [LICENSE](LICENSE) file for more details.

---

> *“Built with passion and continuous improvement in mind.”* 🚀

```

---

