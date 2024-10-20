# E-commerce Application

This is a simple e-commerce application built using React, Redux, and RTK Query, and initialized with Vite. It displays a list of products and allows users to manage their shopping cart.

## Installation

To set up the application locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/abdullah-al-mridul/ecommerce-product-list.git
   cd ecommerce-product-list
   ```

2. **Install dependencies**: Make sure you have [Node.js](https://nodejs.org/) installed. Then run:

   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   The application will be running on `http://localhost:5173` by default.

## Features

- Fetch products from an API using RTK Query.
- Display product cards with details like title, image, price, and rating.
- Manage a shopping cart with total price and quantity.
- Animate cart visibility using Framer Motion for smooth transitions.
- Responsive design for various screen sizes using Tailwind CSS.

## Components

- **App**: The main component that houses the application logic and UI structure.
- **ProductCard**: Displays individual product details, including title, image, price, and rating.
- **CartCard**: Displays individual cart item details with the option to remove items or update quantity.

## Usage

1. **Fetching Products**:

   - Products are fetched using the `useGetAllProductsQuery` hook from RTK Query.
   - The component handles loading and error states while fetching data, displaying appropriate messages.

2. **Shopping Cart**:

   - Users can view the cart by clicking the cart button at the top right corner of the screen.
   - Cart visibility is managed by the `isCartOpen` state, which can be toggled using the cart button.
   - Clicking outside the cart will close it to enhance user experience.

3. **Total Price and Quantity**:

   - The total price and quantity of items in the cart are calculated using selectors from the Redux store, allowing users to see a summary of their purchases at a glance.

4. **Animations**:
   - The cart's opening and closing animations are handled using Framer Motion, providing a modern and responsive feel to the application.

## Styling

The application uses Tailwind CSS for styling, ensuring a sleek and modern interface with a dark mode. Tailwind's utility classes make it easy to manage responsive design and component styles.

## Future Enhancements

- Add user authentication to allow users to save their cart and view purchase history.
- Implement product filtering and sorting options.
- Enhance the UI with animations for adding/removing products from the cart.

## Design Credits

Design and Developed by [Abdullah Al Mridul](https://abdullah-al-mridul-dev.vercel.app/)
