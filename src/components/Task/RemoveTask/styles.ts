import styled from "styled-components";

export const Container = styled.div`
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  h2 {
    font-size: 1rem;
    color: #fff;
    font-weight: bold;
    text-align: center;
    margin-bottom: 2rem;
  }

  .buttons {
    display: flex;
    gap: 1rem;

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
  /* margin-bottom: calc((38px - 1rem) / 2); */
  /* padding: 1rem; */
`;
