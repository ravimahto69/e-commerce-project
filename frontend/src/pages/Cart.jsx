import { useEffect, useState } from "react";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";

function Cart() {

  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);

  const userId = 1;

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    const res = await API.get(`/cart/${userId}`);
    setCartItems(res.data);
  };

  const removeItem = async (id) => {

    await API.delete(`/cart/${id}`);

    fetchCart();
  };

  return (
    <div>

      <h1>Cart Page</h1>

      {cartItems.map(item => (

        <div key={item.id}>

          <h3>Product ID: {item.productId}</h3>

          <p>Quantity: {item.quantity}</p>

          <button onClick={() => removeItem(item.id)}>
            Remove
          </button>

        </div>
      ))}

      {cartItems.length > 0 && (
        <button onClick={() => navigate("/checkout")}>
          Proceed to Checkout
        </button>
      )}
    </div>
  );
}

export default Cart;