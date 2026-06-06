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
    userId,
  });

  useEffect(() => {
    const loadCartDetails = async () => {
      try {
        const cartRes = await API.get(`/cart/${userId}`);

        const cart = Array.isArray(cartRes.data)
          ? cartRes.data
          : [];

        const detailedItems = await Promise.all(
          cart.map(async (item) => {
            const productRes = await API.get(
              `/products/${item.productId}`
            );

            return {
              ...item,
              product: productRes.data,
            };
          })
        );

        setCartItems(detailedItems);

        const total = detailedItems.reduce(
          (sum, item) =>
            sum +
            (Number(item.product?.price) || 0) *
              (Number(item.quantity) || 0),
          0
        );

        setForm((prev) => ({
          ...prev,
          totalAmount: total,
        }));
      } catch (error) {
        console.error(
          "Failed to load checkout details",
          error
        );
      } finally {
        setLoading(false);
      }
    };

    loadCartDetails();
  }, [userId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/orders", {
        ...form,
        userId,
      });

      await API.delete(
        `/cart/clear/${userId}`
      );

      navigate("/success");
    } catch (error) {
      console.error(error);
      alert("Failed to place order");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-[#f6f8fb]">
        <div className="text-center">
          <div className="w-14 h-14 border-4 border-[#08122f] border-t-transparent rounded-full animate-spin mx-auto"></div>

          <p className="mt-4 text-lg font-semibold text-slate-500">
            Loading Checkout...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f6f8fb]">

      {/* Hero */}

      <section className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-12">

          <p className="uppercase tracking-widest text-sm text-slate-500">
            Store
          </p>

          <h1 className="text-5xl md:text-6xl font-black text-[#08122f] mt-2">
            Checkout
          </h1>

          <p className="text-lg text-slate-500 mt-3">
            Complete your order securely.
          </p>

        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Order Summary */}

          <div className="lg:col-span-2">

            <div className="bg-white rounded-[32px] border border-gray-200 p-6">

              <h2 className="text-2xl font-black text-[#08122f] mb-6">
                Order Summary
              </h2>

              {cartItems.length === 0 ? (
                <div className="text-center py-16">
                  <h3 className="text-2xl font-bold text-[#08122f]">
                    Your Cart is Empty
                  </h3>

                  <p className="text-slate-500 mt-3">
                    Add products before checkout.
                  </p>
                </div>
              ) : (
                <>
                  <div className="space-y-4">

                    {cartItems.map((item) => (
                      <div
                        key={item.id}
                        className="
                          flex
                          items-center
                          justify-between
                          border-b
                          border-gray-200
                          pb-4
                        "
                      >
                        <div className="flex items-center gap-4">

                          <img
                            src={
                              item.product?.imageUrl ||
                              "https://via.placeholder.com/100"
                            }
                            alt={item.product?.name}
                            className="
                              w-16
                              h-16
                              rounded-2xl
                              object-cover
                              border
                              border-gray-200
                            "
                          />

                          <div>

                            <h3 className="font-bold text-lg text-[#08122f]">
                              {item.product?.name}
                            </h3>

                            <p className="text-sm text-slate-500">
                              Qty: {item.quantity}
                            </p>

                          </div>

                        </div>

                        <div className="text-right">

                          <p className="font-bold text-lg text-[#08122f]">
                            ₹
                            {(Number(
                              item.product?.price
                            ) || 0) *
                              (Number(
                                item.quantity
                              ) || 0)}
                          </p>

                        </div>

                      </div>
                    ))}

                  </div>

                  <div className="flex justify-between items-center pt-6 mt-6 border-t border-gray-200">

                    <span className="text-xl font-bold text-[#08122f]">
                      Total
                    </span>

                    <span className="text-3xl font-black text-[#08122f]">
                      ₹{form.totalAmount}
                    </span>

                  </div>

                </>
              )}

            </div>

          </div>

          {/* Shipping Form */}

          <div>

            <div className="bg-white rounded-[32px] border border-gray-200 p-6 sticky top-6">

              <h2 className="text-2xl font-black text-[#08122f] mb-6">
                Shipping Details
              </h2>

              <form
                onSubmit={handleSubmit}
                className="space-y-4"
              >

                <input
                  type="text"
                  required
                  value={form.customerName}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      customerName:
                        e.target.value,
                    })
                  }
                  placeholder="Full Name"
                  className="w-full border border-gray-200 rounded-2xl p-4 focus:outline-none focus:border-[#08122f]"
                />

                <textarea
                  rows="4"
                  required
                  value={form.address}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      address:
                        e.target.value,
                    })
                  }
                  placeholder="Delivery Address"
                  className="w-full border border-gray-200 rounded-2xl p-4 focus:outline-none focus:border-[#08122f]"
                />

                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      phone:
                        e.target.value,
                    })
                  }
                  placeholder="Phone Number"
                  className="w-full border border-gray-200 rounded-2xl p-4 focus:outline-none focus:border-[#08122f]"
                />

                <div className="bg-slate-50 rounded-[24px] border border-gray-200 p-5">

                  <div className="flex justify-between mb-3">
                    <span>Items</span>
                    <span>
                      {cartItems.length}
                    </span>
                  </div>

                  <div className="flex justify-between mb-3">
                    <span>Shipping</span>

                    <span className="font-semibold">
                      Free
                    </span>
                  </div>

                  <div className="border-t border-gray-200 pt-4 flex justify-between">

                    <span className="font-bold text-lg">
                      Total
                    </span>

                    <span className="font-black text-2xl text-[#08122f]">
                      ₹{form.totalAmount}
                    </span>

                  </div>

                </div>

                <button
                  type="submit"
                  disabled={
                    cartItems.length === 0
                  }
                  className="
                    w-full
                    bg-[#08122f]
                    text-white
                    py-4
                    rounded-2xl
                    font-semibold
                    hover:opacity-90
                    transition
                    disabled:opacity-50
                  "
                >
                  Place Order
                </button>

              </form>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Checkout;  