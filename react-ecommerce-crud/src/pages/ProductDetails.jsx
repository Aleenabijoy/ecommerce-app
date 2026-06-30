import {useEffect,useState} from "react";
import { useParams,Link } from "react-router-dom";
import { getProductById } from "../services/api";


function ProductDetails(){
    const {id} = useParams();
    const[product,setProduct]=useState(null);
    const[loading,setLoading]=useState(true);
    const[error,setError]=useState("");

    useEffect(()=>{
        async function fetchProduct(){
            try{
                const data=await getProductById(id);
                setProduct(data);
            } catch(err){
                setError(err.message);
            } finally{
                setLoading(false);
            }
        }
        fetchProduct();
    },[id]);
    if(loading){
        return <h2 className="text-center mt-5">Loading...</h2>;
    }
    if (error){
        return <h2 className="text-center text-danger mt-5">{error}</h2>;
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