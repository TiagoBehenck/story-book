import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Button, ButtonProps } from "../../components/Button";

export default {
  title: "UI DOC/Button",
  component: Button,
  argTypes: {
    color: { control: "color" },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "This is a button with text and icon",
  icon: "FaTwitter",
};

export const Secunday = Template.bind({});
Secunday.args = {
  children: "This is a button just with text",
};
