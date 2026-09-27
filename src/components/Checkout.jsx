import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../redux/cartSlice";
import { selectCartItems } from "../redux/selectors";

function Checkout() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const cartItems = useSelector(selectCartItems);

	const [formData, setFormData] = useState({
		name: "",
		email: "",
		address: "",
		city: "",
		postalCode: "",
	});

	const [error, setError] = useState("");

	const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

	const handleChange = (event) => {
		const { name, value } = event.target;

		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		if (!formData.name || !formData.email || !formData.address || !formData.city || !formData.postalCode) {
			setError("Please fill in all fields.");
			return;
		}

		setError("");

		dispatch(clearCart());

		alert("Order placed successfully!");

		navigate("/");
	};

	if (cartItems.length === 0) {
		return (
			<main>
				<h1>Checkout</h1>
				<p>Your cart is empty.</p>
			</main>
		);
	}

	return (
		<main>
			<h1>Checkout</h1>

			<div className="checkout-container">
				<section className="checkout-form">
					<h2>Customer Information</h2>

					{error && (<p className="error-message">{error}</p>)}

					<form onSubmit={handleSubmit}>
						<div>
							<label htmlFor="name">Full Name</label>
							<input id="name" name="name" type="text" value={formData.name} onChange={handleChange} placeholder="Enter your name" />
						</div>

						<div>
							<label htmlFor="email">Email</label>
							<input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" />
						</div>

						<div>
							<label htmlFor="address">Address</label>
							<input id="address" name="address" type="text" value={formData.address} onChange={handleChange} placeholder="Enter your address" />
						</div>

						<div>
							<label htmlFor="city">City</label>
							<input id="city" name="city" type="text" value={formData.city} onChange={handleChange} placeholder="Enter your city" />
						</div>

						<div>
							<label htmlFor="postalCode">Postal Code</label>

							<input id="postalCode" name="postalCode" type="text" value={formData.postalCode} onChange={handleChange} placeholder="Enter postal code" />
						</div>

						<button type="submit">Place Order</button>
					</form>
				</section>

				<section className="order-summary">
					<h2>Order Summary</h2>

					{cartItems.map((item) => (
						<div className="summary-item" key={item.id} >
							<p>{item.title} × {item.quantity}</p>
							<p>${(item.price * item.quantity).toFixed(2)}</p>
						</div>
					))}

					<hr />

					<h3>Total: ${totalPrice.toFixed(2)}</h3>
				</section>
			</div>
		</main>
	);
}

export default Checkout;