import styled from "styled-components";

export const Container = styled.div`
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    button {
      /* margin-top: 1.5rem; */
    }
  }

  .containerSubstasks {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
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
  }

  .buttons {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;

    @media (max-width: 545px) {
      flex-direction: column-reverse;
      gap: 0.5rem;
    }
  }
`;

export const BtnRemove = styled.span`
  color: #776a9e;
  font-size: 1rem;
  content: "x";
  cursor: pointer;
  padding: 10px;
`;
