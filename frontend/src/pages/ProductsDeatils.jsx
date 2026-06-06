import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../api/axios";
import AddToControls from "../components/AddToControls";

function ProductDetail() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [quantity] = useState(1);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const response = await API.get(
        `/products/${id}`
      );

      setProduct(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  if (!product) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-[#f6f8fb]">
        <div className="text-center">
          <div className="w-14 h-14 border-4 border-[#08122f] border-t-transparent rounded-full animate-spin mx-auto"></div>

          <p className="mt-4 text-lg text-slate-500">
            Loading Product...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f6f8fb]">

      {/* Hero */}

      <section className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-16">

          <p className="uppercase tracking-[0.3em] text-sm text-slate-500">
            Product Details
          </p>

          <h1 className="text-6xl font-black text-[#08122f] mt-4">
            {product.name}
          </h1>

        </div>
      </section>

      {/* Product */}

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Image */}

          <div>

            <div className="bg-white border border-gray-200 rounded-[40px] p-8">

              <img
                src={
                  product.imageUrl ||
                  "https://via.placeholder.com/600"
                }
                alt={product.name}
                className="
                  w-full
                  h-[550px]
                  object-cover
                  rounded-[32px]
                "
              />

            </div>

          </div>

          {/* Details */}

          <div>

            <span className="text-sm uppercase tracking-[0.2em] text-slate-500">
              {product.category || "Featured"}
            </span>

            <h2 className="text-5xl font-black text-[#08122f] mt-4">
              {product.name}
            </h2>

            <p className="text-slate-500 text-lg leading-relaxed mt-8">
              {product.description}
            </p>

            <div className="mt-10">

              <span className="text-5xl font-black text-[#08122f]">
                ₹{product.price}
              </span>

            </div>

            <div className="mt-6">

              <span className="inline-flex items-center px-4 py-2 rounded-full bg-slate-100 text-[#08122f] font-semibold">
                In Stock
              </span>

            </div>

            <div className="mt-10">

              <AddToControls
                productId={product.id}
                initialQuantity={quantity}
              />

            </div>

          </div>

        </div>

      </div>

      {/* Information Section */}

      <section className="pb-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="bg-white border border-gray-200 rounded-[40px] p-12">

            <p className="uppercase tracking-[0.3em] text-sm text-slate-500">
              Information
            </p>

            <h2 className="text-4xl font-black text-[#08122f] mt-4">
              Product Overview
            </h2>

            <p className="text-slate-500 leading-relaxed text-lg mt-8 max-w-4xl">
              {product.description}
            </p>

          </div>

        </div>

      </section>

    </div>
  );
}

export default ProductDetail;