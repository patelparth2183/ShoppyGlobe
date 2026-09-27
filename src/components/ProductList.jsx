import { useDispatch, useSelector } from "react-redux";
import useFetchProducts from "../hooks/useFetchProducts";
import ProductItem from "./ProductItem";
import { setSearchTerm } from "../redux/cartSlice";
import { selectSearchTerm } from "../redux/selectors";

function ProductList() {
	const { products, loading, error } = useFetchProducts();

	const dispatch = useDispatch();

	const searchTerm = useSelector(selectSearchTerm);

	const handleSearch = (event) => { dispatch(setSearchTerm(event.target.value)); };

	if (loading) {
		return <p>Loading products...</p>;
	}

	if (error) {
		return <p>Error: {error}</p>;
	}

	const filteredProducts = products.filter((product) =>
		product.title.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<div>
			<h2>Products</h2>

			<input className="search-input" type="text" placeholder="Search products..." value={searchTerm} onChange={handleSearch} />

			<div className="product-list">
				{filteredProducts.length > 0 ? (
					filteredProducts.map((product) => (
						<ProductItem key={product.id} product={product} />
					))
				) : (
					<p>No products found.</p>
				)}
			</div>
		</div>
	);
}

export default ProductList;