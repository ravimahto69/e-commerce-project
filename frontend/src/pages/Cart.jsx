import { useEffect, useState } from "react";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updatingQuantity, setUpdatingQuantity] = useState({}); // Track which item is being updated

  const userId = Number(localStorage.getItem("userId"));

  useEffect(() => {
    if (userId) {
      fetchCart();
    } else {
      setLoading(false);
    }
  }, []);

  const fetchCart = async () => {
    try {
      setLoading(true);

      const response = await API.get(`/cart/${userId}`);
      const cart = response.data || [];

      const detailedItems = await Promise.all(
        cart.map(async (item) => {
          try {
            const productResponse = await API.get(
              `/products/${item.productId}`
            );

            return {
              ...item,
              product: productResponse.data,
            };
          } catch (error) {
            console.error(
              `Failed to fetch product ${item.productId}`,
              error
            );

            return {
              ...item,
              product: null,
            };
          }
        })
      );

      setCartItems(detailedItems);
    } catch (error) {
      console.error("Error fetching cart:", error);
    } finally {
      setLoading(false);
    }
  };

  const updateQuantity = async (id, newQuantity) => {
    if (newQuantity < 1) return; // Prevent quantity less than 1
    
    try {
      setUpdatingQuantity(prev => ({ ...prev, [id]: true }));
      
      await API.put(`/cart/${id}`, { quantity: newQuantity });
      
      // Update local state
      setCartItems((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    } catch (error) {
      console.error("Error updating quantity:", error);
      alert("Failed to update quantity");
    } finally {
      setUpdatingQuantity(prev => ({ ...prev, [id]: false }));
    }
  };

  const removeItem = async (id) => {
    try {
      await API.delete(`/cart/${id}`);

      setCartItems((prev) =>
        prev.filter((item) => item.id !== id)
      );
    } catch (error) {
      console.error("Error removing item:", error);
      alert("Failed to remove item");
    }
  };

  const totalAmount = cartItems.reduce(
    (sum, item) =>
      sum +
      (item.product?.price || 0) *
        (item.quantity || 1),
    0
  );

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-[#f6f8fb]">
        <div className="text-center">
          <div className="w-14 h-14 border-4 border-[#08122f] border-t-transparent rounded-full animate-spin mx-auto"></div>

          <p className="mt-4 text-lg font-semibold text-slate-500">
            Loading Cart...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f6f8fb]">

      {/* Hero Section */}
      <section className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-16">

          <p className="uppercase tracking-widest text-sm text-slate-500 font-medium">
            Store
          </p>

          <h1 className="text-6xl font-black text-[#08122f] mt-3">
            Shopping Cart
          </h1>

          <p className="text-xl text-slate-500 mt-4 max-w-2xl">
            Review your selected products before proceeding
            to checkout.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12">

        {cartItems.length === 0 ? (
          <div className="bg-white rounded-[40px] border border-gray-200 p-16 text-center">

            <div className="text-7xl mb-6">🛒</div>

            <h2 className="text-5xl font-black text-[#08122f]">
              Your Cart is Empty
            </h2>

            <p className="text-slate-500 text-lg mt-5">
              Discover premium products designed to elevate
              your everyday experience.
            </p>

            <button
              onClick={() => navigate("/products")}
              className="
                mt-10
                bg-[#08122f]
                text-white
                px-10
                py-4
                rounded-2xl
                font-semibold
                hover:opacity-90
                transition
              "
            >
              Explore Products
            </button>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">

            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">

              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="
                    bg-white
                    rounded-[32px]
                    border
                    border-gray-200
                    hover:border-gray-300
                    transition-all
                    duration-300
                    p-6
                    flex
                    flex-col
                    md:flex-row
                    gap-6
                  "
                >

                  <img
                    src={
                      item.product?.imageUrl ||
                      "https://via.placeholder.com/300"
                    }
                    alt={item.product?.name || "Product"}
                    className="
                      w-full
                      md:w-44
                      h-44
                      object-cover
                      rounded-[24px]
                      bg-gray-100
                    "
                  />

                  <div className="flex-1">

                    <h2 className="text-2xl font-bold text-[#08122f]">
                      {item.product?.name}
                    </h2>

                    <p className="text-slate-500 mt-3">
                      Quantity
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        disabled={updatingQuantity[item.id] || item.quantity <= 1}
                        className="
                          bg-slate-100 
                          hover:bg-slate-200 
                          disabled:opacity-50 
                          disabled:cursor-not-allowed
                          text-[#08122f] 
                          font-bold 
                          px-4 
                          py-2 
                          rounded-full
                          transition
                          w-10
                          h-10
                          flex
                          items-center
                          justify-center
                        "
                      >
                        -
                      </button>
                      
                      <span className="bg-slate-100 px-6 py-2 rounded-full font-semibold text-[#08122f] min-w-[60px] text-center">
                        {updatingQuantity[item.id] ? "..." : item.quantity}
                      </span>
                      
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        disabled={updatingQuantity[item.id]}
                        className="
                          bg-slate-100 
                          hover:bg-slate-200 
                          disabled:opacity-50 
                          disabled:cursor-not-allowed
                          text-[#08122f] 
                          font-bold 
                          px-4 
                          py-2 
                          rounded-full
                          transition
                          w-10
                          h-10
                          flex
                          items-center
                          justify-center
                        "
                      >
                        +
                      </button>
                    </div>

                    <h3 className="text-3xl font-black text-[#08122f] mt-5">
                      ₹{item.product?.price || 0}
                    </h3>

                    <p className="text-slate-500 mt-3">
                      Subtotal:
                      <span className="font-bold text-[#08122f] ml-2">
                        ₹
                        {(item.product?.price || 0) *
                          item.quantity}
                      </span>
                    </p>
                  </div>

                  <div className="flex items-center">

                    <button
                      onClick={() => removeItem(item.id)}
                      className="
                        border
                        border-red-200
                        text-red-500
                        px-5
                        py-3
                        rounded-2xl
                        hover:bg-red-50
                        transition
                      "
                    >
                      Remove
                    </button>

                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div>

              <div
                className="
                  bg-white
                  rounded-[32px]
                  border
                  border-gray-200
                  p-8
                  sticky
                  top-6
                "
              >

                <h2 className="text-3xl font-black text-[#08122f] mb-8">
                  Order Summary
                </h2>

                <div className="space-y-5">

                  <div className="flex justify-between">
                    <span className="text-slate-500">
                      Items
                    </span>

                    <span className="font-semibold text-[#08122f]">
                      {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-slate-500">
                      Shipping
                    </span>

                    <span className="font-semibold text-green-600">
                      Free
                    </span>
                  </div>

                  <div className="border-t pt-5 flex justify-between">
                    <span className="text-2xl font-bold text-[#08122f]">
                      Total
                    </span>

                    <span className="text-3xl font-black text-[#08122f]">
                      ₹{totalAmount}
                    </span>
                  </div>

                </div>

                <button
                  onClick={() =>
                    navigate("/checkout")
                  }
                  className="
                    w-full
                    mt-8
                    bg-[#08122f]
                    text-white
                    py-4
                    rounded-2xl
                    font-semibold
                    hover:opacity-90
                    transition
                  "
                >
                  Proceed to Checkout →
                </button>

                <button
                  onClick={() =>
                    navigate("/products")
                  }
                  className="
                    w-full
                    mt-4
                    border
                    border-gray-200
                    bg-white
                    py-4
                    rounded-2xl
                    font-semibold
                    hover:bg-gray-50
                    transition
                  "
                >
                  Continue Shopping
                </button>

              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;