# Day 3 — Frontend Development + API Integration

## 🚀 Tasks Completed

### ✅ Frontend Setup

* Configured React + Vite project
* Installed Tailwind CSS
* Setup project folder structure
* Configured React Router DOM

---

## 📁 Frontend Folder Structure

```bash
src/
│
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── ProductCard.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── Register.jsx
│   ├── Products.jsx
│   ├── ProductDetail.jsx
│   ├── Cart.jsx
│   ├── Wishlist.jsx
│   ├── Checkout.jsx
│   └── OrderHistory.jsx
│
├── api/
│   └── axios.js
│
├── App.jsx
└── main.jsx
```

---

# 🛠 Features Implemented

## ✅ React Router Setup

Configured routes for:

* Home Page
* Login Page
* Register Page
* Products Page
* Product Detail Page
* Cart Page
* Wishlist Page
* Checkout Page
* Order History Page

---

## ✅ Product Card Component

Created reusable `ProductCard` component with:

* Product Name
* Product Description
* Product Price
* View Details Button

---

## ✅ API Integration

Connected frontend with Spring Boot backend APIs.

### APIs Used

* `GET /api/products`
* `GET /api/products/{id}`
* `POST /auth/login`
* `POST /auth/register`

---

## ✅ CORS Configuration

Configured Spring Boot backend to allow frontend requests from:

```bash
http://localhost:5173
```

---




# ⚠️ Problems Faced

* CORS errors during API requests
* React Router route configuration issues
* JSX syntax errors
* Backend API connection debugging

---

# ✅ Learnings

* React component structure
* Routing using React Router DOM
* API integration using Axios
* Spring Boot CORS configuration
* Reusable component design
* Frontend-backend communication

---


