
import {useEffect,useState} from "react";
import { Routes,Route } from "react-router-dom";

import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import Navbar from "./components/Navbar";

import { getProducts } from "./services/api";
function App() {
  const [products,setProducts]=useState([]);
  const[loading,setLoading]=useState(true);
  const [error,setError]=useState("");
  useEffect(()=>{
    async function fetchProducts(){
      try{
        const data=await getProducts();
        setProducts(data);
      }catch(err){
        setError(err.message);
      }finally{
        setLoading(false);
      }
    }
    fetchProducts();
  },[]);
  
  return (
    <>
      <Navbar/>
      <Routes>
        <Route
  path="/"
  element={
        <Home
            products={products}
            loading={loading}
            error={error} />
          }/>
        <Route
            path="/product/:id"
            element={<ProductDetails 
              products={products}
              setProducts={setProducts} />}
          />
        <Route
            path="/add-product"
            element={
              <AddProduct
                products={products}
                setProducts={setProducts}
              />
            }/>
        <Route
            path="/edit-product/:id"
            element={
              <EditProduct
                products={products}
                setProducts={setProducts}
              />}
          />
      </Routes> 
    </>
  );
}
export default App;