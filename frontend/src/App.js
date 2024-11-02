import React, { useEffect } from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
// import ProductList from "./features/product-list/ProductList";

import { BrowserRouter, useRoutes } from "react-router-dom";
import { router } from "./features/routes/routes";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "./features/auth/AuthenticationSlice";
import {
  fetchItemsByUserIdAsync,
  selectItems,
} from "./features/cart/cartSlice";
const Routes = () => {
  let ele = useRoutes(router);
  return <>{ele}</>;
};
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes />
      </div>
    </BrowserRouter>
  );
}

export default App;
