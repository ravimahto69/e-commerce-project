# E-Commerce Application Database Schema

## Database Name

```sql
ecommerce_db
```

---

# Tables Overview

The application uses the following tables:

1. users
2. products
3. cart_items
4. wishlist
5. orders
6. order_items

---

# 1. USERS TABLE

Stores user authentication and role information.

| Column Name | Data Type | Constraints |
|---|---|---|
| id | BIGINT | Primary Key, Auto Increment |
| name | VARCHAR(100) | NOT NULL |
| email | VARCHAR(150) | UNIQUE, NOT NULL |
| password | VARCHAR(255) | NOT NULL |
| role | VARCHAR(20) | DEFAULT 'USER' |
| created_at | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP |

---

# 2. PRODUCTS TABLE

Stores product details.

| Column Name | Data Type | Constraints |
|---|---|---|
| id | BIGINT | Primary Key, Auto Increment |
| title | VARCHAR(200) | NOT NULL |
| description | TEXT | NULL |
| price | DOUBLE | NOT NULL |
| image_url | VARCHAR(500) | NULL |
| category | VARCHAR(100) | NULL |
| stock | INT | DEFAULT 0 |
| created_at | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP |

---

# 3. CART_ITEMS TABLE

Stores products added to user cart.

| Column Name | Data Type | Constraints |
|---|---|---|
| id | BIGINT | Primary Key, Auto Increment |
| user_id | BIGINT | Foreign Key |
| product_id | BIGINT | Foreign Key |
| quantity | INT | DEFAULT 1 |

## Relationships

- user_id → users(id)
- product_id → products(id)

---

# 4. WISHLIST TABLE

Stores wishlist products for users.

| Column Name | Data Type | Constraints |
|---|---|---|
| id | BIGINT | Primary Key, Auto Increment |
| user_id | BIGINT | Foreign Key |
| product_id | BIGINT | Foreign Key |

## Relationships

- user_id → users(id)
- product_id → products(id)

---

# 5. ORDERS TABLE

Stores order details.

| Column Name | Data Type | Constraints |
|---|---|---|
| id | BIGINT | Primary Key, Auto Increment |
| user_id | BIGINT | Foreign Key |
| total_amount | DOUBLE | NOT NULL |
| address | VARCHAR(255) | NOT NULL |
| phone | VARCHAR(20) | NOT NULL |
| status | VARCHAR(50) | DEFAULT 'PLACED' |
| created_at | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP |

## Relationships

- user_id → users(id)

---

# 6. ORDER_ITEMS TABLE

Stores ordered products for each order.

| Column Name | Data Type | Constraints |
|---|---|---|
| id | BIGINT | Primary Key, Auto Increment |
| order_id | BIGINT | Foreign Key |
| product_id | BIGINT | Foreign Key |
| quantity | INT | DEFAULT 1 |
| price | DOUBLE | NOT NULL |

## Relationships

- order_id → orders(id)
- product_id → products(id)

---

# Entity Relationships

```text
users
 ├── cart_items
 ├── wishlist
 └── orders
        └── order_items

products
 ├── cart_items
 ├── wishlist
 └── order_items
```

---

# Features Supported By Database

This schema supports:

- User Authentication
- Product Management
- Shopping Cart
- Wishlist
- Checkout System
- Order History
- Admin Product Management

---