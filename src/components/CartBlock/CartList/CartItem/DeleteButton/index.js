import React from "react";

import { Button } from "@chakra-ui/react";
import { Dismiss } from "@styled-icons/fluentui-system-filled";
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
      <Dismiss size={24} />
    </Button>
  );
}

DeleteButton.propTypes = {
  id: PropTypes.number,
};

export default DeleteButton;
