import React from "react";
import "./App.css";
import Home from "./features/pages/Home";
import LoginPage from "./features/pages/LoginPage";
import SignUpPage from "./features/pages/SignUpPage";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CartPage from "./features/pages/CartPage";
import Checkout from "./features/pages/Checkout";
import ProductDetailPage from "./features/pages/ProductDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "/product-detail/:id",
    element: <ProductDetailPage />,
  },
]);


function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
