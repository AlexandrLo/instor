import React from "react";

import { useDisclosure } from "@chakra-ui/react";

import LoginModal from "components/LoginModal";
import NavBar from "./NavBar";
import TabBar from "./TabBar";

function Navigation() {
  const {
    isOpen: isLoginModalOpen,
    onOpen: onLoginModalOpen,
    onClose: onLoginModalClose,
  } = useDisclosure();

  return (
    <>
      <NavBar onLoginModalOpen={onLoginModalOpen} />
      <TabBar onLoginModalOpen={onLoginModalOpen} />
      <LoginModal isOpen={isLoginModalOpen} onClose={onLoginModalClose} />
    </>
  );
}

export default Navigation;
