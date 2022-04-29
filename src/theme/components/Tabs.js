import { transparentize } from "@chakra-ui/theme-tools";

export default {
  variants: {
    "soft-rounded": (props) => {
      const { colorScheme: c, theme } = props;
      return {
        tab: {
          borderRadius: "full",
          fontWeight: "semibold",
          color: "gray.400",
          _selected: {
            color: `${c}.400`,
            bg: transparentize(`${c}.400`, 0.25)(theme),
          },
          _hover: {
            color: `${c}.400`,
          },
          _active: {
            opacity: 0.7,
          },
        },
      };
    },
  },
  defaultProps: {
    size: "md",
    variant: "soft-rounded",
    colorScheme: "orange",
  },
};
