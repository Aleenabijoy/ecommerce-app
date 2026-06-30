import {Link} from "react-router-dom";
function ProductCard({ product }){
    return(
    <div className="card h-100 shadow-sm">
        <img
        src={product.image}
        className="cars-img-top p-3"
        alt={product.title}
        style={{height:"250px",objectFit:"conatin"}}
        />
        <div className="card-body d-flex flex-column">
            <h5 className="card-title">{product.title}</h5>
            <h4 className="text-primary mt.auto">
                ${product.price}
            </h4>
            <Link
            to={`/product/${product.id}`}
            className="btn btn-dark mt-3">
                View Details
            </Link>
        </div>
    </div>
);
}
export default ProductCard;