import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import ProductList from "./features/product-list/counter/ProductList";
import { store } from "./app/store";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      {/* <ProductList></ProductList> */}
      <Home />
    </div>
  );
}

export default App;
