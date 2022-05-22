import { mode } from "@chakra-ui/theme-tools";

export default {
  baseStyle: (props) => {
    const { scrollBehavior } = props;
    return {
      dialog: {
        borderRadius: "1.5rem",
        bg: mode("white", "gray.800")(props),
        color: "inherit",
        my: "3.75rem",
        zIndex: "modal",
        maxH: scrollBehavior === "inside" ? "calc(100% - 7.5rem)" : undefined,
        boxShadow: mode("lg", "dark-lg")(props),
      },
      body: {
        p: "1rem",
        flex: 1,
        overflow: scrollBehavior === "inside" ? "auto" : undefined,
      },
      footer: {
        p: "1rem",
      },
    };
  },
};
