import styled from "styled-components";

interface IButton {
  color: "primary" | "secondary";
}

export const ButtonStyles = styled.button<IButton>`
  width: 100%;
  height: 38px;
  padding: 1rem;

  background-color: ${(props) =>
    props.color !== "primary" ? "#D9D9D9" : "#6C1348"};
  color: ${(props) => (props.color === "primary" ? "#D9D9D9" : "#6C1348")};

  font-size: 0.875rem;
  font-weight: 700;

  border-radius: 22px;
  border: none;
  outline: none;

  display: flex;
  align-items: center;
  justify-content: center;

  text-transform: capitalize;
  cursor: pointer;
`;
