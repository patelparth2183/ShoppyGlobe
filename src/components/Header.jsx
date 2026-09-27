import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
	const cartItems = useSelector((state) => state.cart.items);

	const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

	return (
		<header className="header">
			<div className="header-container">
				<Link to="/" className="logo">ShoppyGlobe</Link>

				<nav className="nav">
					<Link to="/">Home</Link>
					<Link to="/cart">Cart 🛒 ({cartCount})</Link>
				</nav>
			</div>
		</header>
	);
}

export default Header;