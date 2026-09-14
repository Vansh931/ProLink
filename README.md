# ProLink

> A full-stack professional networking platform inspired by LinkedIn, built with the MERN stack.

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-22-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-5-000000?logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?logo=mongodb&logoColor=white)](https://www.mongodb.com/atlas)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

## Overview

**ProLink** is a MERN-stack social networking application designed around professional identity, networking, and content sharing.

The project combines user authentication, profile management, professional information, connection workflows, posts, engagement, notifications, and media uploads into a single web application.

## ✨ Features

### 🔐 Authentication & Authorization

- User registration and login
- Password hashing with `bcryptjs`
- JWT-based authentication
- HTTP-only authentication cookies
- Logout functionality
- Validation for duplicate usernames and email addresses

### 👤 Professional Profiles

- Personalized user profiles
- Profile image support
- Headline and professional information
- Skills management
- Education and experience details
- Profile editing

### 🤝 Professional Networking

- Search for users
- Send connection requests
- Accept or reject connection requests
- Disconnect existing connections
- Connection-related notifications

### 📝 Posts & Engagement

- Create posts
- Upload images with posts
- Like posts
- Comment on posts
- View social activity through the application

### ☁️ Media & Data Infrastructure

- MongoDB Atlas for application data
- Mongoose for database modeling and access
- Cloudinary for image storage
- Multer for handling uploaded files
- Axios for frontend API communication

## 🛠️ Tech Stack

| Layer | Technologies |
|---|---|
| Frontend | React, Vite, React Router, Axios, Tailwind CSS, React Icons |
| Backend | Node.js, Express.js |
| Database | MongoDB Atlas, Mongoose |
| Authentication | JWT, bcryptjs, HTTP-only cookies |
| Media Storage | Cloudinary |
| File Uploads | Multer |
| Development | Nodemon |

## 🏗️ Project Structure

```text
ProLink/
├── backend/
│   ├── config/
│   │   ├── cloudinary.js
│   │   └── db.js
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   ├── index.js
│   ├── package.json
│   └── .env
│
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── assets/
    │   └── ...
    ├── public/
    ├── package.json
    └── .env
