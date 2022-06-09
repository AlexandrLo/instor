import React from "react";

import { ArrowLeft } from "@styled-icons/fluentui-system-filled";
import { Button } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useNavigate, useSearchParams } from "react-router-dom";

function BackButton({ variant, colorScheme, size, onBack }) {
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
      onClick={onBack ? onBack : handleBack}
    >
      <ArrowLeft size={24} />
    </Button>
  );
}

BackButton.propTypes = {
  variant: PropTypes.string,
  colorScheme: PropTypes.string,
  size: PropTypes.string,
  onBack: PropTypes.func,
};

export default BackButton;
