# E-Commerce Application API Documentation

## Base URL

```text
http://localhost:5000/api
```

---

# Authentication APIs

## 1. Register User

| Property | Value |
|---|---|
| Method | POST |
| Endpoint | /auth/register |
| Description | Register a new user |

### Request Body

```json
{
  "name": "Ravi",
  "email": "ravi@gmail.com",
  "password": "123456"
}
```

### Success Response

```json
{
  "message": "User registered successfully"
}
```

---

## 2. Login User

| Property | Value |
|---|---|
| Method | POST |
| Endpoint | /auth/login |
| Description | Login user and return JWT token |

### Request Body

```json
{
  "email": "ravi@gmail.com",
  "password": "123456"
}
```

### Success Response

```json
{
  "token": "jwt_token_here",
  "role": "USER"
}
```

---

# Product APIs

## 3. Get All Products

| Property | Value |
|---|---|
| Method | GET |
| Endpoint | /products |
| Description | Fetch all products |

### Success Response

```json
[
  {
    "id": 1,
    "title": "iPhone 15",
    "price": 79999
  }
]
```

---

## 4. Get Single Product

| Property | Value |
|---|---|
| Method | GET |
| Endpoint | /products/{id} |
| Description | Fetch product details by ID |

### Example

```text
/products/1
```

---

## 5. Search Products

| Property | Value |
|---|---|
| Method | GET |
| Endpoint | /products/search?keyword=iphone |
| Description | Search products by keyword |

---

## 6. Filter Products By Category

| Property | Value |
|---|---|
| Method | GET |
| Endpoint | /products/category/{categoryName} |
| Description | Get products by category |

### Example

```text
/products/category/Mobiles
```

---

# Cart APIs

## 7. Add To Cart

| Property | Value |
|---|---|
| Method | POST |
| Endpoint | /cart |
| Description | Add product to cart |

### Request Body

```json
{
  "productId": 1,
  "quantity": 2
}
```

---

## 8. Get Cart Items

| Property | Value |
|---|---|
| Method | GET |
| Endpoint | /cart |
| Description | Get all cart items for logged-in user |

---

## 9. Update Cart Quantity

| Property | Value |
|---|---|
| Method | PUT |
| Endpoint | /cart/{id} |
| Description | Update cart item quantity |

### Request Body

```json
{
  "quantity": 3
}
```

---

## 10. Remove Cart Item

| Property | Value |
|---|---|
| Method | DELETE |
| Endpoint | /cart/{id} |
| Description | Remove item from cart |

---

# Wishlist APIs

## 11. Add To Wishlist

| Property | Value |
|---|---|
| Method | POST |
| Endpoint | /wishlist |
| Description | Add product to wishlist |

### Request Body

```json
{
  "productId": 1
}
```

---

## 12. Get Wishlist

| Property | Value |
|---|---|
| Method | GET |
| Endpoint | /wishlist |
| Description | Get all wishlist items |

---

## 13. Remove Wishlist Item

| Property | Value |
|---|---|
| Method | DELETE |
| Endpoint | /wishlist/{id} |
| Description | Remove item from wishlist |

---

# Order APIs

## 14. Place Order

| Property | Value |
|---|---|
| Method | POST |
| Endpoint | /orders |
| Description | Place new order |

### Request Body

```json
{
  "address": "Jamshedpur, India",
  "phone": "9876543210"
}
```

---

## 15. Get Order History

| Property | Value |
|---|---|
| Method | GET |
| Endpoint | /orders |
| Description | Get logged-in user's order history |

---

## 16. Get Single Order

| Property | Value |
|---|---|
| Method | GET |
| Endpoint | /orders/{id} |
| Description | Get order details |

---

# Admin APIs

## 17. Add Product

| Property | Value |
|---|---|
| Method | POST |
| Endpoint | /admin/products |
| Description | Add new product (Admin only) |

### Request Body

```json
{
  "title": "Nike Shoes",
  "description": "Running shoes",
  "price": 4999,
  "category": "Fashion",
  "stock": 20
}
```

---

## 18. Update Product

| Property | Value |
|---|---|
| Method | PUT |
| Endpoint | /admin/products/{id} |
| Description | Update product details |

---

## 19. Delete Product

| Property | Value |
|---|---|
| Method | DELETE |
| Endpoint | /admin/products/{id} |
| Description | Delete product |

---

## 20. Get All Orders

| Property | Value |
|---|---|
| Method | GET |
| Endpoint | /admin/orders |
| Description | View all customer orders |

---

# Authentication & Security

## JWT Authentication

Protected routes require JWT token.

### Header Example

```text
Authorization: Bearer YOUR_JWT_TOKEN
```

---

# HTTP Status Codes

| Status Code | Meaning |
|---|---|
| 200 | Success |
| 201 | Created |
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |
| 500 | Internal Server Error |

---

# API Modules Summary

| Module | APIs Count |
|---|---|
| Authentication | 2 |
| Products | 4 |
| Cart | 4 |
| Wishlist | 3 |
| Orders | 3 |
| Admin | 4 |

---
