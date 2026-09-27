# ShoppyGlobe
ShoppyGlobe is a React-based e-commerce application built as a shopping platform using the DummyJSON Products API. The project includes product browsing, product details, search, a Redux-powered shopping cart, checkout, responsive styling, route-level lazy loading, and lazy-loaded images.

## Features
- Browse products fetched from the DummyJSON API
- View individual product details
- Search products by title
- Add products to the shopping cart
- Increase and decrease product quantities
- Remove products from the cart
- View cart item count in the header
- Calculate the cart total
- Checkout form with customer information
- Order summary before placing an order
- Clear the cart after a successful order
- Navigate back to the home page after placing an order
- Custom 404 Not Found page
- Route-level lazy loading using React `lazy()` and `Suspense`
- Native lazy loading for product images
- Reusable `useFetch` custom hook
- Redux Toolkit for cart and search state
- React Router for application routing
- Responsive layout for desktop, tablet, and mobile screens

## Technologies Used
- React
- Vite
- JavaScript
- Redux Toolkit
- React Redux
- React Router
- DummyJSON API
- CSS
- Git and GitHub

## GitHub Link
`https://github.com/patelparth2183/ShoppyGlobe`

## API
Products are fetched from:
`https://dummyjson.com/products`

Individual product details are fetched using:
`https://dummyjson.com/products/{id}`

## How to Run the Project

### 1. Clone the repository
```bash
git clone <your-github-repository-url>
```

### 2. Open the project folder
```bash
cd ShoppyGlobe
```

Replace `ShoppyGlobe` with your actual project folder name if it is different.

### 3. Install dependencies
```bash
npm install
```

### 4. Start the development server
```bash
npm run dev
```

Vite will display a local development URL, usually similar to:

```text
http://localhost:5173/
```

Open that URL in your browser.

### 5. Build the project for production
```bash
npm run build
```

### 6. Preview the production build
```bash
npm run preview
```

## Shopping Flow
1. Open the Home page.
2. Browse or search for products.
3. Open a product to view its details.
4. Add the product to the cart.
5. Open the Cart page.
6. Change quantities or remove products.
7. Continue to Checkout.
8. Enter the required customer information.
9. Review the order summary.
10. Place the order.
11. The cart is cleared and the application redirects to the Home page.