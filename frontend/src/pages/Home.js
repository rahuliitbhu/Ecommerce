import React from "react";
import Navbar from "../components/Navbar";
import ProductList from "../features/product-list/counter/ProductList";
import { ProductFilter } from "../components/ProductFilter";

const Home = () => {
  return (
    <div>
      {" "}
      <Navbar></Navbar>
      <ProductList>
        <ProductFilter />
      </ProductList>
    </div>
  );
};

export default Home;
