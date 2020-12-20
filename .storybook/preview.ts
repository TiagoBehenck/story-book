import { themes } from "@storybook/theming";
import { addDecorator } from "@storybook/react";
import centered from "@storybook/addon-centered/react";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  docs: {
    theme: themes.dark,
  },
};

addDecorator(centered);
