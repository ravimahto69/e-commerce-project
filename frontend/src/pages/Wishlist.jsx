import { useEffect, useState } from "react";
import API from "../api/axios";

function Wishlist() {
  const [items, setItems] = useState([]);

  const userId = Number(localStorage.getItem("userId"));

  useEffect(() => {
    fetchWishlist();
  }, []);

  const fetchWishlist = async () => {
    if (!userId) return;

    try {
      const res = await API.get(`/wishlist/${userId}`);
      setItems(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const removeItem = async (id) => {
    try {
      await API.delete(`/wishlist/${id}`);
      fetchWishlist();
    } catch (error) {
      console.error(error);
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
              padding: "10px",
              marginBottom: "10px",
            }}
          >
            <h3>Product ID: {item.productId}</h3>

            <button
              onClick={() => removeItem(item.id)}
            >
              Remove from Wishlist
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Wishlist;