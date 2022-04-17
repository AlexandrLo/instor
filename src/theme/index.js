import { extendTheme } from "@chakra-ui/react";

import "@fontsource/poppins/latin.css";

const theme = extendTheme({
  config: {
    initialColorMode: "system",
    useSystemColorMode: false,
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
});

export default theme;
