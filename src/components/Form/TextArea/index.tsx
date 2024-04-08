import React, { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { Container, ErrorMessage, TextAreaStyles } from "./styles";
import { UseFormRegister } from "react-hook-form";

interface IProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
  errorMessage?: string;
  register: UseFormRegister<any>;
}

const TextArea: React.FC<IProps> = ({
  register,
  name,
  label,
  errorMessage,
  ...rest
}) => {
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <TextAreaStyles {...rest} {...register(name)} error={!!errorMessage} />
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Container>
  );
};

export default TextArea;
