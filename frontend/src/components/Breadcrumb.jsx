import { Link } from "react-router-dom";
import "../styles/layout.css";

const Breadcrumb = ({ product }) => {
  return (
    <div className="breadcrumb">
      <Link to="/">Home</Link>
      <span> / Smartphones / </span>
      <span>{product?.name}</span>
    </div>
  );
};

export default Breadcrumb;