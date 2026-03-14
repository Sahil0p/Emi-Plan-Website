import { Link } from "react-router-dom";
import "../styles/productCard.css";

const ProductCard = ({ product }) => {

  const variant = product.variants[0];

  return (
    <Link to={`/products/${product.slug}`} className="productCard">

      <div className="imageContainer">
        <img
          src={variant.image}
          alt={product.name}
        />
      </div>

      <h3 className="productTitle">
        {product.name}
      </h3>

      <p className="variant">
        {variant.storage} • {variant.color}
      </p>

      <div className="priceRow">

        <span className="finalPrice">
          ₹{product.price.toLocaleString()}
        </span>

        <span className="mrp">
          ₹{product.mrp.toLocaleString()}
        </span>

      </div>

      <p className="emiText">
        No cost EMI available
      </p>

    </Link>
  );
};

export default ProductCard;