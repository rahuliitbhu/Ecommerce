import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteCartItemAsync,
  fetchItemsByUserIdAsync,
  increment,
  incrementAsync,
  selectItems,
  updateToCartAsync,
} from "../cartSlice";

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { fetchAllProductsByIdAsync } from "../../product-list/productSlice";
import { selectUser } from "../../auth/AuthenticationSlice";
import { Link, Navigate } from "react-router-dom";

export default function Cart() {
  const products = useSelector(selectItems);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const totalAmount = products.reduce(
    (amount, item) => amount + item.price * item.quantity,
    0
  );

  const handleQuantity = (e, product) => {
    dispatch(updateToCartAsync({ ...product, quantity: e.target.value }));
    // console.log(product);
  };
  // const products = [
  //   {
  //     id: 1,
  //     name: "Throwback Hip Bag",
  //     href: "#",
  //     color: "Salmon",
  //     price: "$90.00",
  //     quantity: 1,
  //     imageSrc:
  //       "https://tailwindui.com/plus/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
  //     imageAlt:
  //       "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
  //   },
  //   {
  //     id: 2,
  //     name: "Medium Stuff Satchel",
  //     href: "#",
  //     color: "Blue",
  //     price: "$32.00",
  //     quantity: 1,
  //     imageSrc:
  //       "https://tailwindui.com/plus/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
  //     imageAlt:
  //       "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  //   },
  //   // More products...
  // ];
  // useEffect(() => {
  //   dispatch(fetchAllProductsByIdAsync(user.id));
  // }, []);
  useEffect(() => {
    dispatch(fetchItemsByUserIdAsync(user.id));
    // console.log(products);
  }, []);
  const [open, setOpen] = useState(true);

  return (
    <div>
      {!products.length && <Navigate to="/"></Navigate>}
      {products && (
        <Dialog open={open} onClose={setOpen} className="relative z-10">
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
          />

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <DialogPanel
                  transition
                  className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
                >
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <DialogTitle className="text-lg font-medium text-gray-900">
                          Shopping cart
                        </DialogTitle>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            onClick={() => setOpen(false)}
                            className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                          >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul
                            role="list"
                            className="-my-6 divide-y divide-gray-200"
                          >
                            {products.map((product) => (
                              <li key={product.id} className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img
                                    alt={product.imageAlt}
                                    src={product.images[0]}
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>
                                        <a href={product.href}>
                                          {product.name}
                                        </a>
                                      </h3>
                                      <p className="ml-4">{product.price}</p>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">
                                      {product.color}
                                    </p>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <div className="text-gray-500">
                                      <label
                                        htmlFor="quantity"
                                        className="inline mr-2 text-sm font-medium leading-6 text-gray-900"
                                      >
                                        Qty
                                      </label>
                                      {/* {product.quantity} */}
                                      <select
                                        onChange={(e) =>
                                          handleQuantity(e, product)
                                        }
                                      >
                                        <option>1</option>
                                        <option>2</option>
                                      </select>
                                    </div>

                                    <div className="flex">
                                      <button
                                        onClick={() => {
                                          dispatch(
                                            deleteCartItemAsync(product.id)
                                          );
                                        }}
                                        type="button"
                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                      >
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>{`$${totalAmount}`}</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">
                        Shipping and taxes calculated at checkout.
                      </p>
                      <div className="mt-6">
                        <Link
                          to="/checkout"
                          className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                        >
                          Checkout
                        </Link>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          or{" "}
                          <button
                            type="button"
                            onClick={() => setOpen(false)}
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </DialogPanel>
              </div>
            </div>
          </div>
        </Dialog>
      )}
    </div>
  );
}
