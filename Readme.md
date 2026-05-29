# Backend Project (Node.js + Express)

##  Overview

This is a scalable backend project built using **Node.js, Express, and MongoDB**.
It implements a complete REST API for a video-based platform with features like authentication, user management, and content interactions.

---

##  Tech Stack

* **Node.js**
* **Express.js**
* **MongoDB + Mongoose**
* **JWT (Authentication)**
* **bcrypt (Password hashing)**
* **Cloudinary (Media handling)**

---

##  Features

*  User Authentication (Login / Signup using JWT)
*  Access & Refresh Token system
*  Video upload & management
*  Like / Dislike system
*  Comments & replies
*  Subscriptions (Follow system)
*  Dashboard APIs
*  Scalable project structure (MVC pattern)

---

##  Project Structure

```
src/
 ├── controllers/
 ├── models/
 ├── routes/
 ├── middlewares/
 ├── utils/
 ├── db/
```

---

##  Environment Variables

Create a `.env` file in the root directory:

```
PORT=8000
MONGODB_URI=your-mongodb-uri
CORS_ORIGIN=*
ACCESS_TOKEN_SECRET=your-secret
ACCESS_TOKEN_EXPIRY=1d
REFRESH_TOKEN_SECRET=your-refresh-secret
REFRESH_TOKEN_EXPIRY=10d
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

---

##  Getting Started

### 1. Clone the repository

```
git clone https://github.com/ambadeanshul/backendProject.git
cd backendProject
```

### 2. Install dependencies

```
npm install
```

### 3. Run the server

```
npm run dev
```

---

##  API Highlights

* `/api/v1/users` → User management
* `/api/v1/videos` → Video APIs
* `/api/v1/comments` → Comment system
* `/api/v1/subscriptions` → Subscription system

---

##  Learning Reference

This project is inspired by backend concepts commonly used in production systems and follows best practices for scalable API design.

---

##  Future Improvements

*  Rate limiting
*  Logging & monitoring
*  Unit & integration testing
*  Deployment (Docker / Cloud)

---

## Author

**Anshul Ambade**

---


