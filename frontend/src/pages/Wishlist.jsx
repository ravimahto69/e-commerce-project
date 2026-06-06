import { useEffect, useState } from "react";
import API from "../api/axios";

function Wishlist() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const userId = Number(localStorage.getItem("userId"));

  useEffect(() => {
    fetchWishlist();
  }, []);

  const fetchWishlist = async () => {
    if (!userId) {
      setLoading(false);
      return;
    }

    try {
      const res = await API.get(`/wishlist/${userId}`);

      const wishlist = Array.isArray(res.data)
        ? res.data
        : [];

      const detailedItems = await Promise.all(
        wishlist.map(async (item) => {
          try {
            const productRes = await API.get(
              `/products/${item.productId}`
            );

            return {
              ...item,
              product: productRes.data,
            };
          } catch {
            return item;
          }
        })
      );

      setItems(detailedItems);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const removeItem = async (id) => {
    try {
      await API.delete(`/wishlist/${id}`);

      setItems((prev) =>
        prev.filter((item) => item.id !== id)
      );
    } catch (error) {
      console.error(error);
    }
  };

  const addToCart = async (productId) => {
    try {
      await API.post("/cart", {
        userId,
        productId,
        quantity: 1,
      });

      alert("Added to Cart");
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-[#f6f8fb]">
        <div className="text-center">
          <div className="w-14 h-14 border-4 border-[#08122f] border-t-transparent rounded-full animate-spin mx-auto"></div>

          <p className="mt-4 text-lg font-semibold text-slate-500">
            Loading Wishlist...
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
            Wishlist
          </h1>

          <p className="text-xl text-slate-500 mt-4 max-w-2xl">
            Save your favorite products and purchase them later.
          </p>

        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12">

        {items.length === 0 ? (
          <div className="bg-white rounded-[40px] border border-gray-200 p-16 text-center">

            <div className="text-7xl mb-6">
              💔
            </div>

            <h2 className="text-5xl font-black text-[#08122f]">
              Your Wishlist is Empty
            </h2>

            <p className="text-slate-500 text-lg mt-5">
              Start adding products you love and save them for later.
            </p>

          </div>
        ) : (
          <>
            <div className="mb-8">
              <p className="text-slate-500 text-lg">
                {items.length} item(s) saved
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              {items.map((item) => (
                <div
                  key={item.id}
                  className="
                    bg-white
                    rounded-[32px]
                    border
                    border-gray-200
                    overflow-hidden
                    hover:border-gray-300
                    transition-all
                    duration-300
                  "
                >
                  <img
                    src={
                      item.product?.imageUrl ||
                      "https://via.placeholder.com/400"
                    }
                    alt={
                      item.product?.name ||
                      "Product"
                    }
                    className="
                      w-full
                      h-64
                      object-cover
                      bg-gray-100
                    "
                  />

                  <div className="p-6">

                    <h3 className="text-2xl font-bold text-[#08122f]">
                      {item.product?.name}
                    </h3>

                    <p className="text-slate-500 mt-3 line-clamp-3 min-h-[72px]">
                      {item.product?.description}
                    </p>

                    <h2 className="text-3xl font-black text-[#08122f] mt-5">
                      ₹{item.product?.price}
                    </h2>

                    <div className="flex gap-3 mt-6">

                      <button
                        onClick={() =>
                          addToCart(
                            item.product.id
                          )
                        }
                        className="
                          flex-1
                          bg-[#08122f]
                          text-white
                          py-3
                          rounded-2xl
                          font-semibold
                          hover:opacity-90
                          transition
                        "
                      >
                        Add to Cart
                      </button>

                      <button
                        onClick={() =>
                          removeItem(item.id)
                        }
                        className="
                          px-5
                          py-3
                          rounded-2xl
                          border
                          border-red-200
                          text-red-500
                          hover:bg-red-50
                          transition
                        "
                      >
                        Remove
                      </button>

                    </div>

                  </div>
                </div>
              ))}

            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Wishlist;