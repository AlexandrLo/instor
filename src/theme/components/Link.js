const Link = {
  variants: {
    muted: {
      fontSize: "14px",
      color: "gray.400",
      cursor: "pointer",
      textDecoration: "none",
      outline: "none",
      _hover: {
        textDecoration: "underline",
      },
      _active: {
        opacity: 0.85,
      },
      _focus: {
        boxShadow: "outline",
      },
    },
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
