import React from "react";

import { useDisclosure } from "@chakra-ui/react";

import LoginModal from "./LoginModal";
import TabBar from "./TabBar";
import TopBar from "./TopBar";

function Navigation() {
  const {
    isOpen: isLoginModalOpen,
    onOpen: onLoginModalOpen,
    onClose: onLoginModalClose,
  } = useDisclosure();

  return (
    <>
      <TopBar onLoginModalOpen={onLoginModalOpen} />
      <TabBar onLoginModalOpen={onLoginModalOpen} />
      <LoginModal isOpen={isLoginModalOpen} onClose={onLoginModalClose} />
    </>
  );
}

export default Navigation;
