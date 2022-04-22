const Link = {
  variants: {
    box: {
      transitionProperty: "common",
      transitionDuration: "fast",
      transitionTimingFunction: "ease-out",
      cursor: "pointer",
      textDecoration: "none",
      outline: "none",
      color: "inherit",
      _hover: {
        transform: "scale(0.99)",
        textDecoration: "none",
      },
      _focus: {
        boxShadow: "outline",
      },
    },
  },
};

export default Link;
