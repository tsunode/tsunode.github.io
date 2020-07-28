import styled, { keyframes } from "styled-components";

import backgroundMobile from "../../assets/img/background-mobile.jpeg";
import background from "../../assets/img/background.jpeg";

const Container = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`;

const HomeSection = styled.section`
  height: 100vh;

  background-image: url(${backgroundMobile});
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  font-family: "Fira Code", monospace;
  color: #064d4d;

  @media (min-width: 480px) {
    background-image: url(${background});
  }

  > div {
    width: 100%;
    height: 100vh;

    background: rgba(255, 255, 255, 0.85);

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
`;
// dd
const translateXAnimation = keyframes`
  0% {
    background-color: transparent;
    transform: translateX(-500px);
  }
  95% {
    transform: translateX(20px);
  }
  100% {
    transform: translateX(0);
  }
`;

const opacityAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

    @media (min-width: 1024px) {
      flex-direction: row;

      span {
        font-size: 1.4rem;
      }
    }

  h1 {
    animation: ${translateXAnimation} 2s;
  }

  span {
    background-color: #064d4d;

    padding: 5px;
    margin-left: 10px;

    color: #ffffff;
    font-size: 1.2rem;
    font-style: italic;

    animation: ${opacityAnimation} 2s;
  }
`;

const Button = styled.button`
  min-width: 225px;
  background: none;

  display: flex;
  justify-content: space-between;
  align-items: center;
  

  padding: 10px 20px;
  border: 2px solid #064d4d;
  border-radius: 15px;

  color: #064d4d;
  font-size: 1.2rem;

  transition: 0.6ms;

  svg {
    transition: 0.2s ease-in;
  }

  &:hover {
    background-color: #064d4d;
    color: #ffffff;
  }

  &:hover svg{
    transform: rotate(90deg);
  }

`;

export { Container, HomeSection, Logo, Button };
