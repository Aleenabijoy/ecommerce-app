import ProductCard from "../components/ProductCard";

function Home({ products, loading, error }) {
  if (loading) {
    return <h2 className="text-center mt-5">Loading...</h2>;
  }

  if (error) {
    return (
      <h2 className="text-center text-danger mt-5">
        {error}
      </h2>
    );
  }

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Products</h1>

      <div className="row">
        {products.map((product) => (
          <div
            className="col-md-4 col-lg-3 mb-4"
            key={product.id}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;