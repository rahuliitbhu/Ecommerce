import React from "react";
import Navbar from "../components/Navbar";
import ProductList from "../features/product-list/ProductList";
import { ProductFilter } from "../components/ProductFilter";
import Pagination from "../components/Pagination";

const Home = () => {
  return (
    <div>
      {" "}
      <Navbar></Navbar>
      <ProductList>
        <ProductFilter />
      </ProductList>
      <Pagination />
    </div>
  );
};

export default Home;
