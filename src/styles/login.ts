import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  position: relative;

  @media (max-width: 1024px) {
    align-items: center;
    justify-content: center;
  }

  .background {
    width: 50%;
    height: 100%;

    display: flex;
    flex-direction: column;
    padding-left: 4rem;
    justify-content: center;

    background-image: url("/background_1.png");
    background-size: cover;
    background-position: bottom center;
    background-repeat: no-repeat;

    @media (max-width: 1024px) {
      width: 100%;
    }
  }

  .background .text {
    @media (max-width: 1024px) {
      display: none;
    }
  }

  .background .text p {
    font-size: 24px;
    color: #fff;
    margin-top: 1.5rem;
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;

  @media (max-width: 1024px) {
    position: absolute;
    margin: auto;
    background-color: #fff;
    width: auto;
    height: auto;
    padding: 6rem 4rem;
    border-radius: 8px;
  }

  @media (max-width: 500px) {
    width: 90%;
    padding: 5rem 2rem;
  }

  h1 {
    font-size: 2.5rem;
    font-weight: bold;
    color: #18122b;
    margin-bottom: 1.5rem;

    @media (max-width: 500px) {
      font-size: 2rem;
    }
  }

  .formInput {
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;

    @media (max-width: 1024px) {
      width: 100%;
    }
  }

  .formInput:not(:first-child) {
    margin-top: 1rem;
  }

  form {
    @media (max-width: 1024px) {
      width: 100%;
    }
  }

  .formInput label {
    font-size: 1rem;
    color: #000;
    margin-bottom: 1rem;

    @media (max-width: 500px) {
      font-size: 0.9rem;
    }
  }

  .formInput input {
    width: 344px;
    height: 40px;
    border: none;
    background-color: #eaeaea;
    border-radius: 8px;
    padding: 0 10px;

    @media (max-width: 1024px) {
      width: 100%;
    }
  }

  .forgotPassword {
    font-size: 0.875rem;
    color: #4e436d;
    margin-bottom: 2rem;
    margin-top: 1rem;
    display: block;
  }

  button {
    width: 100%;
    height: 40px;
    font-size: 0.875rem;
    font-weight: bold;
    color: #fff;
    border-radius: 8px;
    background-color: #31275f;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    text-transform: uppercase;
  }

  button:hover {
    background-color: #18122b;
  }
`;

export const SignUpText = styled.span`
  margin-top: 2rem;
  font-size: 0.875rem;
  font-weight: bold;
  color: #000;

  .signUp {
    color: #31275f;
  }
`;
