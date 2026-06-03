import { Link } from "react-router-dom";
import AddToControls from "./AddToControls";

const ProductCard = ({ product = {} }) => {

  const { id, name, description, price } = product;

  return (
    <div
      style={{
        border: "1px solid gray",
        width: "250px",
        padding: "20px",
      }}
    >

      <h3>{name || "Product Name"}</h3>

      <p>{description || "No description available."}</p>

      <h4>₹ {price ?? "0.00"}</h4>

      <Link to={id ? `/products/${id}` : "/products"}>
        View Details
      </Link>

      <AddToControls productId={id} />

    </div>
  );
};

export default ProductCard;