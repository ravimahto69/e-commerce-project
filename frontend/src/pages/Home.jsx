import { useEffect, useState } from "react";
import API from "../api/axios";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await API.get("/products");
      setProducts(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <div
        style={{
          background: "linear-gradient(135deg,#0f172a,#1e293b)",
          color: "white",
          padding: "80px 20px",
          textAlign: "center",
        }}
      >
        <h1>Welcome to E-Commerce Store</h1>

        <p>
          Discover amazing products at unbeatable prices.
        </p>

        
      </div>

      {/* Products Section */}
      <div style={{ padding: "30px" }}>
        <h2 style={{ textAlign: "center" }}>
          Featured Products
        </h2>

        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
            justifyContent: "center",
            marginTop: "30px",
          }}
        >
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div
        style={{
          background: "#111827",
          color: "white",
          padding: "50px",
          marginTop: "40px",
        }}
      >
        

        
      </div>
    </div>
  );
};

export default Home;