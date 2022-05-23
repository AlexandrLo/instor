import React from "react";

import { Flex } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";

import Footer from "components/Footer";
import Navigation from "components/Navigation";
import ScrollToTop from "components/ScrollToTop";
import ThemeColorUpdater from "components/ThemeColorUpdater";
import routes from "routes";

export default function App() {
  return (
    <Flex direction="column" position="relative" minH="100vh" spacing="0">
      <ScrollToTop />
      <ThemeColorUpdater />
      <Navigation />
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.page} />
        ))}
      </Routes>
      <Footer />
    </Flex>
  );
}
