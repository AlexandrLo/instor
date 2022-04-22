import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

import "@fontsource/poppins/latin.css";

import Button from "theme/components/Button";
import Checkbox from "theme/components/Checkbox";
import Container from "theme/components/Container";
import Heading from "theme/components/Heading";
import Input from "theme/components/Input";
import Link from "theme/components/Link";
import Switch from "theme/components/Switch";
import Text from "theme/components/Text";
import colors from "theme/colors";

const theme = extendTheme({
  colors,
  components: {
    Button,
    Checkbox,
    Container,
    Heading,
    Input,
    Link,
    Switch,
    Text,
  },
  config: {
    initialColorMode: "system",
    useSystemColorMode: false,
  },
  styles: {
    global: (props) => ({
      body: {
        fontFamily: "body",
        color: mode("black", "white")(props),
        bg: mode("white", "gray.800")(props),
        transitionProperty: "background-color",
        transitionDuration: "normal",
        lineHeight: "base",
      },
      "*::placeholder": {
        color: mode("gray.400", "whiteAlpha.400")(props),
      },
      "*, *::before, &::after": {
        borderColor: mode("gray.200", "whiteAlpha.300")(props),
        WebkitTapHighlightColor: "transparent",
        wordWrap: "break-word",
      },
    }),
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  shadows: {
    outline: "0 0 0 3px rgba(226, 149, 71, 0.5)",
  },
  sizes: {
    container: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
    },
  },
  breakpoints: {
    xs: "23em", // 368px
    sm: "30em", // 480px
    md: "48em", // 768px
    lg: "62em", // 992px
    xl: "80em", // 1280px
    "2xl": "96em", // 1536px
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
});

export default theme;
