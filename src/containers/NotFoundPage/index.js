import React from "react";

import { ErrorCircleRegular } from "@fluentui/react-icons";
import { VStack } from "@chakra-ui/react";

import Placeholder from "components/Placeholder";

function NotFoundPage() {
  return (
    <VStack flex="1 0 100%" justify="center">
      <Placeholder
        size="lg"
        icon={<ErrorCircleRegular />}
        heading="Page not Found"
        description="This page doesn't exist or was removed"
      />
    </VStack>
  );
}

export default NotFoundPage;
