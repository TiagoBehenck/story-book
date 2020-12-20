import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Input, InputProps } from "../../components/Input";

export default {
  title: "UI DOC/Input",
  component: Input,
  argTypes: {
    color: { control: "color" },
  },
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  icon: "MdLock",
  label: "Senha",
  name: "password",
};
