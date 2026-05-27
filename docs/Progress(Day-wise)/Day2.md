# Day 2 — Backend + Database Setup

## Project
E-Commerce Backend Application

## Tech Stack
- Spring Boot
- MySQL
- Spring Security
- JWT Authentication
- JPA / Hibernate
- Maven

---

# Tasks Completed

## ✅ Database Connection
- Connected Spring Boot application with MySQL database
- Configured `application.properties`
- Enabled JPA Hibernate

---

## ✅ Created Entities / Models

### User Entity
Fields:
- id
- name
- email
- password

### Product Entity
Fields:
- id
- name
- description
- price
- imageUrl
- stock

### Cart Entity
Fields:
- id
- quantity
- user
- product

### Order Entity
Fields:
- id
- totalAmount
- status
- user

---

# APIs Implemented

## ✅ Register API

### Endpoint
```http
POST /auth/register
```

### Features
- User registration
- Password encryption using BCrypt
- Save user to MySQL database

---

## ✅ Login API

### Endpoint
```http
POST /auth/login
```

### Features
- User authentication
- Password validation
- JWT token generation

---

## ✅ Get All Products API

### Endpoint
```http
GET /products
```

### Features
- Fetch all products from database

---

## ✅ Get Single Product API

### Endpoint
```http
GET /products/{id}
```

### Features
- Fetch single product using product ID

---

# Security Implementation

## JWT Authentication
Implemented:
- JWT token generation
- Secret key configuration
- Token expiration support

---

# Folder Structure

```text
src/main/java/com/ecommerce/backend
│
├── config
├── controller
├── dto
├── entity
├── repository
├── security
|-- exception
├── service
```

---

# Database Used

```sql
ecommerce_db
```

---

# Dependencies Used

- Spring Web
- Spring Data JPA
- MySQL Driver
- Spring Security
- Lombok
- JWT (jjwt)

---

# API Testing

## Tool Used
- Postman

## APIs Tested
- Register API ✅
- Login API ✅
- Get Products API ✅
- Get Single Product API ✅

---

# Sample Product Data Added

```sql
INSERT INTO product(name, description, price, image_url, stock)
VALUES
('iPhone 15', 'Apple Mobile', 79999, 'img1.jpg', 10),
('Samsung S24', 'Samsung Mobile', 69999, 'img2.jpg', 15);
```

---

# Learning Outcomes

- Learned Spring Boot project structure
- Understood JPA entity relationships
- Connected Spring Boot with MySQL
- Implemented REST APIs
- Implemented JWT Authentication
- Tested APIs using Postman

---

# Day 2 Status

✅ Completed Successfully