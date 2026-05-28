import { Link, useNavigate } from "react-router-dom";

const Header = () => {

    const navigate = useNavigate();

    const token = localStorage.getItem("token");

    const logout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    }

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
                gap:"20px"
            }}>

                <Link to="/">Home</Link>

                <Link to="/products">Products</Link>

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