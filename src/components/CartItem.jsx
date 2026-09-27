import { useDispatch } from "react-redux";
import { increaseQuantity, decreaseQuantity, removeFromCart } from "../redux/cartSlice";

function CartItem({ item }) {
	const dispatch = useDispatch();

	const handleIncrease = () => { dispatch(increaseQuantity(item.id)); };

	const handleDecrease = () => { dispatch(decreaseQuantity(item.id)); };

	const handleRemove = () => { dispatch(removeFromCart(item.id)); };

	return (
		<div className="cart-item">
			<img src={item.thumbnail} alt={item.title} width="120" />

			<div className="cart-item-info">
				<h3>{item.title}</h3>

				<p>Price: ${item.price}</p>

				<div className="quantity-controls">
					<button className="quantity-controls-btn" onClick={handleDecrease}>-</button>

					<span>{item.quantity}</span>

					<button className="quantity-controls-btn" onClick={handleIncrease}>+</button>
				</div>

				<button onClick={handleRemove}>Remove</button>
			</div>
		</div>
	);
}

export default CartItem;