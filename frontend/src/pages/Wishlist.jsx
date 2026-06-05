import { useEffect, useState } from "react";
import API from "../api/axios";

function Wishlist() {
  const [items, setItems] = useState([]);

  const userId = Number(localStorage.getItem("userId")) || 1;

  useEffect(() => {
    fetchWishlist();
  }, []);

  const fetchWishlist = async () => {
    try {
      const res = await API.get(`/wishlist/${userId}`);
      console.log("Wishlist Data:", res.data);
      setItems(res.data);
    } catch (error) {
      console.error("Error fetching wishlist:", error);
    }
  };

  const removeItem = async (id) => {
    try {
      await API.delete(`/wishlist/${id}`);
      fetchWishlist();
    } catch (error) {
      console.error("Error removing wishlist item:", error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Wishlist</h1>

      {items.length === 0 ? (
        <p>No items in wishlist.</p>
      ) : (
        items.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #ccc",
              marginBottom: "10px",
              padding: "10px",
            }}
          >
            <h3>Product ID: {item.productId}</h3>

            <button onClick={() => removeItem(item.id)}>
              Remove from Wishlist
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Wishlist;