import styled from "styled-components";

export const Container = styled.div`
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    button {
      margin-top: 1.5rem;
    }
  }

  .container-subtask {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    width: 100%;

    li {
      color: #776a9e;
      font-size: 0.8rem;
      font-weight: 700;
      width: 100%;
    }
  }

  h2.label {
    font-size: 1rem;
    font-weight: 700;
    color: #fff;
    /* margin-bottom: 1rem;; */
  }
`;

export const BtnRemove = styled.span`
  color: #776a9e;
  font-size: 1rem;
  content: "x";
  cursor: pointer;
  padding: 10px;
  /* margin-bottom: calc((38px - 1rem) / 2); */
  /* padding: 1rem; */
`;
