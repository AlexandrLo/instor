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
    solid: (props) => {
      const { colorScheme: c } = props;

      if (c === "gray") {
        return {
          color: mode("white", "black")(props),
          bg: mode("black", "white")(props),
          _hover: {
            bg: mode("gray.700", "gray.100")(props),
          },
          _active: {
            bg: mode("gray.500", "gray.300")(props),
          },
        };
      }

      return {
        color: mode("white", "black")(props),
        bg: mode(`${c}.400`, `${c}.400`)(props),
        _hover: {
          bg: mode(`${c}.500`, `${c}.300`)(props),
        },
        _active: {
          bg: mode(`${c}.600`, `${c}.200`)(props),
        },
      };
    },
    alpha: (props) => {
      const { colorScheme: c, theme } = props;
      if (c === "gray") {
        return {
          color: mode("black", "white")(props),
          bg: mode("blackAlpha.100", "whiteAlpha.100")(props),
          _hover: {
            bg: mode("blackAlpha.300", "whiteAlpha.300")(props),
          },
          _active: {
            bg: mode("blackAlpha.500", "whiteAlpha.500")(props),
          },
        };
      }

      return {
        color: `${c}.400`,
        bg: transparentize(`${c}.400`, 0.25)(theme),
        _hover: {
          bg: transparentize(`${c}.400`, 0.4)(theme),
        },
        _active: {
          bg: transparentize(`${c}.400`, 0.55)(theme),
        },
      };
    },
    blur: (props) => {
      const { colorScheme: c, theme } = props;

      if (c === "gray") {
        return {
          color: "white",
          backdropFilter: "blur(0.5rem)",
          bg: "blackAlpha.400",
          _hover: {
            bg: "blackAlpha.500",
          },
          _active: {
            bg: "blackAlpha.600",
          },
        };
      }

      return {
        color: "white",
        backdropFilter: "blur(0.5rem)",
        bg: transparentize(`${c}.800`, 0.25)(theme),
        _hover: {
          bg: transparentize(`${c}.800`, 0.4)(theme),
        },
        _active: {
          bg: transparentize(`${c}.800`, 0.55)(theme),
        },
      };
    },
    ghost: (props) => {
      const { colorScheme: c } = props;
      return {
        color: "gray.400",
        bg: "transparent",
        _activeLink: {
          color: `${c}.400`,
        },
        _hover: {
          color: `${c}.400`,
          bg: "transparent",
        },
        _active: {
          opacity: 0.7,
          bg: "transparent",
        },
      };
    },
  },
  defaultProps: {
    size: "md",
    variant: "alpha",
    colorScheme: "gray",
  },
};

export default Button;
