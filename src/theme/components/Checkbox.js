import defaultTheme from "@chakra-ui/theme";
import { transparentize } from "@chakra-ui/theme-tools";

const Checkbox = {
  baseStyle: (props) => ({
    ...defaultTheme.components.Checkbox.baseStyle(props),
    control: {
      _checked: {
        bg: transparentize("orange.400", 0.25)(props.theme),
        borderColor: "transparent",
        color: "orange.400",

        _hover: {
          bg: transparentize("orange.400", 0.4)(props.theme),
          borderColor: "transparent",
        },
      },
    },
  }),
};

export default Checkbox;
