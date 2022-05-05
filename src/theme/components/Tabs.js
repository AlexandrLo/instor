import { transparentize } from "@chakra-ui/theme-tools";

export default {
  baseStyle: {
    tabpanel: {
      p: { base: "1rem", md: "1.5rem" },
    },
  },
  variants: {
    "soft-rounded": (props) => {
      const { colorScheme: c, theme } = props;
      return {
        tab: {
          whiteSpace: "nowrap",
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
