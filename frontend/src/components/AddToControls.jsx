import { useState } from "react";
import API from "../api/axios";

const AddToControls = ({ productId, initialQuantity = 1, onAdded }) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const addToCart = async () => {
    try {
      const userId = Number(localStorage.getItem('userId')) || 1;
      await API.post('/cart', {
        userId,
        productId: productId,
        quantity: quantity
      });
      if (onAdded) onAdded('cart');
      alert('Added to cart');
    } catch (err) {
      console.error(err);
      alert('Failed to add to cart');
    }
  };

  const addToWishlist = async () => {
    try {
      const userId = Number(localStorage.getItem('userId')) || 1;
      await API.post('/wishlist', {
        userId,
        productId: productId
      });
      if (onAdded) onAdded('wishlist');
      alert('Added to wishlist');
    } catch (err) {
      console.error(err);
      alert('Failed to add to wishlist');
    }
  };

  return (
    <div style={{ marginTop: 12 }}>
      <label>
        Qty: 
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value) || 1)}
          style={{ width: 60, marginLeft: 8 }}
        />
      </label>

      <button style={{ marginLeft: 8 }} onClick={addToCart}>
        Add To Cart
      </button>

      <button style={{ marginLeft: 8 }} onClick={addToWishlist}>
        Add To Wishlist
      </button>
    </div>
  );
};

export default AddToControls;
