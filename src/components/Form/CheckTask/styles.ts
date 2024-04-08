import styled from "styled-components";

interface IContainer {
  checked: boolean;
}

export const Container = styled.div<IContainer>`
  width: 100%;
  height: 44px;
  padding: 10px 15px;
  border-radius: 10px;
  background-color: #18122b;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  cursor: pointer;

  .check {
    width: 22px;
    height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => (props.checked ? "#6C1348" : "#241d39")};
    background-image: ${(props) => props.checked && "url('/check.svg')"};
    background-repeat: no-repeat;
    background-position: center center;
    border-radius: 8px;
  }

  span {
    color: #776a9e;
    font-size: 1rem;
    font-weight: 700;
    width: 100%;
  }
`;
