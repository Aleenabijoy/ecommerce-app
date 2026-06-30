const API_URL="https://fakestoreapi.com/products";

export async function getProducts() {
    const response= await fetch(API_URL);

    if (!response.ok){
        throw new Error("Failed to fetch products");
    }
    return await response.json();
}
export async function getProductById(id){
    const response= await fetch(`https://fakestoreapi.com/products/${id}`);
    if(!response.ok){
        throw new Error("Failed to fetch product"); 
    }
    return await response.json();
}