import React from "react";

import { Flex } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";

import CartPage from "containers/CartPage";
import CategoryPage from "containers/CategoryPage";
import Footer from "blocks/Footer";
import HomePage from "containers/HomePage";
import Navigation from "blocks/Navigation";
import NoMatchPage from "containers/NoMatchPage";
import ProductPage from "containers/ProductPage";
import RoomPage from "containers/RoomPage";
import ScrollToTop from "components/ScrollToTop";
import SearchPage from "containers/SearchPage";
import ThemeColorUpdater from "components/ThemeColorUpdater";
import TitleUpdater from "components/TitleUpdater";

const routes = [
  {
    path: "*",
    page: <NoMatchPage />,
    name: "Page not found",
  },
  {
    path: "/404",
    page: <NoMatchPage />,
    name: "Page not found",
  },
  {
    path: "/",
    page: <HomePage />,
    name: "Home",
  },
  {
    path: "/cart",
    page: <CartPage />,
    name: "Cart",
  },
  {
    path: "/product/:id",
    page: <ProductPage />,
    name: "Product",
  },
  {
    path: "/category/:id",
    page: <CategoryPage />,
    name: "Category",
  },
  {
    path: "/room/:id",
    page: <RoomPage />,
    name: "Room",
  },
  {
    path: "/search",
    page: <SearchPage />,
    name: "Search",
  },
];

export default function App() {
  return (
    <Flex direction="column" position="relative" minH="100vh" spacing="0">
      <ScrollToTop />
      <ThemeColorUpdater />
      <Navigation />
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={
              <>
                <TitleUpdater title={route.name} />
                {route.page}
              </>
            }
          />
        ))}
      </Routes>
      <Footer />
    </Flex>
  );
}
