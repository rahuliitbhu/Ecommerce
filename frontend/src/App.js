import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
// import ProductList from "./features/product-list/ProductList";
import { store } from "./app/store";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { router } from "./features/routes/routes";

function App() {
  return (
    <div className="App">
      {/* <ProductList></ProductList> */}
      {/* <Home /> */}
      {/* <Login /> */}
      <RouterProvider router={router} />

      <Signup />
    </div>
  );
}

export default App;
