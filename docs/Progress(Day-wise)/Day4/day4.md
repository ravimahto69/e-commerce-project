
## Day 4 Progress Report

---

# Objective

The goal for Day 4 was to implement the complete shopping workflow, including:

* Cart Management
* Wishlist Management
* Checkout Process
* Order Placement
* Order Success Page
* Database Order Storage

---

# Features Completed

## 1. Shopping Cart

### Implemented Functionalities

✅ Add Product to Cart

✅ View Cart Items

✅ Update Product Quantity

✅ Remove Product from Cart

✅ Calculate Cart Total

### APIs Implemented

| Method | Endpoint            | Description           |
| ------ | ------------------- | --------------------- |
| POST   | /cart               | Add item to cart      |
| GET    | /cart/user/{userId} | Get user cart items   |
| PUT    | /cart/{id}          | Update quantity       |
| DELETE | /cart/{id}          | Remove item from cart |

### Cart Page Features

* Product Name
* Product Price
* Quantity Controls
* Remove Button
* Cart Total
* Checkout Button

---

## 2. Wishlist Management

### Implemented Functionalities

✅ Add Product to Wishlist

✅ Remove Product from Wishlist

✅ View Wishlist

### APIs Implemented

| Method | Endpoint                | Description  |
| ------ | ----------------------- | ------------ |
| POST   | /wishlist               | Add item     |
| GET    | /wishlist/user/{userId} | Get wishlist |
| DELETE | /wishlist/{id}          | Remove item  |

### Wishlist Features

* Saved Products List
* Quick Access to Product Details
* Remove from Wishlist

---

## 3. Checkout System

### Implemented Functionalities

✅ Checkout Form

✅ Customer Information Collection

### Fields Included

* Full Name
* Address
* Phone Number

### Validation

* Required Fields Validation
* Empty Input Prevention

---

## 4. Order Placement

### Implemented Functionalities

✅ Create Order

✅ Save Order in Database

✅ Generate Order Record

✅ Clear Cart After Successful Order

### API Implemented

| Method | Endpoint | Description |
| ------ | -------- | ----------- |
| POST   | /orders  | Place Order |

### Order Data Stored

```json
{
  "userId": 1,
  "products": [
    {
      "productId": 2,
      "quantity": 3
    }
  ],
  "totalAmount": 4500,
  "address": "Bhopal, MP",
  "phone": "9876543210"
}
```

---

## 5. Order Success Page

### Implemented Functionalities

✅ Success Message

✅ Order Confirmation

✅ Navigation Back to Products

### User Experience

After successful order placement:

1. Order stored in database
2. Cart cleared automatically
3. User redirected to Success Page
4. Confirmation displayed

---

## Application Flow Completed

### Cart Workflow

```text
Products Page
      ↓
Add To Cart
      ↓
Cart Page
      ↓
Update Quantity
      ↓
Checkout
```

---

### Wishlist Workflow

```text
Products Page
      ↓
Add To Wishlist
      ↓
Wishlist Page
      ↓
Remove Item
```

---

### Order Workflow

```text
Cart Page
      ↓
Checkout Page
      ↓
Fill Details
      ↓
Place Order
      ↓
Order Saved
      ↓
Order Success Page
```

---

# Database Updates

## Collections/Tables Used

### Cart

```json
{
  "id": 1,
  "userId": 1,
  "productId": 2,
  "quantity": 2
}
```

### Wishlist

```json
{
  "id": 1,
  "userId": 1,
  "productId": 3
}
```

### Orders

```json
{
  "id": 1,
  "userId": 1,
  "products": [],
  "totalAmount": 4500,
  "address": "Bhopal",
  "phone": "9876543210",
  "orderDate": "2026-06-06"
}
```

---

# Frontend Pages Completed

| Page            | Status     |
| --------------- | ---------- |
| Products        | ✅ Complete |
| Product Details | ✅ Complete |
| Cart            | ✅ Complete |
| Wishlist        | ✅ Complete |
| Checkout        | ✅ Complete |
| Order Success   | ✅ Complete |

---

# Backend APIs Completed

| Module         | Status     |
| -------------- | ---------- |
| Authentication | ✅ Complete |
| Products       | ✅ Complete |
| Cart           | ✅ Complete |
| Wishlist       | ✅ Complete |
| Orders         | ✅ Complete |

---

# Testing Performed

## Cart Testing

✅ Add Product

✅ Remove Product

✅ Update Quantity

✅ Calculate Total

---

## Wishlist Testing

✅ Add Item

✅ Remove Item

✅ Retrieve Wishlist

---

## Checkout Testing

✅ Form Submission

✅ Validation

✅ Order Creation

---

## Order Testing

✅ Save Order

✅ Clear Cart

✅ Redirect Success Page

---

# Challenges Faced

### Challenge 1

Synchronizing cart quantity updates between frontend and backend.

### Solution

Implemented API refresh after quantity modification.

---

### Challenge 2

Clearing cart after successful order placement.

### Solution

Added cart cleanup logic immediately after order creation.

---

### Challenge 3

Managing user-specific cart and wishlist data.

### Solution

Used authenticated user ID from local storage and backend validation.

---



# Day 4 Deliverables Status

| Deliverable        | Status  |
| ------------------ | ------- |
| Add to Cart        | ✅       |
| View Cart          | ✅       |
| Remove from Cart   | ✅       |
| Wishlist           | ✅       |
| Checkout           | ✅       |
| Place Order        | ✅       |
| Save Order         | ✅       |
| Order Success Page | ✅       |
| Screen Recording   | ✅ Ready |

---

# Conclusion

Day 4 objectives were successfully completed. The application now supports a full e-commerce purchasing workflow, allowing users to add products to cart, manage wishlist items, complete checkout, place orders, and receive order confirmations. All data is persisted in the database and integrated with the frontend application.

**Project Status:** Day 4 Completed Successfully ✅
