# 🛒 E-Commerce Application

A full-stack E-Commerce Web Application built using **React + Vite**, **Spring Boot**, and **MySQL**.

This project allows users to browse products, manage cart and wishlist, place orders, and provides an admin dashboard for product management.

---

# 🚀 Tech Stack

## Frontend
- React + Vite
- Tailwind css
- React Router DOM
- Axios

## Backend
- Spring Boot
- Spring Security
- Spring Data JPA
- JWT Authentication
- Lombok

## Database
- MySQL

---

# 📂 Project Structure

```text
e-commerce/
│
├── backend/
│   ├── src/
│   ├── pom.xml
│   └── mvnw
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── docs/
│   ├── api-endpoints.md
│   ├── database-schema.md
│   ├── day-1-progress.md
│   ├── screenshots/
│   └── wireframes/
│
└── README.md
```

---

# ✨ Features

## Authentication
- User Registration
- User Login
- JWT Authentication
- Logout Functionality

---

## Product Management
- Product Listing
- Product Details
- Search Products
- Filter Products by Category

---

## Shopping Cart
- Add to Cart
- Remove from Cart
- Update Quantity
- Cart Summary

---

## Wishlist
- Add to Wishlist
- Remove from Wishlist
- View Wishlist

---

## Order Management
- Checkout
- Place Order
- Order History
- Order Success Page

---

## Admin Dashboard
- Add Product
- Update Product
- Delete Product
- View Orders

---

# 🗄️ Database Tables

- users
- products
- cart_items
- wishlist
- orders
- order_items

---

# 🔐 Authentication

This project uses:

- JWT Authentication
- Spring Security
- BCrypt Password Encryption

---

# ⚙️ Frontend Setup

## Navigate to frontend

```bash
cd frontend
```

## Install dependencies

```bash
npm install
```

## Run frontend

```bash
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

# ⚙️ Backend Setup

## Navigate to backend

```bash
cd backend
```

## Configure MySQL

Update:

```text
src/main/resources/application.properties
```

Add your database configuration:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/ecommerce_db
spring.datasource.username=root
spring.datasource.password=YOUR_PASSWORD

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true

server.port=5000
```

---

## Run Backend

### Using Maven

```bash
mvn spring-boot:run
```

OR

```bash
./mvnw spring-boot:run
```

Backend runs on:

```text
http://localhost:5000
```

---

# 🛠️ API Documentation

API documentation available at:

```text
docs/api-endpoints.md
```

Includes:

- Authentication APIs
- Product APIs
- Cart APIs
- Wishlist APIs
- Order APIs
- Admin APIs

---

# 🗄️ Database Schema

Database schema available at:

```text
docs/database-schema.md
```

---

# 📸 Screenshots

Screenshots available inside:

```text
docs/screenshots/
```

---

# 🎨 Wireframes

Wireframes available inside:

```text
docs/wireframes/
```

---

# 🔄 Development Progress

## Day 1
- Project setup completed
- Frontend initialized
- Backend initialized
- Database schema designed
- API endpoints planned
- Wireframes created

---

# 🚧 Future Improvements

- Payment Gateway Integration
- Product Reviews & Ratings
- Inventory Management
- Product Image Upload
- Dark Mode
- Analytics Dashboard

---


# 📌 GitHub Repository

```text[
https://github.com/ravimahto69/e-commerce](https://github.com/ravimahto69/e-commerce-project)
```

---

# 📜 License

This project is developed for learning and educational purposes.
