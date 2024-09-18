import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
// import ProductList from "./features/product-list/ProductList";
import { store } from "./app/store";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <div className="App">
      {/* <ProductList></ProductList> */}
      {/* <Home /> */}
      {/* <Login /> */}
      <Signup />
    </div>
  );
}

export default App;
