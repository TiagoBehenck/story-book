import React, { InputHTMLAttributes } from "react";

import { Wrapper, Label, InputContent } from "./style";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type?: string;
}

export const Input: React.FC<InputProps> = ({ label, type = "text" }) => {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <InputContent type={type} />
    </Wrapper>
  );
};
