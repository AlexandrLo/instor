import React from "react";

import PriceComponent from "components/Price";

export default {
  title: "Instor/Components/Price",
  component: PriceComponent,
  argTypes: {
    size: {
      options: ["md", "lg"],
      control: { type: "select" },
    },
  },
  args: {
    price: 199,
    discount: 189,
    size: "md",
  },
};

export const Price = (args) => <PriceComponent {...args} />;
