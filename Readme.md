<img width="1914" height="848" alt="Screenshot 2025-12-04 130411" src="https://github.com/user-attachments/assets/032cd69a-dcb8-4a86-9456-be08ddc03657" />
<img width="1920" height="1080" alt="Screenshot (2)" src="https://github.com/user-attachments/assets/141a0455-6d7b-4898-803c-a48816e3ed55" />
<img width="1894" height="841" alt="Screenshot 2025-12-04 130436" src="https://github.com/user-attachments/assets/129d1cb2-9bb5-4828-a5c9-d074812d40cf" />
# Complaint Management System (CMS)

A full‑stack Complaint Management System built with **React (Rolldown setup)** for frontend and **Node.js + Express + MongoDB** for backend. The system manages user complaints, admin workflows, analytics, file uploads, and token‑based authentication.

---

## 🚀 Features

### 🔐 Authentication

* Login & Register (JWT‑based authentication)
* Forgot Password (email/OTP logic can be added)
* Protected routes

### 🧾 Complaint Management

* Users can create complaints
* Upload **images/PDFs** with preview
* Auto‑generated ticket numbers
* Track statuses: *Pending, In Progress, Resolved, Closed*
* View complaint history

### 🧑‍💼 Role-based dashboards

* **User Dashboard** – Create & track complaints
* **Agent Dashboard** – Assigned tickets, status update
* **Admin Dashboard** – Manage all tickets, agents, users

### 📊 Analytics (Admin)

* Pie chart of complaint statuses
* Daily/Monthly trends
* SLA (Service Level Agreement) tracking

### 🎨 UI/UX

* Fully styled using **Tailwind CSS**
* Responsive dashboard
* Ticket cards, stat cards, charts

---

## 🛠 Tech Stack

### **Frontend**

* React (Rolldown bundler)
* Tailwind CSS
* Axios
* React Router DOM

### **Backend**

* Node.js
* Express
* MongoDB + Mongoose
* Multer for file uploads
* JWT for authentication

---

## 📂 Project Structure

```bash
cms-project/
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── hooks/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   └── rolldown.config.js
└── README.md
```

---

## ⚙️ Installation Steps

### 1️⃣ Clone the Project

```bash
git clone https://github.com/yourusername/cms-project.git
cd cms-project
```

### 2️⃣ Install Backend

```bash
cd backend
npm install
```

### 3️⃣ Setup Environment Variables

Create `.env` inside **backend**:

```bash
PORT=5000
MONGO_URI=mongodb://localhost:27017/cmsdb
JWT_SECRET=yourjwtsecret
```

### 4️⃣ Run Backend Server

```bash
npm start
```

---

### 5️⃣ Install Frontend

```bash
cd ../frontend
npm install
```

### 6️⃣ Run Frontend

```bash
npm run dev
```

---

## 📝 API Endpoints

### Auth Routes

```
POST /api/auth/register
POST /api/auth/login
POST /api/auth/forgot-password
```

### Complaint Routes

```
POST /api/complaints/create
GET  /api/complaints/user/:id
GET  /api/complaints/all
PUT  /api/complaints/update/:id
```

### File Upload

```
POST /api/upload/file
```

---

## 📸 Screenshots (Optional)

*Add dashboard, login, and complaint-form screenshots here.*

---

## 🤝 Contributing

Feel free to fork and submit a pull request.

---

## 🧑‍💻 Author

Created by **Shubh Kesharwani**

---

## ⭐ If you like this project, consider giving it a star!
