import { useState } from "react";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";

const Register = () => {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        name:"",
        email:"",
        password:""
    });

    const handleChange = (e) => {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await API.post("/auth/register", user);

            alert("Registration Successful");

            navigate("/login");

        } catch (error) {

            alert("Registration Failed");
        }
    }

    return (
  <div
    style={{
      minHeight: "100vh",
      background:
        "linear-gradient(135deg,#0f172a,#1e293b,#2563eb)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "20px",
    }}
  >
    <div
      style={{
        width: "100%",
        maxWidth: "1100px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        borderRadius: "24px",
        overflow: "hidden",
        boxShadow: "0 20px 50px rgba(0,0,0,0.3)",
        background: "rgba(255,255,255,0.08)",
        backdropFilter: "blur(20px)",
      }}
    >
      {/* Left Section */}
      <div
        style={{
          padding: "60px",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background:
            "linear-gradient(135deg,rgba(37,99,235,.3),rgba(124,58,237,.3))",
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            marginBottom: "20px",
            fontWeight: "700",
          }}
        >
          Join Our Store 🚀
        </h1>

        <p
          style={{
            fontSize: "1.1rem",
            lineHeight: "1.8",
            opacity: 0.9,
          }}
        >
          Create your account and start exploring premium
          products, exclusive discounts, and a seamless shopping
          experience.
        </p>

        <div
          style={{
            display: "flex",
            gap: "30px",
            marginTop: "40px",
            flexWrap: "wrap",
          }}
        >
          <div>
            <h2>500+</h2>
            <span>Products</span>
          </div>

          <div>
            <h2>10K+</h2>
            <span>Customers</span>
          </div>

          <div>
            <h2>24/7</h2>
            <span>Support</span>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div
        style={{
          background: "#fff",
          padding: "50px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div style={{ width: "100%" }}>
          <h2
            style={{
              textAlign: "center",
              color: "#111827",
              marginBottom: "10px",
            }}
          >
            Create Account
          </h2>

          <p
            style={{
              textAlign: "center",
              color: "#6b7280",
              marginBottom: "35px",
            }}
          >
            Register to start shopping
          </p>

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "18px" }}>
              <input
                type="text"
                name="name"
                placeholder="👤 Full Name"
                value={user.name}
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  padding: "15px",
                  borderRadius: "12px",
                  border: "1px solid #e5e7eb",
                  background: "#f9fafb",
                  fontSize: "15px",
                  outline: "none",
                  boxSizing: "border-box",
                }}
              />
            </div>

            <div style={{ marginBottom: "18px" }}>
              <input
                type="email"
                name="email"
                placeholder="📧 Email Address"
                value={user.email}
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  padding: "15px",
                  borderRadius: "12px",
                  border: "1px solid #e5e7eb",
                  background: "#f9fafb",
                  fontSize: "15px",
                  outline: "none",
                  boxSizing: "border-box",
                }}
              />
            </div>

            <div style={{ marginBottom: "25px" }}>
              <input
                type="password"
                name="password"
                placeholder="🔒 Password"
                value={user.password}
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  padding: "15px",
                  borderRadius: "12px",
                  border: "1px solid #e5e7eb",
                  background: "#f9fafb",
                  fontSize: "15px",
                  outline: "none",
                  boxSizing: "border-box",
                }}
              />
            </div>

            <button
              type="submit"
              style={{
                width: "100%",
                padding: "15px",
                border: "none",
                borderRadius: "12px",
                background:
                  "linear-gradient(135deg,#2563eb,#7c3aed)",
                color: "#fff",
                fontSize: "16px",
                fontWeight: "600",
                cursor: "pointer",
                boxShadow:
                  "0 10px 20px rgba(37,99,235,.3)",
              }}
            >
              Create Account
            </button>
          </form>

          <div
            style={{
              textAlign: "center",
              marginTop: "25px",
              color: "#6b7280",
            }}
          >
            Already have an account?
            <span
              onClick={() => navigate("/login")}
              style={{
                color: "#2563eb",
                cursor: "pointer",
                fontWeight: "600",
                marginLeft: "5px",
              }}
            >
              Login
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}

export default Register;