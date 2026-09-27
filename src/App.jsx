import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider, Outlet, } from "react-router-dom";
import Header from "./components/Header";

const Home = lazy(() => import("./components/Home"));
const ProductDetail = lazy(() => import("./components/ProductDetail"));
const Cart = lazy(() => import("./components/Cart"));
const Checkout = lazy(() => import("./components/Checkout"));
const NotFound = lazy(() => import("./components/NotFound"));

function Layout() {
	return (
		<>
			<Header />

			<Suspense fallback={<p>Loading page...</p>}>
				<Outlet />
			</Suspense>
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
				path: "product/:id",
				element: <ProductDetail />,
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