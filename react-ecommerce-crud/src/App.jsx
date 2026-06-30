import { Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/product/:id" element={<ProductDetails/>}/>
        <Route path="/add-product" element={<AddProduct/>}/>
        <Route path="/edit-product/:id" element={<EditProduct/>}/>
      </Routes> 
    </>
  );
}
export default App;