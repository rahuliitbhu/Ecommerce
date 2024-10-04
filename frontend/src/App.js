import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
// import ProductList from "./features/product-list/ProductList";

import { BrowserRouter, useRoutes } from "react-router-dom";
import { router } from "./features/routes/routes";
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
