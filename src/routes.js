import React, { lazy } from "react";

const Cart = lazy(() => import("pages/Cart"));
const Category = lazy(() => import("pages/Category"));
const Home = lazy(() => import("pages/Home"));
const NotFound = lazy(() => import("pages/NotFound"));
const Product = lazy(() => import("pages/Product"));
const Room = lazy(() => import("pages/Room"));
const Search = lazy(() => import("pages/Search"));

const routes = [
  {
    path: "*",
    page: <NotFound />,
  },
  {
    path: "/404",
    page: <NotFound />,
  },
  {
    path: "/",
    page: <Home />,
  },
  {
    path: "/cart",
    page: <Cart />,
  },
  {
    path: "/product/:id",
    page: <Product />,
  },
  {
    path: "/category/:id",
    page: <Category />,
  },
  {
    path: "/room/:id",
    page: <Room />,
  },
  {
    path: "/search",
    page: <Search />,
  },
];

export default routes;
