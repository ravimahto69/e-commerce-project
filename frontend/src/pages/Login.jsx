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
        <div>

            <h1>Login</h1>

            <form onSubmit={handleSubmit}>

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                />

                <br /><br />

                <button type="submit">
                    Login
                </button>

            </form>

        </div>
    )
}

export default Login;