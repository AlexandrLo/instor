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
        boxShadow: "outline",
        textDecoration: "none",
      },
      _active: {
        opacity: 0.85,
      },
      _focus: {
        boxShadow: "outline",
      },
    },
    "box-inset": {
      transitionProperty: "common",
      transitionDuration: "fast",
      transitionTimingFunction: "ease-out",
      cursor: "pointer",
      textDecoration: "none",
      outline: "none",
      color: "inherit",
      _hover: {
        boxShadow: "outline-inset",
        textDecoration: "none",
      },
      _active: {
        opacity: 0.85,
      },
      _focus: {
        boxShadow: "outline-inset",
      },
    },
  },
};

export default Link;
