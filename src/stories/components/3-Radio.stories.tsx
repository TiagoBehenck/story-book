import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Radio, RadioProps } from "../../components/Radio";

export default {
  title: "UI DOC/Radio",
  component: Radio,
  argTypes: {
    color: { control: "color" },
  },
} as Meta;

const Template: Story<RadioProps> = (args) => <Radio {...args} />;

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
  label: "Radio checked",
};

export const Unchecked = Template.bind({});
Unchecked.args = {
  checked: false,
  label: "Radio checked",
};
