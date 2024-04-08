import styled from "styled-components";

export const Container = styled.div`
  background-color: #18122b;
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  /* flex-direction: column; */
  gap: 1rem;

  .wrapper {
    display: flex;
    align-items: end;
    justify-content: center;
    position: relative;

    .mouse_animated {
      position: absolute;
      left: 0px;
      bottom: -8.6rem;
    }

    @media (max-width: 434px) {
      width: 90%;

      span {
        font-size: 1rem;
      }

      h1 {
        font-size: 4rem;
      }
    }
  }

  h1 {
    font-size: 10rem;
    color: #6c1348;
  }

  span {
    font-size: 1.2rem;
    color: #fff;
    text-align: center;
    display: block;
    margin-bottom: 1rem;
  }

  .container-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;

    div {
      width: 100%;
    }
  }
`;

export const ContainerNavbar = styled.div`
  display: flex;
  position: relative;

  margin-bottom: 2rem;
`;

export const Navbar = styled.nav`
  padding: 2rem;
  background-color: #241d39;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  gap: 1rem;

  img {
    width: 100px;
  }
`;
