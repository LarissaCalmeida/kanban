import styled from "styled-components";

interface INavBar {
  openMenu: boolean;
}

export const Container = styled.main`
  display: flex;
  min-height: 100vh;
`;

export const ContainerSidebar = styled.div`
  display: flex;
  position: relative;
  width: 300px;

  @media (max-width: 748px) {
    display: none;
  }
`;

export const Sidebar = styled.aside`
  width: 300px;
  padding: 3rem 2rem;
  background-color: #241d39;
  border-right: 1px solid #776a9e;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 748px) {
    display: none;
  }

  position: fixed;
  img {
    width: 60%;
  }

  & > div p {
    font-size: 16px;
    color: #eaeaea;
    margin-bottom: 2rem;
    margin-top: 2rem;
  }

  ul li div {
    width: 27px;
    height: 27px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  ul li:not(.active) div {
    background-color: #1c162f;
    border-radius: 6px;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  ul li {
    display: flex;
    gap: 1rem;
    align-items: center;
    color: #eaeaea;
    font-size: 16px;
    cursor: pointer;
  }

  ul li.active {
    background-color: #6c1348;
    position: relative;
    margin-left: -2rem;
    padding-left: 2rem;
    padding-top: 10px;
    padding-bottom: 10px;
    border-radius: 0 50px 50px 0;
  }

  .out {
    color: #eaeaea;
  }
`;

export const ContainerNavbar = styled.div`
  display: flex;
  position: relative;
  padding: 2rem;
  margin-bottom: 2rem;
`;

export const Navbar = styled.nav<INavBar>`
  padding: 2rem;
  background-color: #241d39;
  width: calc(100% - 300px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  gap: 1rem;

  .board {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    @media (max-width: 545px) {
      h2 {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        max-width: 200px;
      }
    }

    .arrow-menu-mobile {
      display: none;

      @media (max-width: 545px) {
        display: initial;
        cursor: pointer;
        img {
          width: 20px;
        }

        transform: ${(props) => props.openMenu && "rotate(180deg)"};
      }
    }

    img {
      display: none;
      @media (max-width: 748px) {
        display: block;
      }
    }
  }

  .menu-mobile {
    display: none;

    @media (max-width: 545px) {
      display: initial;
      position: absolute;
      width: 100%;
      background: red;
      left: 0;
      top: 6.6rem;
      padding: 2rem;
      height: calc(100vh - 6.6rem);
      background-color: #241d39;
      border-top: 1px solid #776a9e;
      left: -100vw;
      transition: all 0.2s ease-in-out;
      transform: ${(props) => props.openMenu && "translateX(100vw)"};

      ul li div {
        width: 27px;
        height: 27px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      ul li:not(.active) div {
        background-color: #1c162f;
        border-radius: 6px;
      }

      ul {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      ul li {
        display: flex;
        gap: 1rem;
        align-items: center;
        color: #eaeaea;
        font-size: 16px;
        cursor: pointer;
      }

      ul li.active {
        background-color: #6c1348;
        position: relative;
        margin-left: -2rem;
        padding-left: 2rem;
        padding-top: 10px;
        padding-bottom: 10px;
        border-radius: 0 50px 50px 0;
      }

      .out {
        color: #eaeaea;
        margin-top: 2rem;
        display: block;
      }
    }
  }

  @media (max-width: 748px) {
    width: 100%;

    h2 {
      font-size: 1.2rem;
    }
  }

  button {
    padding: 0.8rem 1.2rem;
    border: none;
    border-radius: 50px;
    background-color: #6c1348;
    font-size: 16px;
    color: #eaeaea;
    font-weight: bold;
    cursor: pointer;

    @media (max-width: 545px) {
      padding: 0.3rem 1.5rem;
      font-weight: 400;
    }
  }

  button.mobile {
    display: none;
  }

  @media (max-width: 545px) {
    button.mobile {
      display: initial;
      font-size: 1.5rem;
      /* padding: 0.5rem; */
    }

    button.desktop {
      display: none;
    }
  }
`;

export const Dashboard = styled.div`
  background-color: #18122b;
  width: calc(100% - 300px);
  overflow-x: auto;
  /* margin-top: 4rem; */

  @media (max-width: 748px) {
    width: 100%;
  }

  h2 {
    color: #fff;
  }

  .content {
    padding: 2rem;
    display: flex;
    gap: 1rem;
  }

  .column {
    display: flex;
    flex-direction: column;
    width: 282px;
  }

  .column .header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2rem;
  }

  .column .header .color {
    width: 18px;
    height: 18px;
    border-radius: 100%;
  }

  .column .header span {
    font-size: 12px;
    font-weight: 400;
    text-transform: uppercase;
    color: #eaeaea;
  }

  .column .containerTask {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    height: calc(100vh - 12rem);
    width: 282px;
  }

  .newColumn {
    background: #1c162f;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 338px;
    min-width: 338px;
    padding: 1rem;
    margin-top: 4.2rem;
    height: calc(100vh - 12rem);
    margin-right: 2rem;

    span {
      color: #776a9e;
      font-size: 1.25rem;
      font-weight: 700;
    }
  }
`;
