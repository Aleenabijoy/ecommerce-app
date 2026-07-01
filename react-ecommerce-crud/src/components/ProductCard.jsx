import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="card h-100 shadow-sm">
      <img
        src={product.image}
        alt={product.title}
        className="card-img-top p-3"
        style={{ height: "250px", objectFit: "contain" }}
      />

      <div className="card-body d-flex flex-column">
        <h5
          className="card-title"
          style={{ minHeight: "60px" }}
        >
          {product.title}
        </h5>

        <h4 className="text-primary mt-auto">
          ${product.price.toFixed(2)}
        </h4>

        <Link
          to={`/product/${product.id}`}
          className="btn btn-dark mt-3"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;