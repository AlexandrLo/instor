import { extendTheme } from "@chakra-ui/react";

import "@fontsource/poppins/latin.css";

import Button from "theme/components/Button";

const theme = extendTheme({
  config: {
    initialColorMode: "system",
    useSystemColorMode: false,
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  colors: {
    gray: {
      50: "#F2F2F2",
      100: "#DBDBDB",
      200: "#C4C4C4",
      300: "#ADADAD",
      400: "#969696",
      500: "#808080",
      600: "#666666",
      700: "#4D4D4D",
      800: "#333333",
      900: "#1A1A1A",
    },
    orange: {
      50: "#FCF2E9",
      100: "#F5DBC1",
      200: "#EFC59A",
      300: "#E9AE72",
      400: "#E3974A",
      500: "#DC8023",
      600: "#B0661C",
      700: "#844D15",
      800: "#58330E",
      900: "#2C1A07",
    },
    red: {
      50: "#FCE9E9",
      100: "#F5C1C1",
      200: "#EF9A9A",
      300: "#E97272",
      400: "#E34A4A",
      500: "#DC2323",
      600: "#B01C1C",
      700: "#841515",
      800: "#580E0E",
      900: "#2C0707",
    },
    yellow: {
      50: "#FFF9E5",
      100: "#FFEDB8",
      200: "#FFE28A",
      300: "#FFD65C",
      400: "#FFCB2E",
      500: "#FFBF00",
      600: "#CC9900",
      700: "#997300",
      800: "#664D00",
      900: "#332600",
    },
  },
  radii: {
    none: "0",
    sm: "0.25rem",
    base: "0.5rem",
    md: "0.5rem",
    lg: "0.1rem",
    xl: "1.5rem",
    "2xl": "2rem",
    "3xl": "3rem",
    full: "9999px",
  },
  components: {
    Button,
  },
});

export default theme;
