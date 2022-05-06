import React from "react";

import { Helmet } from "react-helmet";
import { useColorMode, useToken } from "@chakra-ui/react";

function ThemeColorUpdater() {
  const [white, gray800] = useToken("colors", ["white", "gray.800"]);

  const { colorMode } = useColorMode();

  return (
    <Helmet>
      <meta
        name="theme-color"
        content={colorMode === "light" ? white : gray800}
      />
    </Helmet>
  );
}

export default ThemeColorUpdater;
