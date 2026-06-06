import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section
      style={{
        minHeight: "85vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)",
        color: "white",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "4rem",
            fontWeight: "bold",
            marginBottom: "20px",
            lineHeight: "1.2",
          }}
        >
          Shop Smarter,
          <br />
          Live Better
        </h1>

        <p
          style={{
            fontSize: "1.3rem",
            color: "#cbd5e1",
            marginBottom: "35px",
            lineHeight: "1.7",
          }}
        >
          Discover premium products, exclusive deals,
          and a seamless shopping experience.
          Everything you need, delivered to your doorstep.
        </p>

        <div
          style={{
            display: "flex",
            gap: "15px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Link to="/products">
            <button
              style={{
                background: "#2563eb",
                color: "white",
                padding: "14px 32px",
                border: "none",
                borderRadius: "10px",
                fontSize: "16px",
                cursor: "pointer",
                fontWeight: "600",
              }}
            >
              🛒 Shop Now
            </button>
          </Link>

          <Link to="/register">
            <button
              style={{
                background: "transparent",
                color: "white",
                padding: "14px 32px",
                border: "2px solid white",
                borderRadius: "10px",
                fontSize: "16px",
                cursor: "pointer",
                fontWeight: "600",
              }}
            >
              Create Account
            </button>
          </Link>
        </div>

        <div
          style={{
            marginTop: "60px",
            display: "flex",
            justifyContent: "center",
            gap: "50px",
            flexWrap: "wrap",
          }}
        >
          <div>
            <h2>10K+</h2>
            <p>Happy Customers</p>
          </div>

          <div>
            <h2>500+</h2>
            <p>Products</p>
          </div>

          <div>
            <h2>24/7</h2>
            <p>Customer Support</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;