import React from "react";

import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";

import CartPage from "containers/CartPage";
import Footer from "blocks/Footer";
import HomePage from "containers/HomePage";
import MobileNav from "blocks/MobileNav";
import NavBar from "blocks/NavBar";

export default function App() {
  return (
    <Box position="relative" h="100vh">
      <NavBar />
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      <Footer />
      <MobileNav />
    </Box>
  );
}
