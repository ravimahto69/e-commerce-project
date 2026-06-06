import { useState } from "react";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();

    const [data, setData] = useState({
        email:"",
        password:""
    });

    const handleChange = (e) => {

        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response = await API.post("/auth/login", data);
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("userId", response.data.userId);
            localStorage.setItem("role", response.data.role);

            // fetch current user info (id, name, email) and store userId
            try {
                const me = await API.get('/auth/me');
                if (me && me.data && me.data.id) {
                    localStorage.setItem('userId', String(me.data.id));
                }
            } catch (err) {
                console.warn('Could not fetch current user', err);
            }

            alert("Login Successful");

            navigate("/products");

        } catch (error) {

            alert("Invalid Credentials");
        }
    }

  return (
  <div
    style={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background:
        "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #2563eb 100%)",
      padding: "20px",
    }}
  >
    <div
      style={{
        width: "100%",
        maxWidth: "1000px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        background: "rgba(255,255,255,0.08)",
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: "24px",
        overflow: "hidden",
        boxShadow: "0 25px 50px rgba(0,0,0,0.3)",
      }}
    >
      {/* Left Section */}
      <div
        style={{
          padding: "60px",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, rgba(37,99,235,0.3), rgba(124,58,237,0.3))",
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            marginBottom: "20px",
            fontWeight: "700",
          }}
        >
          Welcome Back 
        </h1>

        <p
          style={{
            fontSize: "1.1rem",
            lineHeight: "1.8",
            opacity: 0.9,
          }}
        >
          Access your account and continue your shopping journey.
          Discover amazing products, exclusive deals, and a
          seamless shopping experience.
        </p>

        <div
          style={{
            marginTop: "40px",
            display: "flex",
            gap: "30px",
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
            <h2>99%</h2>
            <span>Reviews</span>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div
        style={{
          background: "#ffffff",
          padding: "50px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div style={{ width: "100%" }}>
          <h2
            style={{
              textAlign: "center",
              marginBottom: "10px",
              color: "#111827",
            }}
          >
            Sign In
          </h2>

          <p
            style={{
              textAlign: "center",
              color: "#6b7280",
              marginBottom: "35px",
            }}
          >
            Login to your account
          </p>

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "20px" }}>
              <input
                type="email"
                name="email"
                placeholder="📧 Email Address"
                value={data.email}
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
                value={data.password}
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
                color: "white",
                fontSize: "16px",
                fontWeight: "600",
                cursor: "pointer",
                boxShadow:
                  "0 10px 20px rgba(37,99,235,0.3)",
              }}
            >
              Login
            </button>
          </form>

          <div
            style={{
              marginTop: "25px",
              textAlign: "center",
              color: "#6b7280",
            }}
          >
            Don't have an account?{" "}
            <span
              onClick={() => navigate("/register")}
              style={{
                color: "#2563eb",
                cursor: "pointer",
                fontWeight: "600",
              }}
            >
              Create Account
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
);  
}

export default Login;