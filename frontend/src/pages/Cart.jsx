import { useEffect, useState } from "react";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);

  const userId = Number(localStorage.getItem("userId"));

  useEffect(() => {
    if (userId) {
      fetchCart();
    }
  }, []);

  const fetchCart = async () => {
    try {
      const res = await API.get(`/cart/${userId}`);
      setCartItems(res.data);
    } catch (error) {
      console.error("Error fetching cart:", error);
    }
  };

  const removeItem = async (id) => {
    try {
      await API.delete(`/cart/${id}`);
      fetchCart();
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Cart Page</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item.id}
              style={{
                border: "1px solid #ccc",
                marginBottom: "10px",
                padding: "10px",
              }}
            >
              <h3>Product ID: {item.productId}</h3>
              <p>Quantity: {item.quantity}</p>

              <button onClick={() => removeItem(item.id)}>
                Remove
              </button>
            </div>
          ))}

          <button onClick={() => navigate("/checkout")}>
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;