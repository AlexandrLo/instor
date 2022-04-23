import React, { useLayoutEffect, useState } from "react";

import { Box } from "@chakra-ui/react";
import PropTypes from "prop-types";

import Footer from "components/Footer";
import MobileNav from "components/MobileNav";
import NavBar from "components/NavBar";

function PageLayout({ children, ...props }) {
  const [innerHeight, setInnerHeight] = useState("100vh");

  useLayoutEffect(() => {
    const onResize = () => {
      setInnerHeight(window.innerHeight);
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <Box position="relative" {...props}>
      <Box h="100vh" w="100vw" overflowY="scroll" position="relative">
        <NavBar />
        {children}
        <Footer pb={`calc(100vh - ${innerHeight}px + 4rem)`} />
      </Box>
      <MobileNav pb={`calc(100vh - ${innerHeight}px)`} />
    </Box>
  );
}

PageLayout.propTypes = {
  children: PropTypes.node,
};

export default PageLayout;
