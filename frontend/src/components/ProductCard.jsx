import { Link } from "react-router-dom";
import AddToControls from "./AddToControls";

const ProductCard = ({ product = {} }) => {
  const { id, name, description, price, imageUrl } = product;

  return (
    <div className="group bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-2xl hover:shadow-black/10 transition-all duration-500 hover:-translate-y-2">
      
      {/* Product Image */}
      <div className="relative overflow-hidden bg-gray-100 h-64">
        <img
          src={
            imageUrl ||
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
          }
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Badge */}
        <span className="absolute top-4 left-4 bg-black text-white text-xs font-semibold px-3 py-1 rounded-full">
          New
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">
          {name || "Product Name"}
        </h3>

        <p className="mt-2 text-sm text-gray-500 line-clamp-2 min-h-[40px]">
          {description || "No description available."}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <h4 className="text-2xl font-bold text-gray-900">
            ₹{price ?? "0.00"}
          </h4>

          <span className="text-xs text-green-600 font-medium">
            In Stock
          </span>
        </div>

        {/* Buttons */}
        <div className="mt-5 flex flex-col gap-3">
          <Link
            to={id ? `/products/${id}` : "/products"}
            className="w-full text-center bg-black text-white py-3 rounded-xl font-medium hover:bg-gray-800 transition"
          >
            View Details
          </Link>

          <div className="flex justify-center">
            <AddToControls productId={id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;