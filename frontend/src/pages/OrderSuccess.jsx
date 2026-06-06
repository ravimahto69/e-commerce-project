import { Link } from "react-router-dom";

function OrderSuccess() {
  return (
    <div className="min-h-screen bg-[#f6f8fb] flex items-center">

      <div className="max-w-4xl mx-auto px-6 w-full">

        <div className="bg-white rounded-[40px] border border-gray-200 p-12 md:p-20">

          {/* Success Label */}

          <p className="uppercase tracking-[0.3em] text-sm text-slate-500">
            Order Successful
          </p>

          {/* Heading */}

          <h1 className="text-5xl md:text-7xl font-black text-[#08122f] mt-6 leading-none">
            Thank You.
          </h1>

          <h2 className="text-5xl md:text-7xl font-black text-slate-300 leading-none">
            Your order is confirmed.
          </h2>

          {/* Description */}

          <p className="text-xl text-slate-500 max-w-2xl mt-10 leading-relaxed">
            We've received your order and it's now being
            prepared for shipment. You'll receive updates
            as soon as your package is on the way.
          </p>

          {/* Order Information */}

          <div className="grid md:grid-cols-3 gap-8 mt-16 border-t border-gray-200 pt-10">

            <div>
              <p className="text-sm uppercase tracking-wider text-slate-400">
                Status
              </p>

              <h3 className="text-2xl font-bold text-[#08122f] mt-2">
                Confirmed
              </h3>
            </div>

            <div>
              <p className="text-sm uppercase tracking-wider text-slate-400">
                Delivery
              </p>

              <h3 className="text-2xl font-bold text-[#08122f] mt-2">
                3–5 Days
              </h3>
            </div>

            <div>
              <p className="text-sm uppercase tracking-wider text-slate-400">
                Payment
              </p>

              <h3 className="text-2xl font-bold text-[#08122f] mt-2">
                Successful
              </h3>
            </div>

          </div>

          {/* Actions */}

          <div className="flex flex-wrap gap-4 mt-16">

            <Link
              to="/products"
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
              Continue Shopping
            </Link>

            <Link
              to="/orders"
              className="
                border
                border-gray-300
                px-8
                py-4
                rounded-2xl
                font-semibold
                hover:bg-gray-50
                transition
              "
            >
              View Orders
            </Link>

          </div>

          {/* Footer Note */}

          <p className="text-slate-400 mt-12 text-sm">
            A confirmation email has been sent to your
            registered email address.
          </p>

        </div>

      </div>

    </div>
  );
}

export default OrderSuccess;