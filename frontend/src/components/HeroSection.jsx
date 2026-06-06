import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section className="bg-[#f6f8fb]">

      <div className="max-w-7xl mx-auto px-6 py-32">

        <div className="max-w-4xl">

          <p className="uppercase tracking-[0.3em] text-sm text-slate-500">
            Modern Commerce
          </p>

          <h1 className="text-6xl md:text-8xl font-black text-[#08122f] leading-none mt-6">
            Shop
            <br />
            Without
            <br />
            Limits.
          </h1>

          <p className="text-xl text-slate-500 max-w-2xl mt-10 leading-relaxed">
            Discover carefully curated products,
            premium quality, and an effortless
            shopping experience designed for modern living.
          </p>

          <div className="flex flex-wrap gap-4 mt-12">

            <Link to="/products">
              <button
                className="
                bg-[#08122f]
                text-white
                px-8
                py-4
                rounded-2xl
                font-semibold
                hover:opacity-90
                transition
                "
              >
                Explore Products
              </button>
            </Link>

            <Link to="/register">
              <button
                className="
                border
                border-gray-300
                px-8
                py-4
                rounded-2xl
                font-semibold
                hover:bg-white
                transition
                "
              >
                Create Account
              </button>
            </Link>

          </div>

        </div>

        {/* Bottom Stats */}

        <div className="grid grid-cols-3 gap-8 mt-32 border-t border-gray-200 pt-12">

          <div>
            <h2 className="text-4xl font-black text-[#08122f]">
              10K+
            </h2>

            <p className="text-slate-500 mt-2">
              Happy Customers
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-black text-[#08122f]">
              500+
            </h2>

            <p className="text-slate-500 mt-2">
              Premium Products
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-black text-[#08122f]">
              24/7
            </h2>

            <p className="text-slate-500 mt-2">
              Customer Support
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default HeroSection;