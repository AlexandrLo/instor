import React from "react";
import { Route, Routes } from "react-router-dom";

import CartPage from "containers/CartPage";
import HomePage from "containers/HomePage";
import PageLayout from "components/PageLayout";
import TestPage from "containers/TestPage";

export default function App() {
  return (
    <PageLayout>
      <Routes>
        <Route path="/test" element={<TestPage />} />
        <Route path="" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </PageLayout>
  );
}
