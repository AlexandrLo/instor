import React from "react";

import { Switch as SwitchComponent } from "@chakra-ui/react";

export default {
  title: "Instor/Components/Switch",
  component: SwitchComponent,
  args: {
    disabled: false,
  },
};

export const Switch = (args) => <SwitchComponent {...args} />;
