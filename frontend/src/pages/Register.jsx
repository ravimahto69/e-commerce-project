import { useState } from "react";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/auth/register", user);

      alert("Registration Successful");
      navigate("/login");
    } catch (error) {
      alert("Registration Failed");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4 py-8 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-600/30 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-violet-600/30 rounded-full blur-[120px]" />

      <div className="relative z-10 w-full max-w-md lg:max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">

        <div className="grid lg:grid-cols-2">

          {/* Desktop Left Side */}
          <div className="hidden lg:flex flex-col justify-center p-16 text-white bg-gradient-to-br from-blue-600/20 to-violet-600/20">

            <span className="uppercase tracking-[4px] text-blue-400 text-sm font-semibold">
              Join The Community
            </span>

            <h1 className="text-6xl font-bold mt-6 leading-tight">
              Create
              <br />
              Account
            </h1>

            <p className="mt-6 text-slate-300 text-lg leading-relaxed">
              Start your shopping journey with premium products,
              secure checkout, fast delivery, and exclusive offers
              available only to registered members.
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
                <h2 className="text-3xl font-bold">24/7</h2>
                <p className="text-slate-400">Support</p>
              </div>

            </div>
          </div>

          {/* Right Side */}
          <div className="bg-white p-6 sm:p-8 md:p-10 lg:p-16">

            {/* Mobile Hero */}
            <div className="lg:hidden text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900">
                Create Account
              </h1>

              <p className="text-gray-500 mt-2">
                Join thousands of happy customers
              </p>
            </div>

            <div className="max-w-md mx-auto">

              <h2 className="hidden lg:block text-4xl font-bold text-gray-900">
                Create Account
              </h2>

              <p className="hidden lg:block text-gray-500 mt-2 mb-10">
                Join thousands of happy customers.
              </p>

              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={user.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full px-4 py-3.5 sm:py-4 border border-gray-200 rounded-xl outline-none transition-all focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full px-4 py-3.5 sm:py-4 border border-gray-200 rounded-xl outline-none transition-all focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>

                  <input
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                    placeholder="Create a secure password"
                    required
                    className="w-full px-4 py-3.5 sm:py-4 border border-gray-200 rounded-xl outline-none transition-all focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />

                  <p className="text-xs text-gray-400 mt-2">
                    Use at least 8 characters with numbers and symbols.
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold shadow-lg shadow-blue-500/30 hover:scale-[1.02] transition-all duration-300"
                >
                  Create Account
                </button>

              </form>

              <div className="mt-8 text-center">
                <p className="text-gray-500">
                  Already have an account?

                  <button
                    onClick={() => navigate("/login")}
                    className="ml-2 font-semibold text-blue-600 hover:text-blue-700"
                  >
                    Sign In
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

export default Register;