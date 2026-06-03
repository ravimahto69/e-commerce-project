import { useEffect, useState } from "react";
import API from "../api/axios";

import { useNavigate } from "react-router-dom";

function Checkout() {

  const navigate = useNavigate();
  const userId = Number(localStorage.getItem("userId")) || 1;
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const [form, setForm] = useState({
    customerName: "",
    address: "",
    phone: "",
    totalAmount: 0,
    userId
  });

  useEffect(() => {
    const loadCartDetails = async () => {
      try {
        const cartRes = await API.get(`/cart/${userId}`);
        const cart = Array.isArray(cartRes.data) ? cartRes.data : [];

        const detailedItems = await Promise.all(
          cart.map(async (item) => {
            const productRes = await API.get(`/products/${item.productId}`);
            return {
              ...item,
              product: productRes.data
            };
          })
        );

        setCartItems(detailedItems);
        const total = detailedItems.reduce(
          (sum, item) => sum + (Number(item.product?.price) || 0) * (Number(item.quantity) || 0),
          0
        );
        setForm((prev) => ({ ...prev, totalAmount: total }));
      } catch (error) {
        console.error("Failed to load checkout details", error);
      } finally {
        setLoading(false);
      }
    };

    loadCartDetails();
  }, [userId]);

  const handleSubmit = async (e) => {

    e.preventDefault();

    const orderPayload = {
      ...form,
      userId
    };

    await API.post("/orders", orderPayload);
    await API.delete(`/cart/clear/${userId}`);

    navigate("/success");
  };

  return (
    <div>

      <h1>Checkout</h1>

      <div style={{ marginBottom: 20 }}>
        <h2>Order Details</h2>
        {loading ? (
          <p>Loading cart items...</p>
        ) : cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            {cartItems.map((item) => (
              <div key={item.id} style={{ marginBottom: 12 }}>
                <strong>{item.product?.name || `Product #${item.productId}`}</strong>
                <div>Price: ₹{item.product?.price || 0}</div>
                <div>Quantity: {item.quantity}</div>
                <div>Subtotal: ₹{(Number(item.product?.price) || 0) * (Number(item.quantity) || 0)}</div>
              </div>
            ))}
            <h3>Total: ₹{form.totalAmount}</h3>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Name"
          value={form.customerName}
          onChange={(e) =>
            setForm({...form, customerName: e.target.value})
          }
        />

        <input
          type="text"
          placeholder="Address"
          value={form.address}
          onChange={(e) =>
            setForm({...form, address: e.target.value})
          }
        />

        <input
          type="text"
          placeholder="Phone"
          value={form.phone}
          onChange={(e) =>
            setForm({...form, phone: e.target.value})
          }
        />

        <div style={{ margin: "12px 0" }}>
          <strong>Final Amount: ₹{form.totalAmount}</strong>
        </div>

        <button type="submit">
          Place Order
        </button>

      </form>

    </div>
  );
}

export default Checkout;