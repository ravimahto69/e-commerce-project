import { useState } from "react";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await API.post("/auth/login", data);

      
localStorage.setItem("token", response.data.token);
localStorage.setItem("userId", response.data.user.id);
localStorage.setItem("email", response.data.user.email);

      alert("Login Successful");
      navigate("/products");
    } catch (error) {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4 py-8 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-600/30 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-600/30 rounded-full blur-[120px]" />

      <div className="relative z-10 w-full max-w-md lg:max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">

        <div className="grid lg:grid-cols-2">

          {/* Desktop Left Side */}
          <div className="hidden lg:flex flex-col justify-center p-16 bg-gradient-to-br from-blue-600/20 to-purple-600/20 text-white">

            <span className="text-blue-400 font-semibold tracking-widest uppercase">
              Premium Shopping Experience
            </span>

            <h1 className="text-6xl font-bold mt-6 leading-tight">
              Welcome
              <br />
              Back
            </h1>

            <p className="mt-6 text-slate-300 text-lg leading-relaxed">
              Sign in to access your orders, wishlist, exclusive offers,
              and continue your shopping journey.
            </p>

            <div className="flex gap-12 mt-12">
              <div>
                <h2 className="text-3xl font-bold">500+</h2>
                <p className="text-slate-400">Products</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold">10K+</h2>
                <p className="text-slate-400">Customers</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold">99%</h2>
                <p className="text-slate-400">Reviews</p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="bg-white p-6 sm:p-8 md:p-10 lg:p-16">

            {/* Mobile Hero */}
            <div className="lg:hidden text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900">
                Welcome Back
              </h1>
              <p className="text-gray-500 mt-2">
                Sign in to continue shopping
              </p>
            </div>

            <div className="max-w-md mx-auto">

              <h2 className="hidden lg:block text-4xl font-bold text-gray-900">
                Sign In
              </h2>

              <p className="hidden lg:block text-gray-500 mt-2 mb-10">
                Enter your credentials to access your account.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full px-4 py-3.5 sm:py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>

                  <input
                    type="password"
                    name="password"
                    value={data.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    required
                    className="w-full px-4 py-3.5 sm:py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    type="button"
                    className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Forgot Password?
                  </button>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-lg shadow-blue-500/30 hover:scale-[1.02] transition-all duration-300"
                >
                  Sign In
                </button>
              </form>

              <div className="mt-8 text-center">
                <p className="text-gray-500">
                  Don't have an account?
                  <button
                    onClick={() => navigate("/register")}
                    className="ml-2 text-blue-600 font-semibold hover:text-blue-700"
                  >
                    Create Account
                  </button>
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Login;