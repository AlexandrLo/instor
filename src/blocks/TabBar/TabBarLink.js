import React from "react";

import { Button } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

function TabBarLink({ children, to, ...props }) {
  return (
    <Button
      as={NavLink}
      to={to}
      size="sm"
      variant="ghost"
      colorScheme="orange"
      {...props}
    >
      {children}
    </Button>
  );
}

TabBarLink.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string,
};

export default TabBarLink;
