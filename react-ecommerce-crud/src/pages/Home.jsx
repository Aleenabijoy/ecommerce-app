import {useEffect,useState} from "react";
import {getProducts} from "../services/api";

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

    <pre>{JSON.stringify(products, null, 2)}</pre>
  </div>
);
}
export default Home;