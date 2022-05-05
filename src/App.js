import React from "react";

import { Flex } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";

import CartPage from "containers/CartPage";
import Footer from "blocks/Footer";
import HomePage from "containers/HomePage";
import NavBar from "blocks/NavBar";
import NoMatchPage from "containers/NoMatchPage";
import ProductPage from "containers/ProductPage";
import ScrollToTop from "components/ScrollToTop";
import TabBar from "blocks/TabBar";

export default function App() {
  return (
    <Flex direction="column" position="relative" minH="100vh" spacing="0">
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path="*" element={<NoMatchPage />} />
        <Route path="/404" element={<NoMatchPage />} />
        <Route path="" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
      <Footer />
      <TabBar />
    </Flex>
  );
}
