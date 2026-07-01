import { Link,useNavigate,useParams} from "react-router-dom";


function ProductDetails({products}){
    const {id} = useParams();
    const navigate=useNavigate();

    const product=products.find(
        (product)=>product.id === Number(id)
        );
    
    if(!product){
        return(

         <h2 className="text-center mt-5">
            Product not found
        </h2>
        );
    }
    return (
    <div className="container mt-5">
    <Link to="/" className="btn btn-secondary mb-4">
      ← Back
    </Link>

    <div className="row">
      <div className="col-md-5 text-center">
        <img
          src={product.image}
          alt={product.title}
          className="img-fluid"
          style={{ maxHeight: "400px", objectFit: "contain" }}
        />
      </div>

      <div className="col-md-7">
        <h2 className="fw-bold">{product.title}</h2>

        <h3 className="text-primary fw-bold mt-3">
          ${product.price.toFixed(2)}
        </h3>

        <p className="mt-4 lh-lg">{product.description}</p>

        <span className="badge bg-dark">
          {product.category}
        </span>

        <div className="mt-4">
          <Link
            to={`/edit-product/${product.id}`}
            className="btn btn-warning me-2"
          >
            Edit
          </Link>

          <button className="btn btn-danger">Delete
          </button>
        </div>
      </div>
    </div>
  </div>
);
}
export default ProductDetails;