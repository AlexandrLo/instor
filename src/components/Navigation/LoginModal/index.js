import React from "react";

import PropTypes from "prop-types";
import { Modal, ModalBody, ModalContent, ModalOverlay } from "@chakra-ui/react";

import LoginForm from "./LoginForm";
import ModalHeader from "./ModalHeader";

function LoginModal({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader heading="Log In" onBack={onClose} />
        <ModalBody p="1rem">
          <LoginForm />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

LoginModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default LoginModal;
