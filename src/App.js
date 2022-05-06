import React from "react";

import { Flex } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";

import CartPage from "containers/CartPage";
import CategoryPage from "containers/CategoryPage";
import Footer from "blocks/Footer";
import HomePage from "containers/HomePage";
import NavBar from "blocks/NavBar";
import NoMatchPage from "containers/NoMatchPage";
import ProductPage from "containers/ProductPage";
import ScrollToTop from "components/ScrollToTop";
import TabBar from "blocks/TabBar";
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
];

export default function App() {
  return (
    <Flex direction="column" position="relative" minH="100vh" spacing="0">
      <ScrollToTop />
      <ThemeColorUpdater />
      <NavBar />
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
      <TabBar />
    </Flex>
  );
}
