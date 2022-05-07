import { mode, transparentize } from "@chakra-ui/theme-tools";

const Input = {
  variants: {
    outline: (props) => {
      const { colorScheme: c, theme } = props;
      return {
        field: {
          border: "2px solid",
          borderColor: mode("blackAlpha.300", "whiteAlpha.300")(props),
          bg: "inherit",
          _placeholder: {
            color: mode("blackAlpha.500", "whiteAlpha.500")(props),
          },
          _hover: {
            borderColor: transparentize(`${c}.400`, 0.4)(theme),
          },
          _readOnly: {
            boxShadow: "none !important",
            userSelect: "all",
          },
          _disabled: {
            opacity: 0.4,
            cursor: "not-allowed",
          },
          _invalid: {
            borderColor: "red.400",
            boxShadow: "none",
          },
          _focus: {
            zIndex: 1,
            borderColor: `${c}.400`,
            boxShadow: "none",
          },
        },
        addon: {
          border: "2px solid",
          borderColor: mode("blackAlpha.300", "whiteAlpha.300")(props),
          bg: "inherit",
        },
      };
    },
  },
  sizes: {
    sm: {
      field: {
        fontSize: "md",
        px: "1rem",
        h: "2rem",
        borderRadius: "md",
      },
    },
    md: {
      field: {
        fontSize: "md",
        px: "1.5rem",
        h: "3rem",
        borderRadius: "md",
      },
      addon: {
        h: "3rem",
        px: "0.5rem",
      },
    },
  },
  defaultProps: {
    size: "md",
    variant: "outline",
    colorScheme: "orange",
  },
};

export default Input;
