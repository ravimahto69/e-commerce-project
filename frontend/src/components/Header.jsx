import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../api/axios";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  const [cartCount, setCartCount] = useState(0);
  const [wishCount, setWishCount] = useState(0);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("role");

    setCartCount(0);
    setWishCount(0);

    navigate("/login");
  };

  const loadCounts = async () => {
    const userId = Number(localStorage.getItem("userId"));

    if (!token || !userId) {
      setCartCount(0);
      setWishCount(0);
      return;
    }

    try {
      const [cartRes, wishRes] = await Promise.all([
        API.get(`/cart/${userId}`),
        API.get(`/wishlist/${userId}`),
      ]);

      setCartCount(
        Array.isArray(cartRes.data) ? cartRes.data.length : 0
      );

      setWishCount(
        Array.isArray(wishRes.data) ? wishRes.data.length : 0
      );
    } catch (err) {
      console.error("Failed to load counts", err);
      setCartCount(0);
      setWishCount(0);
    }
  };

  useEffect(() => {
    loadCounts();
  }, [token, location.pathname]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px",
        background: "black",
        color: "white",
      }}
    >
      <h2>E-Commerce</h2>

      <div
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
        }}
      >
        <Link to="/">Home</Link>

        <Link to="/products">Products</Link>

        <Link to="/cart">Cart ({cartCount})</Link>

        <Link to="/wishlist">Wishlist ({wishCount})</Link>

        {/* Show only for ADMIN */}
        {role === "ADMIN" && (
          <Link to="/admin">Admin Dashboard</Link>
        )}

        {!token ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        ) : (
          <button onClick={logout}>Logout</button>
        )}
      </div>
    </div>
  );
};

export default Header;