import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

function ProductDetail() {
	const { id } = useParams();

	const dispatch = useDispatch();

	const [product, setProduct] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");

	useEffect(() => {
		const fetchProduct = async () => {
			try {
				setLoading(true);
				setError("");

				const response = await fetch(`https://dummyjson.com/products/${id}`);

				if (!response.ok) {
					throw new Error("Product not found");
				}

				const data = await response.json();

				setProduct(data);
			} catch (error) {
				setError(error.message);
			} finally {
				setLoading(false);
			}
		};

		fetchProduct();
	}, [id]);

	if (loading) {
		return <p>Loading product...</p>;
	}

	if (error) {
		return <p>Error: {error}</p>;
	}

	if (!product) {
		return <p>Product not found.</p>;
	}

	const handleAddToCart = () => {
		dispatch(addToCart(product));
	};

	return (
		<main className="home-page">
			<div className="product-detail">
				<div className="product-detail-image">
					<img src={product.thumbnail} alt={product.title} max-width="100%" loading="lazy" />
				</div>

					<div className="product-detail-info">
					<h1>{product.title}</h1>

					<p className="product-detail-price">Price: ${product.price}</p>

					<p>{product.description}</p>

					<p>Brand: {product.brand}</p>

					<p>Category: {product.category}</p>

					<p>Rating: {product.rating}</p>

					<p>Stock: {product.stock}</p>

					<button onClick={handleAddToCart}>Add to Cart</button>
				</div>
			</div>
		</main>
	);
}

export default ProductDetail;