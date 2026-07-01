import {useState} from "react";
import {useNavigate,useParams} from "react-router-dom";

function EditProduct({products,setProducts}){
    
    const navigate=useNavigate();
    const {id}=useParams();
    const exisitingProduct=products.find(
        (product)=>product.id===Number(id)
    );
    const [formData,setFormData]=useState({
        title: exisitingProduct?.title || "",
        price: exisitingProduct?.price || "",
        description:exisitingProduct?.description || "",
        category:exisitingProduct?.category || "",
        image:exisitingProduct?.image || "",
    });
    
    const handleChange=(e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value,
        });
    };

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(
            !formData.title ||
            
            !formData.description||
            !formData.category||
            !formData.image ||
            Number(formData.price) <= 0
        ){
            alert("Please enter valid product details.");
            return;
        }
    const updatedProducts=products.map((product)=>
        product.id === Number(id)
        ? {
            ...product,
            ...formData,
            price:Number(formData.price),
        }
        : product
    );
        setProducts(updatedProducts);
        navigate("/");
    };

    if(!exisitingProduct){
        return(
            <h2 className="text-center mt-5">
                Product not found
            </h2>
        );
    }
    return(
        <div className="container mt-5">
            <button
                className="btn btn-secondary mb-4"
                onClick={() => navigate(-1)}
                >
                ← Back
            </button>
            
            <h2 className="mb-4">Edit Product</h2>

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}/>

                </div>

                <div className="mb-3">
                    <label className="form-label">Price</label>
                    <input
                        type="number"
                        className="form-control"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        step="0.01"
                        min="0.01"
                        />
                </div>

                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea
                    className="form-control"
                    rows="4"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    ></textarea>
                </div>

                <div className="mb-3">
                    <label className="form-label">Category</label>
                    <input
                    type="text"
                    className="form-control"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Image URL</label>
                    <input
                    type="text"
                    className="form-control"
                    name="image"
                    value={formData.image}
                    onChange={handleChange}
                    
                    />
                </div>


                <button 
                    type="submit"
                    className="btn btn-primary">
                    Update Product
                </button>
            </form>
        </div>
    )
}
export default EditProduct;