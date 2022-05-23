import React from "react";

import Cart from "pages/Cart";
import Category from "pages/Category";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Product from "pages/Product";
import Room from "pages/Room";
import Search from "pages/Search";

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
