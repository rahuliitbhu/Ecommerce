// A mock function to mimic making an async request for data
import axios from "axios";
let lastProcess = {};
export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8000/products");
    const data = await response.json();
    resolve({ data });
  });
}
export function fetchAllProductByFilters(actionList) {
  let queryString = "";
  for (let item of actionList) {
    for (let key in item) {
      queryString += `${key}=${item[key]}&`;
    }
  }

  console.log(actionList);
  // for (let key in filter) {
  //   queryString += `${key}=${filter[key]}&`;
  // }
  // for (let key in sort) {
  //   queryString += `${key}=${sort[key]}&`;
  // }
  // for (let key in pagination) {
  //   queryString += `${key}=${pagination[key]}&`;
  // }

  return new Promise(async (resolve) => {
    const response = await fetch(
      `http://localhost:8000/products?${queryString}`
    );
    const data = await response.json();
    const totalItems = await response.headers.get("X-Total-Count");
    resolve({ data: { products: data, totalItems: totalItems } });
  });
}

export function fetchAllBrands() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8000/brands");
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchAllCategory() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8000/category");
    const data = await response.json();
    resolve({ data });
  });
}
