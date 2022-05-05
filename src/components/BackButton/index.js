import React from "react";

import { ArrowLeft24Filled } from "@fluentui/react-icons";
import { Button } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useNavigate, useSearchParams } from "react-router-dom";

function BackButton({ variant, colorScheme, size }) {
  let navigate = useNavigate();

  let [searchParams] = useSearchParams();

  const handleBack = () => {
    if (searchParams.get("from")) {
      navigate(searchParams.get("from"));
    } else {
      navigate("/");
    }
  };

  return (
    <Button
      variant={variant}
      colorScheme={colorScheme}
      size={size}
      onClick={handleBack}
    >
      <ArrowLeft24Filled />
    </Button>
  );
}

BackButton.propTypes = {
  variant: PropTypes.string,
  colorScheme: PropTypes.string,
  size: PropTypes.string,
};

export default BackButton;
