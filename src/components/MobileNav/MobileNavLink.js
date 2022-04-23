import React from "react";

import { Button } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

function MobileNavLink({ children, to, ...props }) {
  return (
    <Button
      as={NavLink}
      to={to}
      size="sm"
      variant="ghost-brand"
      borderRadius="full"
      _activeLink={{ color: "orange.400" }}
      {...props}
    >
      {children}
    </Button>
  );
}

MobileNavLink.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string,
};

export default MobileNavLink;
