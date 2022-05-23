import React from "react";

import { Button } from "@chakra-ui/react";
import { Dismiss24Filled } from "@fluentui/react-icons";
import PropTypes from "prop-types";

import { cartDeleteItem } from "store/slices/cartSlice";
import { useDispatch } from "react-redux";

function DeleteButton({ id }) {
  const dispatch = useDispatch();

  const onDelete = () => {
    if (id) dispatch(cartDeleteItem(id));
  };

  return (
    <Button size="sm" onClick={onDelete}>
      <Dismiss24Filled />
    </Button>
  );
}

DeleteButton.propTypes = {
  id: PropTypes.number,
};

export default DeleteButton;
