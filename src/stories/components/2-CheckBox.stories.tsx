import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { CheckBox, CheckBoxProps } from "../../components/CheckBox";

export default {
  title: "UI DOC/CheckBox",
  component: CheckBox,
  argTypes: {
    color: { control: "color" },
  },
} as Meta;

const Template: Story<CheckBoxProps> = (args) => <CheckBox {...args} />;

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
  label: "Checked",
  name: "checked",
};

export const Unchecked = Template.bind({});
Unchecked.args = {
  checked: false,
  label: "Checked",
  name: "checked",
};
