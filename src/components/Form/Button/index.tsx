import React, { ButtonHTMLAttributes } from "react";
import { ButtonStyles } from "./styles";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  color: "primary" | "secondary";
}

const Button: React.FC<IProps> = ({ label, color, ...rest }) => {
  return (
    <ButtonStyles color={color} {...rest}>
      {label}
    </ButtonStyles>
  );
};

export default Button;
