import styled from "styled-components";

export const TaskStyle = styled.div`
  width: 100%;
  padding: 2rem 1rem;
  background-color: #241d39;
  border-radius: 8px;
  cursor: pointer;

  p {
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    margin-bottom: 1rem;
  }

  span {
    font-size: 16px;
    /* font-weight: bold; */
    color: #776a9e;
    margin-bottom: 1rem;
  }

  &.is-dragging {
    scale: 1.05 !important;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.25);
    /* background: rgb(50, 50, 50); */
    filter: brightness(0.8);
    color: white;
  }
`;

export const RemoveTask = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  position: absolute;
  right: 2.5rem;
  top: 2rem;
  cursor: pointer;
`;
