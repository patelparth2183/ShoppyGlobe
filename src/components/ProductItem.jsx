import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

function ProductItem({ product }) {
	const dispatch = useDispatch();

	const handleAddToCart = () => {
		dispatch(addToCart(product));
	};

	return (
		<div>
			<img src={product.thumbnail} alt={product.title} max-width="100%" />

			<h3>{product.title}</h3>

			<p>${product.price}</p>

			<button onClick={handleAddToCart}>Add to Cart</button>

			<Link to={`/product/${product.id}`}><button>View Details</button></Link>
		</div>
	);
}

export default ProductItem;