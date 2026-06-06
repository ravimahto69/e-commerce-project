import { useEffect, useState } from "react";
import API from "../api/axios";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    const filtered = products.filter((product) =>
      product.name?.toLowerCase().includes(search.toLowerCase())
    );

    setFilteredProducts(filtered);
  }, [search, products]);

  const fetchProducts = async () => {
    try {
      const response = await API.get("/products");

      const data = Array.isArray(response.data)
        ? response.data
        : [];

      setProducts(data);
      setFilteredProducts(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

 return (
  <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
    {/* Hero Section */}
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black/[0.02] via-transparent to-black/[0.02]" />

      <div className="max-w-7xl mx-auto px-6 py-24 relative">
        <div className="max-w-3xl">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-black text-white text-sm font-medium mb-6">
            Premium Collection
          </span>

          <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-gray-900 leading-none">
            Discover
            <br />
            Exceptional Products
          </h1>

          <p className="mt-8 text-lg text-gray-600 leading-relaxed max-w-2xl">
            Shop carefully selected products crafted with quality,
            performance, and timeless design in mind.
          </p>
        </div>
      </div>
    </section>

    {/* Search Section */}
    <section className="max-w-7xl mx-auto px-6 -mt-8 relative z-10">
      <div className="bg-white/90 backdrop-blur-xl border border-gray-200 rounded-3xl p-3 shadow-xl shadow-black/5">
        <input
          type="text"
          placeholder="Search for products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-5 py-4 bg-transparent outline-none text-gray-700 placeholder:text-gray-400 text-lg"
        />
      </div>
    </section>

    {/* Collection Header */}
    <section className="max-w-7xl mx-auto px-6 py-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            All Products
          </h2>

          <p className="text-gray-500 mt-2">
            Browse our latest collection
          </p>
        </div>

        <div className="px-5 py-2 rounded-full bg-black text-white text-sm font-medium">
          {filteredProducts.length} Products
        </div>
      </div>
    </section>

    {/* Featured Banner */}
    <section className="max-w-7xl mx-auto px-6 mb-12">
      <div className="rounded-[32px] overflow-hidden bg-black text-white p-10 md:p-14">
        <div className="max-w-2xl">
          <h3 className="text-3xl md:text-4xl font-bold">
            New Season Collection
          </h3>

          <p className="mt-4 text-gray-300">
            Explore the latest arrivals designed to elevate your
            everyday lifestyle.
          </p>
        </div>
      </div>
    </section>

    {/* Products Grid */}
    <section className="max-w-7xl mx-auto px-6 pb-24">
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl border border-gray-200 overflow-hidden animate-pulse"
            >
              <div className="h-72 bg-gray-200" />
              <div className="p-5 space-y-3">
                <div className="h-4 bg-gray-200 rounded" />
                <div className="h-4 w-2/3 bg-gray-200 rounded" />
                <div className="h-8 w-1/3 bg-gray-200 rounded" />
              </div>
            </div>
          ))}
        </div>
      ) : filteredProducts.length === 0 ? (
        <div className="bg-white border border-gray-200 rounded-[32px] py-28 text-center shadow-sm">
          <h3 className="text-3xl font-bold text-gray-900">
            No Products Found
          </h3>

          <p className="mt-4 text-gray-500">
            Try searching with different keywords.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="
                group
                transition-all
                duration-500
                hover:-translate-y-3
                hover:scale-[1.02]
              "
            >
              <div
                className="
                  bg-white
                  rounded-[28px]
                  overflow-hidden
                  border
                  border-gray-200
                  shadow-sm
                  group-hover:shadow-2xl
                  group-hover:shadow-black/10
                  transition-all
                  duration-500
                "
              >
                <ProductCard product={product} />
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  </div>
);
};

export default Products;