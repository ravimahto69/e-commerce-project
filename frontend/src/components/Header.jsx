import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../api/axios";

const Header = () => {

    const navigate = useNavigate();

    const token = localStorage.getItem("token");
    const [cartCount, setCartCount] = useState(0);
    const [wishCount, setWishCount] = useState(0);

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        navigate("/login");
    }

    useEffect(() => {
        const loadCounts = async () => {
            const userId = Number(localStorage.getItem('userId'));
            if (!token || !userId) return;
            try {
                const [cartRes, wishRes] = await Promise.all([
                    API.get(`/cart/${userId}`),
                    API.get(`/wishlist/${userId}`)
                ]);
                setCartCount(Array.isArray(cartRes.data) ? cartRes.data.length : 0);
                setWishCount(Array.isArray(wishRes.data) ? wishRes.data.length : 0);
            } catch (err) {
                console.warn('Failed to load counts', err);
            }
        }
        loadCounts();
    }, [token]);

    return (
        <div style={{
            display:"flex",
            justifyContent:"space-between",
            padding:"20px",
            background:"black",
            color:"white"
        }}>

            <h2>E-Commerce</h2>

            <div style={{
                display:"flex",
                gap:"20px",
                alignItems: 'center'
            }}>

                <Link to="/">Home</Link>

                <Link to="/products">Products</Link>

                <Link to="/cart">Cart ({cartCount})</Link>

                <Link to="/wishlist">Wishlist ({wishCount})</Link>

                {!token ? (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </>
                ) : (
                    <button onClick={logout}>
                        Logout
                    </button>
                )}

            </div>

        </div>
    )
}

export default Header;