import {useEffect,useState} from "react";
import {getProducts} from "../services/api";
import ProductCard from "../components/ProductCard";
function Home(){
    const[products,setProducts]=useState([]);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState("")
    useEffect(() =>{
        async function fetchProducts() {
            
    
            try{
                const data =await getProducts();
                setProducts(data);
            }catch(err){
                setError(err.message);
            }finally{
                setLoading(false);
            }
        }
        fetchProducts();
        }, []);
    return (
    <div className="container mt-4">
    <h1>Products</h1>

    {loading && <p>Loading...</p>}

    {error && <p>{error}</p>}

    <div className="row">
        {products.map((product)=>(
            <div className="col-md-4 col-lg-3 mb-4" key={product.id}>
                <ProductCard product={product}/>
            </div>
        ))}
    </div>
    </div>
    
);
}
export default Home;