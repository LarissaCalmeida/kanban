import React, { InputHTMLAttributes } from "react";
import { Container, ErrorMessage, InputStyle } from "./styles";
import { UseFormRegister } from "react-hook-form";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  errorMessage?: string;
  register: UseFormRegister<any>;
}

const Input: React.FC<IProps> = ({
  name,
  label,
  errorMessage,
  register,
  ...rest
}) => {
  return (
    <Container>
      <label htmlFor={name}>{label}</label>

      <InputStyle {...rest} {...register(name)} error={!!errorMessage} />
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Container>
  );
};

export default Input;
