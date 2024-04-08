import styled from "styled-components";

interface ITextAreaProps {
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

export const TextAreaStyles = styled.textarea<ITextAreaProps>`
  background: none;
  border: 1px solid ${(props) => (props.error ? "red" : "#776a9e")};
  border-radius: 8px;
  padding: 10px;
  width: 100%;
  height: 38px;
  outline: none;
  color: #fff;
  resize: none;

  &::placeholder {
    color: #776a9e;
    font-size: 0.875rem;
  }
`;

export const ErrorMessage = styled.span`
  font-size: 0.9rem;
  color: red;
`;
