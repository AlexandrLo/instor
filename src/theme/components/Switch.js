import defaultTheme from "@chakra-ui/theme";
import { mode } from "@chakra-ui/theme-tools";

const Switch = {
  baseStyle: (props) => ({
    ...defaultTheme.components.Switch.baseStyle(props),
    track: {
      bg: "gray.400",
      _checked: {
        bg: "orange.400",
      },
    },
    thumb: {
      bg: mode("white", "gray.800")(props),
    },
  }),
};

export default Switch;
