import React from "react";

import { Checkbox as CheckboxComponent } from "@chakra-ui/react";

export default {
  title: "Instor/Components/Checkbox",
  component: CheckboxComponent,
  args: {
    disabled: false,
    children: "Checkbox",
  },
};

export const Checkbox = (args) => <CheckboxComponent {...args} />;
