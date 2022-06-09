import React from "react";

import { DocumentError } from "@styled-icons/fluentui-system-filled";
import { VStack } from "@chakra-ui/react";

import Footer from "components/Footer";
import Placeholder from "components/Placeholder";
import Title from "components/Title";

function NotFound() {
  return (
    <>
      <Title postfix="Page not Found" />

      <VStack flex="1 0 100%" justify="center">
        <Placeholder
          size="lg"
          icon={<DocumentError />}
          heading="Page not Found"
          description="This page doesn't exist or was removed"
        />
      </VStack>

      <Footer />
    </>
  );
}

export default NotFound;
