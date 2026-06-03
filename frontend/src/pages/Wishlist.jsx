import { useEffect, useState } from "react";
import API from "../api/axios";

function Wishlist() {
  const [items, setItems] = useState([]);
  const userId = 1;

  useEffect(() => {
    fetchWishlist();
  }, []);

  const fetchWishlist = async () => {
    const res = await API.get(`/wishlist/${userId}`);
    setItems(res.data);
  };

  const removeItem = async (id) => {
    await API.delete(`/wishlist/${id}`);
    fetchWishlist();
  };

  return (
    <div>
      <h1>Wishlist</h1>
      {items.map(item => (
        <div key={item.id}>
          <h3>Product ID: {item.productId}</h3>
          <button onClick={() => removeItem(item.id)}>
            Remove from Wishlist
          </button>
        </div>
      ))}
    </div>
  );
}

export default Wishlist;