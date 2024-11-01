import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Login from "../../pages/LoginPage";

import Home from "../../pages/Home";
import Cart from "../cart/components/Cart";
import CartPage from "../../pages/CartPage";
import CheckoutPage from "../../pages/CheckoutPage";
import ProductDetail from "../product-list/components/ProductDetail";
import SignupPage from "../../pages/SignupPage";
import Protected from "../auth/components/Protected";
import LoginPage from "../../pages/LoginPage";

export const router = [
  {
    path: "/",
    element: (
      <Protected>
        <Home />
      </Protected>
    ),
  },
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "signup",
    element: <SignupPage />,
  },
  {
    //only for testing
    path: "cart",
    element: (
      <Protected>
        <CartPage />
      </Protected>
    ),
  },
  {
    //only for testing
    path: "checkout",
    element: (
      <Protected>
        <CheckoutPage />
      </Protected>
    ),
  },
  {
    //only for testing
    path: "product-detail/:id",
    element: (
      <Protected>
        <ProductDetail />
      </Protected>
    ),
  },
];
