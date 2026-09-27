import useFetchProducts from "../hooks/useFetchProducts";
import ProductItem from "./ProductItem";

function ProductList() {
	const { products, loading, error } = useFetchProducts();

	if (loading) {
		return <p>Loading products...</p>;
	}

	if (error) {
		return <p>Error: {error}</p>;
	}

	return (
		<div>
			<h2>Products</h2>

			<div>
				{products.map((product) => (
					<ProductItem
						key={product.id}
						product={product}
					/>
				))}
			</div>
		</div>
	);
}

export default ProductList;