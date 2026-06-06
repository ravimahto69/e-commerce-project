import { Link, useNavigate } from "react-router-dom";
import {
  ShoppingBag,
  Heart,
  ShoppingCart,
  LogOut,
} from "lucide-react";

function Header() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="sticky top-4 z-50 px-6">

      <div
        className="
        max-w-7xl
        mx-auto
        bg-white/90
        backdrop-blur-xl
        border
        border-gray-200
        rounded-full
        px-8
        py-4
        shadow-sm
        "
      >
        <div className="flex items-center justify-between">

          {/* Logo */}

          <Link
            to="/"
            className="flex items-center gap-2"
          >
            <ShoppingBag
              className="text-[#08122f]"
              size={24}
            />

            <span className="text-xl font-black text-[#08122f]">
              E-Commerce
            </span>
          </Link>

          {/* Center Nav */}

          <div className="hidden md:flex items-center gap-10">

            <Link
              to="/"
              className="text-slate-600 hover:text-[#08122f]"
            >
              Home
            </Link>

            <Link
              to="/products"
              className="text-slate-600 hover:text-[#08122f]"
            >
              Products
            </Link>

            {role === "ADMIN" && (
              <Link
                to="/admin"
                className="text-slate-600 hover:text-[#08122f]"
              >
                Dashboard
              </Link>
            )}

          </div>

          {/* Actions */}

          <div className="flex items-center gap-3">

            <Link
              to="/wishlist"
              className="
              w-11
              h-11
              rounded-full
              bg-slate-100
              flex
              items-center
              justify-center
              hover:bg-slate-200
              "
            >
              <Heart size={18} />
            </Link>

            <Link
              to="/cart"
              className="
              w-11
              h-11
              rounded-full
              bg-slate-100
              flex
              items-center
              justify-center
              hover:bg-slate-200
              "
            >
              <ShoppingCart size={18} />
            </Link>

            {!token ? (
              <Link
                to="/login"
                className="
                bg-[#08122f]
                text-white
                px-5
                py-2.5
                rounded-full
                font-medium
                "
              >
                Login
              </Link>
            ) : (
              <button
                onClick={logout}
                className="
                w-11
                h-11
                rounded-full
                border
                border-red-200
                flex
                items-center
                justify-center
                text-red-500
                hover:bg-red-50
                "
              >
                <LogOut size={18} />
              </button>
            )}

          </div>

        </div>
      </div>
    </div>
  );
}

export default Header;