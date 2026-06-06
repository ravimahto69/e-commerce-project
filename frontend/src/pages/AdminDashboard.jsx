import { useEffect, useState } from "react";
import API from "../api/axios";
import {
  Package,
  Boxes,
  Layers3,
  Pencil,
  Trash2,
  Plus,
} from "lucide-react";

function AdminDashboard() {
  const [products, setProducts] = useState([]);

  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    imageUrl: "",
    stock: "",
  });

  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await API.get("/products");
      setProducts(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setNewProduct({
      ...newProduct,
      [e.target.name]: e.target.value,
    });
  };

  const addProduct = async (e) => {
    e.preventDefault();

    try {
      await API.post("/api/admin/products", {
        ...newProduct,
        price: Number(newProduct.price),
        stock: Number(newProduct.stock),
      });

      alert("Product Added Successfully");

      resetForm();
      fetchProducts();
    } catch (error) {
      console.error(error);
      alert("Failed to Add Product");
    }
  };

  const editProduct = (product) => {
    setEditingId(product.id);

    setNewProduct({
      name: product.name || "",
      description: product.description || "",
      price: product.price || "",
      category: product.category || "",
      imageUrl: product.imageUrl || "",
      stock: product.stock || "",
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const updateProduct = async () => {
    try {
      await API.put(`/api/admin/products/${editingId}`, {
        ...newProduct,
        price: Number(newProduct.price),
        stock: Number(newProduct.stock),
      });

      alert("Product Updated Successfully");

      setEditingId(null);
      resetForm();
      fetchProducts();
    } catch (error) {
      console.error(error);
      alert("Failed To Update Product");
    }
  };

  const deleteProduct = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmDelete) return;

    try {
      await API.delete(`/api/admin/products/${id}`);

      alert("Product Deleted Successfully");
      fetchProducts();
    } catch (error) {
      console.error(error);
      alert("Failed To Delete Product");
    }
  };

  const resetForm = () => {
    setNewProduct({
      name: "",
      description: "",
      price: "",
      category: "",
      imageUrl: "",
      stock: "",
    });
  };

  const cancelEdit = () => {
    setEditingId(null);
    resetForm();
  };

  return (
    <div className="min-h-screen bg-[#f6f8fb]">

      {/* Hero Section */}
      <section className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <p className="uppercase tracking-widest text-sm text-slate-500 font-medium">
            Admin Panel
          </p>

          <h1 className="text-6xl font-black text-[#08122f] mt-3">
            Dashboard
          </h1>

          <p className="text-xl text-slate-500 mt-4">
            Manage products, inventory and categories.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">

          <div className="bg-white rounded-[32px] border border-gray-200 p-8 flex justify-between items-center">
            <div>
              <p className="text-slate-500">
                Total Products
              </p>

              <h2 className="text-4xl font-black text-[#08122f] mt-2">
                {products.length}
              </h2>
            </div>

            <Package
              size={40}
              className="text-[#08122f]"
            />
          </div>

          <div className="bg-white rounded-[32px] border border-gray-200 p-8 flex justify-between items-center">
            <div>
              <p className="text-slate-500">
                In Stock
              </p>

              <h2 className="text-4xl font-black text-[#08122f] mt-2">
                {
                  products.filter(
                    (item) => item.stock > 0
                  ).length
                }
              </h2>
            </div>

            <Boxes
              size={40}
              className="text-[#08122f]"
            />
          </div>

          <div className="bg-white rounded-[32px] border border-gray-200 p-8 flex justify-between items-center">
            <div>
              <p className="text-slate-500">
                Categories
              </p>

              <h2 className="text-4xl font-black text-[#08122f] mt-2">
                {
                  new Set(
                    products.map(
                      (item) => item.category
                    )
                  ).size
                }
              </h2>
            </div>

            <Layers3
              size={40}
              className="text-[#08122f]"
            />
          </div>

        </div>

        {/* Form */}
        <div className="bg-white rounded-[32px] border border-gray-200 p-10 mb-12">

          <h2 className="text-3xl font-black text-[#08122f] mb-8">
            {editingId
              ? "Update Product"
              : "Add New Product"}
          </h2>

          <form
            onSubmit={addProduct}
            className="grid md:grid-cols-2 gap-5"
          >

            <input
              type="text"
              name="name"
              placeholder="Product Name"
              value={newProduct.name}
              onChange={handleChange}
              required
              className="border border-gray-200 p-4 rounded-2xl focus:outline-none focus:border-[#08122f]"
            />

            <input
              type="number"
              name="price"
              placeholder="Price"
              value={newProduct.price}
              onChange={handleChange}
              required
              className="border border-gray-200 p-4 rounded-2xl focus:outline-none focus:border-[#08122f]"
            />

            <input
              type="text"
              name="category"
              placeholder="Category"
              value={newProduct.category}
              onChange={handleChange}
              className="border border-gray-200 p-4 rounded-2xl focus:outline-none focus:border-[#08122f]"
            />

            <input
              type="number"
              name="stock"
              placeholder="Stock"
              value={newProduct.stock}
              onChange={handleChange}
              className="border border-gray-200 p-4 rounded-2xl focus:outline-none focus:border-[#08122f]"
            />

            <textarea
              name="description"
              placeholder="Description"
              value={newProduct.description}
              onChange={handleChange}
              className="border border-gray-200 p-4 rounded-2xl md:col-span-2 h-32 focus:outline-none focus:border-[#08122f]"
            />

            <input
              type="text"
              name="imageUrl"
              placeholder="Image URL"
              value={newProduct.imageUrl}
              onChange={handleChange}
              className="border border-gray-200 p-4 rounded-2xl md:col-span-2 focus:outline-none focus:border-[#08122f]"
            />

            {newProduct.imageUrl && (
              <div className="md:col-span-2">
                <img
                  src={newProduct.imageUrl}
                  alt="Preview"
                  className="w-44 h-44 object-cover rounded-[24px] border border-gray-200"
                />
              </div>
            )}

            <div className="md:col-span-2 flex gap-4">

              {editingId ? (
                <>
                  <button
                    type="button"
                    onClick={updateProduct}
                    className="bg-[#08122f] text-white px-6 py-4 rounded-2xl font-semibold"
                  >
                    Update Product
                  </button>

                  <button
                    type="button"
                    onClick={cancelEdit}
                    className="border border-gray-300 px-6 py-4 rounded-2xl font-semibold"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <button
                  type="submit"
                  className="bg-[#08122f] text-white px-6 py-4 rounded-2xl font-semibold flex items-center gap-2"
                >
                  <Plus size={18} />
                  Add Product
                </button>
              )}

            </div>

          </form>
        </div>

        {/* Products */}
        <h2 className="text-4xl font-black text-[#08122f] mb-8">
          Existing Products
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-[32px] border border-gray-200 overflow-hidden hover:border-gray-300 transition"
            >

              <img
                src={
                  product.imageUrl ||
                  "https://via.placeholder.com/400"
                }
                alt={product.name}
                className="h-64 w-full object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold text-[#08122f] mb-2">
                  {product.name}
                </h3>

                <p className="text-slate-500 text-sm line-clamp-2 mb-4">
                  {product.description}
                </p>

                <div className="flex justify-between items-center mb-4">

                  <span className="text-3xl font-black text-[#08122f]">
                    ₹{product.price}
                  </span>

                  <span className="bg-slate-100 px-3 py-1 rounded-full text-xs font-semibold">
                    Stock: {product.stock}
                  </span>

                </div>

                <p className="text-slate-500 mb-5">
                  {product.category}
                </p>

                <div className="flex gap-3">

                  <button
                    onClick={() =>
                      editProduct(product)
                    }
                    className="flex-1 bg-[#08122f] text-white py-3 rounded-2xl flex items-center justify-center gap-2"
                  >
                    <Pencil size={16} />
                    Edit
                  </button>

                  <button
                    onClick={() =>
                      deleteProduct(product.id)
                    }
                    className="flex-1 border border-red-200 text-red-500 py-3 rounded-2xl flex items-center justify-center gap-2 hover:bg-red-50"
                  >
                    <Trash2 size={16} />
                    Delete
                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
}

export default AdminDashboard;