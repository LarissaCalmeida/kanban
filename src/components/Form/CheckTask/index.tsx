import React, { HTMLAttributes } from "react";
import { Container } from "./styles";

interface IProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  checked: boolean;
}

const CheckTask: React.FC<IProps> = ({ label, checked, ...rest }) => {
  return (
    <Container checked={checked} {...rest}>
      <div className="check"></div>
      <span>{label}</span>
    </Container>
  );
};

export default CheckTask;
