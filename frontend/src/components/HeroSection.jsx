import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div
      style={{
        background:
          "linear-gradient(135deg,#0f172a,#1e293b)",
        color: "white",
        textAlign: "center",
        padding: "100px 20px"
      }}
    >
      <h1 style={{ fontSize: "3rem" }}>
        Welcome To E-Commerce Store
      </h1>

      <p style={{ fontSize: "1.2rem" }}>
        Discover amazing products at unbeatable prices.
      </p>

      <Link to="/products">
        <button
          style={{
            marginTop: "20px",
            padding: "12px 30px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer"
          }}
        >
          Shop Now
        </button>
      </Link>
    </div>
  );
}

export default HeroSection;