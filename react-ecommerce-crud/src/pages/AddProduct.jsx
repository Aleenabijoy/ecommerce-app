import {useState} from "react";
import {useNavigate} from "react-router-dom";

function AddProduct({products,setProducts}){
    
    const navigate=useNavigate();
    const [formData,setFormData]=useState({
        title:"",
        price:"",
        description:"",
        category:"",
        image:"",
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
            !formData.price ||
            !formData.description||
            !formData.category||
            !formData.image
        ){
            alert("Please fill in all fields.");
            return;
        }
        const newProduct={
            id:Date.now(),
            ...formData,
            price:Number(formData.price),
        };
        setProducts([...products,newProduct]);
        navigate("/");
    };

    return(
        <div className="container mt-5">
            <h2 className="mb-4">Add Product</h2>

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
                        onChange={handleChange}/>
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
                    Add Product
                </button>
            </form>
        </div>
    )
}
export default AddProduct;