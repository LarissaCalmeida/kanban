import styled from "styled-components";

interface IInputProps {
  error: boolean;
}

export const Container = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;

  label {
    color: #fff;
    font-size: 1rem;
    font-weight: 700;
  }
`;

export const InputStyle = styled.input<IInputProps>`
  background: none;
  border: 1px solid ${(props) => (props.error ? "red" : "#776a9e")};
  border-radius: 8px;
  padding: 10px;
  width: 100%;
  height: 38px;
  outline: none;
  color: #fff;

  &::placeholder {
    color: #776a9e;
    font-size: 0.875rem;
  }
`;

export const ErrorMessage = styled.span`
  font-size: 0.7rem;
  color: red;
  margin-top: -0.5rem;
`;
