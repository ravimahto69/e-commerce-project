import { useEffect, useState } from "react";
import API from "../api/axios";

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
      console.error("Error fetching products:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setNewProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const addProduct = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        name: newProduct.name,
        description: newProduct.description,
        price: Number(newProduct.price),
        category: newProduct.category,
        imageUrl: newProduct.imageUrl,
        stock: Number(newProduct.stock),
      };

      await API.post("/api/admin/products", payload);

      alert("Product Added Successfully");

      resetForm();

      fetchProducts();
    } catch (err) {
      console.error("Add product failed", err);
      alert("Failed to add product");
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
  };

  const updateProduct = async () => {
    try {
      const payload = {
        name: newProduct.name,
        description: newProduct.description,
        price: Number(newProduct.price),
        category: newProduct.category,
        imageUrl: newProduct.imageUrl,
        stock: Number(newProduct.stock),
      };

      await API.put(
        `/api/admin/products/${editingId}`,
        payload
      );

      alert("Product Updated Successfully");

      setEditingId(null);

      resetForm();

      fetchProducts();
    } catch (err) {
      console.error("Update failed", err);
      alert("Failed to update product");
    }
  };

  const deleteProduct = async (id) => {
    try {
      await API.delete(`/api/admin/products/${id}`);

      alert("Product Deleted Successfully");

      fetchProducts();
    } catch (err) {
      console.error("Delete failed", err);
      alert("Failed to delete product");
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
    <div style={{ padding: "20px" }}>
      <h1>Admin Dashboard</h1>

      <section style={{ marginBottom: "30px" }}>
        <h2>
          {editingId
            ? "Update Product"
            : "Add Product"}
        </h2>

        <form onSubmit={addProduct}>
          <div>
            <label>Name: </label>
            <input
              type="text"
              name="name"
              value={newProduct.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>Description: </label>
            <input
              type="text"
              name="description"
              value={newProduct.description}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Price: </label>
            <input
              type="number"
              name="price"
              value={newProduct.price}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>Category: </label>
            <input
              type="text"
              name="category"
              value={newProduct.category}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Image URL: </label>
            <input
              type="text"
              name="imageUrl"
              value={newProduct.imageUrl}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Stock: </label>
            <input
              type="number"
              name="stock"
              value={newProduct.stock}
              onChange={handleChange}
            />
          </div>

          <br />

          {editingId ? (
            <>
              <button
                type="button"
                onClick={updateProduct}
              >
                Update Product
              </button>

              <button
                type="button"
                onClick={cancelEdit}
                style={{ marginLeft: "10px" }}
              >
                Cancel
              </button>
            </>
          ) : (
            <button type="submit">
              Add Product
            </button>
          )}
        </form>
      </section>

      <section>
        <h2>Existing Products</h2>

        {products.length === 0 ? (
          <p>No Products Found</p>
        ) : (
          products.map((product) => (
            <div
              key={product.id}
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                marginBottom: "10px",
              }}
            >
              <h3>{product.name}</h3>

              <p>{product.description}</p>

              <p>
                <strong>Price:</strong>{" "}
                ₹{product.price}
              </p>

              <p>
                <strong>Category:</strong>{" "}
                {product.category}
              </p>

              <p>
                <strong>Stock:</strong>{" "}
                {product.stock}
              </p>

              <button
                onClick={() =>
                  editProduct(product)
                }
              >
                Edit
              </button>

              <button
                onClick={() =>
                  deleteProduct(product.id)
                }
                style={{ marginLeft: "10px" }}
              >
                Delete
              </button>
            </div>
          ))
        )}
      </section>
    </div>
  );
}

export default AdminDashboard;