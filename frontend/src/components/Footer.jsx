function Footer() {
  return (
    <footer className="bg-[#08122f] text-white">

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="text-center">

          <p className="uppercase tracking-[0.3em] text-slate-400 text-sm">
            E-Commerce
          </p>

          <h2 className="text-4xl md:text-6xl font-black mt-6">
            Shop Better.
          </h2>

          <p className="text-slate-400 mt-6 max-w-xl mx-auto">
            Premium products, secure shopping,
            and a seamless experience built for
            modern customers.
          </p>

        </div>

        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">

          <p className="text-slate-400">
            © 2026 E-Commerce. All rights reserved.
          </p>

          <div className="flex gap-8 mt-4 md:mt-0">

            <a
              href="#"
              className="text-slate-400 hover:text-white transition"
            >
              Products
            </a>

            <a
              href="#"
              className="text-slate-400 hover:text-white transition"
            >
              Wishlist
            </a>

            <a
              href="#"
              className="text-slate-400 hover:text-white transition"
            >
              Cart
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;