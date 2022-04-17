import React from "react";
import { Route, Routes } from "react-router-dom";

import CartPage from "containers/CartPage";
import HomePage from "containers/HomePage";

export default function App() {
  return (
    <Routes>
      <Route path="" element={<HomePage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
}
