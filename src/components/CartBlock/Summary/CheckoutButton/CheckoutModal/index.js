import React from "react";

import { CheckmarkCircle } from "@styled-icons/fluentui-system-filled";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  Heading,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Text,
  VStack,
} from "@chakra-ui/react";

function CheckoutModal({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalBody>
          <VStack>
            <Box color="green.400" p="1rem">
              <CheckmarkCircle size="6rem" />
            </Box>
            <Heading as="h2" size="h2">
              Order Placed
            </Heading>
            <Text>
              Order number:{" "}
              <Text variant="bold" as="b">
                123456
              </Text>
            </Text>
          </VStack>
        </ModalBody>

        <ModalFooter>
          <Button w="100%" variant="solid" onClick={onClose}>
            Ok
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

CheckoutModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default CheckoutModal;
