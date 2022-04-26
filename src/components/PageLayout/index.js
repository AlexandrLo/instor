import React from "react";

import { Box } from "@chakra-ui/react";
import PropTypes from "prop-types";

import Footer from "components/Footer";
import MobileNav from "components/MobileNav";
import NavBar from "components/NavBar";

function PageLayout({ children, ...props }) {
  return (
    <Box position="relative" h="100vh" {...props}>
      <NavBar />
      {children}
      <Footer />
      <MobileNav />
    </Box>
  );
}

PageLayout.propTypes = {
  children: PropTypes.node,
};

export default PageLayout;
