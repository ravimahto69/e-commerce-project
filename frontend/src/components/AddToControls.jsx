import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";
import { ShoppingCart, Heart } from "lucide-react";

const AddToControls = ({
  productId,
  initialQuantity = 1,
  onAdded,
}) => {
  const [quantity] = useState(initialQuantity);

  const navigate = useNavigate();

  const addToCart = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please login first");
      navigate("/login");
      return;
    }

    try {
      const userId = Number(
        localStorage.getItem("userId")
      );

      await API.post("/cart", {
        userId,
        productId,
        quantity,
      });

      onAdded?.("cart");
      alert("Added To Cart");
    } catch (err) {
      console.error(err);
      alert("Failed to add to cart");
    }
  };

  const addToWishlist = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please login first");
      navigate("/login");
      return;
    }

    try {
      const userId = Number(
        localStorage.getItem("userId")
      );

      await API.post("/wishlist", {
        userId,
        productId,
      });

      onAdded?.("wishlist");
      alert("Added To Wishlist");
    } catch (err) {
      console.error(err);
      alert("Failed to add to wishlist");
    }
  };

  return (
    <div className="mt-4 flex justify-center gap-3">

  <button
    onClick={addToCart}
    className="
      w-12
      h-12
      rounded-2xl
      bg-[#08122f]
      text-white
      flex
      items-center
      justify-center
    "
  >
    <ShoppingCart size={18} />
  </button>

  <button
    onClick={addToWishlist}
    className="
      w-12
      h-12
      rounded-2xl
      border
      border-gray-200
      flex
      items-center
      justify-center
    "
  >
    <Heart size={18} />
  </button>

</div>
  );
};

export default AddToControls;