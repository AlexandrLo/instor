import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

import theme from "theme";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  chakra: {
    theme,
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
};
