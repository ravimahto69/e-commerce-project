import { useEffect, useState } from "react";
import API from "../api/axios";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const categories = [
    "All",
    "Electronics",
    "Fashion",
    "Laptops",
    "Mobiles",
    "Accessories",
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    let filtered = [...products];

    if (search) {
      filtered = filtered.filter((product) =>
        product.name?.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (product) =>
          product.category?.toLowerCase() ===
          selectedCategory.toLowerCase()
      );
    }

    setFilteredProducts(filtered);
  }, [search, selectedCategory, products]);

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
    <div className="min-h-screen bg-[#f8fafc]">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-8">
        <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">
          Store
        </span>

        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mt-2">
          Products
        </h1>

        <p className="text-slate-500 text-lg mt-4 max-w-2xl">
          Discover premium products designed to elevate your
          everyday experience.
        </p>
      </div>

      {/* Search */}
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-3">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="w-full bg-transparent outline-none px-3 py-2 text-slate-700"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <div className="flex gap-3 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() =>
                setSelectedCategory(category)
              }
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-slate-900 text-white shadow-lg"
                  : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Banner */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="relative overflow-hidden rounded-[32px] bg-slate-900">
          <div className="absolute top-0 right-0 w-72 h-72 bg-slate-700 rounded-full blur-3xl opacity-20"></div>

          <div className="relative p-10 md:p-14">
            <span className="text-slate-400 text-sm uppercase tracking-wider">
              Featured Collection
            </span>

            <h2 className="text-white text-3xl md:text-5xl font-bold mt-3">
              New Season Arrivals
            </h2>

            <p className="text-slate-300 mt-4 max-w-xl">
              Explore our newest collection of premium
              products crafted for quality, style, and
              performance.
            </p>

            <button className="mt-8 bg-white text-slate-900 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
              Explore Collection
            </button>
          </div>
        </div>
      </div>

      {/* Results Header */}
      <div className="max-w-7xl mx-auto px-6 mb-8 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            All Products
          </h2>

          <p className="text-slate-500 mt-1">
            {filteredProducts.length} products available
          </p>
        </div>
      </div>

      {/* Products */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        {loading ? (
          <div className="flex justify-center items-center py-24">
            <div className="w-12 h-12 border-4 border-slate-900 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="bg-white border border-slate-200 rounded-3xl p-16 text-center">
            <h3 className="text-3xl font-bold text-slate-900">
              No Products Found
            </h3>

            <p className="text-slate-500 mt-3">
              Try searching with different keywords.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="transition duration-300 hover:-translate-y-2"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;