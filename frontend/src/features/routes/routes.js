import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Login from "../../pages/Login";
import Signup from "../../pages/Signup";
import Home from "../../pages/Home";
import Cart from "../cart/Cart";
import CartPage from "../../pages/CartPage";
import CheckoutPage from "../../pages/CheckoutPage";
import Checkout from "../../pages/Checkout";

export const router = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
  {
    //only for testing
    path: "cart",
    element: <CartPage />,
  },
  {
    //only for testing
    path: "checkout",
    element: <CheckoutPage />,
  },
];
