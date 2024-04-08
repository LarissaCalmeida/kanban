import React, { SelectHTMLAttributes } from "react";
import { Container, ErrorMessage, SelectStyle } from "./styles";
import { UseFormRegister } from "react-hook-form";

interface IOptions {
  name: string;
  label: string;
}

interface IProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  errorMessage?: string;
  options: Array<IOptions>;
  register: UseFormRegister<any>;
}

const Select: React.FC<IProps> = ({
  name,
  label,
  errorMessage,
  options,
  register,
  ...rest
}) => {
  return (
    <Container>
      <label htmlFor={name}>{label}</label>

      <SelectStyle
        {...register(name)}
        onChange={(e) => console.log(e)}
        {...rest}
        error={!!errorMessage}
      >
        {options.map((value, index) => {
          return (
            <option key={index} value={value.label}>
              {value.name}
            </option>
          );
        })}
      </SelectStyle>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Container>
  );
};

export default Select;
