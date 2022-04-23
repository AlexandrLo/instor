import { mode, transparentize } from "@chakra-ui/theme-tools";

const Button = {
  sizes: {
    sm: {
      h: "2rem",
      minW: "2rem",
      fontSize: "md",
      px: "0.25rem",
    },
    md: {
      h: "3rem",
      minW: "3rem",
      fontSize: "md",
      px: "0.75rem",
    },
  },
  variants: {
    blur: {
      color: "white",
      backdropFilter: "blur(0.5rem)",
      bg: "blackAlpha.400",
      _hover: {
        bg: "blackAlpha.500",
      },
      _active: {
        bg: "blackAlpha.600",
      },
    },
    primary: (props) => ({
      color: mode("white", "black")(props),
      bg: mode("black", "white")(props),
      _hover: {
        bg: mode("gray.700", "gray.100")(props),
      },
      _active: {
        bg: mode("gray.500", "gray.300")(props),
      },
    }),
    secondary: (props) => ({
      color: mode("black", "white")(props),
      bg: mode("blackAlpha.100", "whiteAlpha.100")(props),
      _hover: {
        bg: mode("blackAlpha.300", "whiteAlpha.300")(props),
      },
      _active: {
        bg: mode("blackAlpha.500", "whiteAlpha.500")(props),
      },
    }),
    brand: ({ theme }) => ({
      color: "orange.400",
      bg: transparentize("orange.400", 0.25)(theme),
      _hover: {
        bg: transparentize("orange.400", 0.4)(theme),
      },
      _active: {
        bg: transparentize("orange.400", 0.55)(theme),
      },
    }),
    "ghost-brand": (props) => ({
      color: "gray.400",
      _hover: {
        bg: mode("blackAlpha.50", "whiteAlpha.50")(props),
      },
      _active: {
        color: "orange.400",
        bg: mode("blackAlpha.100", "whiteAlpha.100")(props),
      },
    }),
    "ghost-instagram": (props) => ({
      color: "gray.400",
      _hover: {
        color: "instagram.500",
        bg: mode("gray.100", "whiteAlpha.50")(props),
      },
      _active: { bg: mode("gray.200", "whiteAlpha.100")(props) },
    }),
    "ghost-youtube": (props) => ({
      color: "gray.400",
      _hover: {
        color: "youtube.500",
        bg: mode("gray.100", "whiteAlpha.50")(props),
      },
      _active: { bg: mode("gray.200", "whiteAlpha.100")(props) },
    }),
    "ghost-pinterest": (props) => ({
      color: "gray.400",
      _hover: {
        color: "pinterest.600",
        bg: mode("gray.100", "whiteAlpha.50")(props),
      },
      _active: { bg: mode("gray.200", "whiteAlpha.100")(props) },
    }),
  },
};

export default Button;
