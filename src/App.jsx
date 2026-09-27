import { createBrowserRouter, RouterProvider, Outlet, } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import NotFound from "./components/NotFound";

function Layout() {
	return (
		<>
			<Header />

			<div className="container">
				<Outlet />
			</div>
		</>
	);
}

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: "cart",
				element: <Cart />,
			},
			{
				path: "checkout",
				element: <Checkout />,
			},
			{
				path: "*",
				element: <NotFound />,
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;