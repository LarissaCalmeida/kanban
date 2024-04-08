import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  max-width: 500px;
  width: 500px;
  padding: 2.5rem;
  background-color: #241d39;
  max-height: 90vh;
  border-radius: 8px;
  position: relative;

  overflow-y: scroll;

  @media (max-width: 545px) {
    width: 90%;
  }

  h1.title {
    font-size: 1.25rem;
    font-weight: 700;
    color: #fff;
    margin-bottom: 1rem;
  }
`;

export const CloseModal = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  position: absolute;
  right: 2.5rem;
  top: 2rem;
  cursor: pointer;
`;
