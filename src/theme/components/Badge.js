import { mode } from "@chakra-ui/theme-tools";

export default {
  baseStyle: {
    px: "0.5rem",
    py: "0.125rem",
    textTransform: "uppercase",
    fontSize: "xs",
    borderRadius: "full",
    fontWeight: "bold",
  },
  variants: {
    solid: (props) => {
      const { colorScheme: c } = props;
      return {
        bg: `${c}.400`,
        color: mode("white", "gray.800")(props),
      };
    },
  },
};
