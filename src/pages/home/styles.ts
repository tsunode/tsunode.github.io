import styled, { keyframes } from "styled-components";

import backgroundMobile from "../../assets/img/background-mobile.jpeg";
import background from "../../assets/img/background.jpeg";

const Container = styled.div`
  min-height: 110vh;

  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`;

const Header = styled.header`
  background: #39c9d4;

  position: sticky;
  top: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 10px 15px;

  z-index: 1001;
`;

const Title = styled.h3`
  color: #000;
`;

const Bars = styled.div`
  input {
    display: none;
  }

  input:checked + label div:nth-child(2) {
    transform: translateX(30px);
    opacity: 0;
  }

  input:checked + label div:nth-child(1) {
    transform: rotate(-45deg) translateY(22px);
  }

  input:checked + label div:nth-child(3) {
    transform: rotate(45deg) translateY(-22px);
  }

  input:checked + label {
    transform: translateX(-20px);
  }

  label {
    height: 35px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    cursor: pointer;
    transition: 0.6s;
  }

  label div {
    background: #000;
    width: 40px;
    height: 4px;

    border-radius: 30px;

    transition: 0.6s;
  }
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
  color: #39c9d4;

  @media (min-width: 480px) {
    background-image: url(${background});
  }

  > div {
    width: 100%;
    height: 100vh;

    background: rgba(0, 0, 0, 0.85);

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
`;

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
    animation: ${opacityAnimation} 2s;
  }

  span {
    background-color: #39c9d4;

    padding: 5px;
    margin-left: 10px;

    color: #000;
    font-size: 1.2rem;
    font-style: italic;

    animation: ${translateXAnimation} 2s;
  }
`;

const Button = styled.button`
  min-width: 225px;
  background: none;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 10px 20px;
  border: 2px solid #39c9d4;
  border-radius: 15px;

  color: #39c9d4;
  font-size: 1.2rem;

  transition: 0.6ms;

  svg {
    transition: 0.2s ease-in;
  }

  &:hover {
    background-color: #39c9d4;
    color: #000;
  }

  &:focus {
    outline: none;
  }

  &:hover svg {
    transform: rotate(90deg);
  }
`;

const Profile = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-right: 15px;
  padding-left: 15px;
  margin: 0 auto;

  @media (min-width: 1024px) {
    flex-direction: row;
    max-width: 1080px;
  }
`;

const PolaroidImage = styled.div`
  background-color: #ffffff;

  color: #000;
  font-size: 0.8rem;
  font-weight: bold;
  text-align: center;

  margin-top: 25px;
  padding: 10px 10px 25px;
  border-bottom-left-radius: 60px 5px;
  box-shadow: -15px 10px 15px rgba(0, 0, 0, 0.4);
  transform: rotate(-5deg);

  img {
    max-width: 275px;
    max-height: 275px;
  }

  ul {
    list-style-type: none;
  }

  li {
    margin-top: 5px;
  }
`;

const ProfileDescription = styled.div`
  background-color: var(--primary);

  border: 3px solid #fff;
  margin: auto;
  padding: 15px 0;

  p {
    background-color: var(--primary);
    max-width: 700px;

    margin: 0 -5px 0 -5px;
    padding: 10px;

    text-align: center;
    font-size: 1.8rem;
  }
`;

export {
  Container,
  HomeSection,
  Logo,
  Button,
  Profile,
  PolaroidImage,
  ProfileDescription,
  Title,
  Bars,
  Header,
};
