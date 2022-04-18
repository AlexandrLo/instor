import defaultTheme from "@chakra-ui/theme";
import { mode, transparentize } from "@chakra-ui/theme-tools";

const Input = {
  variants: {
    brand: (props) => ({
      ...defaultTheme.components.Input.variants.outline(props),
      field: {
        ...defaultTheme.components.Input.variants.outline(props).field,
        border: "2px solid",
        borderColor: mode("blackAlpha.50", "whiteAlpha.50")(props),
        _hover: {
          borderColor: transparentize("orange.400", 0.4)(props.theme),
        },
        _focus: {
          zIndex: 1,
          borderColor: "orange.400",
        },
      },
    }),
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
    },
  },
};

export default Input;
