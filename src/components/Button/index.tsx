import React from "react";
import * as FontAwesome from "react-icons/fa";
import { Container } from "./styles";

export interface ButtonProps {
  color: string;
  icon?: string;
  children?: string;
  large?: boolean;
  secondary?: boolean;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  color = "#7159c1",
  icon,
  children,
  large,
  secondary,
  onClick,
  ...rest
}) => {
  const Icon = FontAwesome[icon];

  return (
    <Container
      color={color}
      secondary={secondary}
      onClick={onClick}
      large={large}
      {...rest}
    >
      {children && <span>{children}</span>}
      {icon && <Icon size={18} />}
    </Container>
  );
};
