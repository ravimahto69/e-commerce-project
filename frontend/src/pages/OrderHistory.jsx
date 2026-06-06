import { useEffect, useState } from "react";
import API from "../api/axios";

function OrderHistory() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const userId = Number(localStorage.getItem("userId"));

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await API.get(`/orders/user/${userId}`);
      setOrders(response.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h2 style={{ textAlign: "center" }}>Loading Orders...</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>My Orders</h1>

      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        orders.map((order) => (
          <div
            key={order.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "15px",
              marginBottom: "20px",
            }}
          >
            <h3>Order #{order.id}</h3>

            <p>
              <strong>Total Amount:</strong> ₹{order.totalAmount}
            </p>

            <p>
              <strong>Status:</strong>{" "}
              {order.status || "Placed"}
            </p>

            <p>
              <strong>Order Date:</strong>{" "}
              {order.orderDate
                ? new Date(order.orderDate).toLocaleString()
                : "N/A"}
            </p>

            {order.items && order.items.length > 0 && (
              <>
                <h4>Products</h4>

                <ul>
                  {order.items.map((item) => (
                    <li key={item.id}>
                      Product ID: {item.productId} | Quantity:{" "}
                      {item.quantity}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        ))
      )}
    </div>
  );
}

export default OrderHistory;