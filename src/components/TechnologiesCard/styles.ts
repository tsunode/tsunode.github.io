import styled from "styled-components";

const Item = styled.div`
  position: relative;
  background: linear-gradient(15deg, #ffffff 69%, #26969e);
  width: 180px;
  height: 180px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: #26969e;

  margin: 15px;
  border-radius: 5px;
  box-shadow: 10px 5px 10px 0px rgba(0, 0, 0, 0.4);
  transition: 0.5s;

  svg {
    width: 140px !important;
    height: 140px !important;
    z-index: 1000;
  }

  :hover {
    transform: scale(0.5);
  }

  :hover > div {
    opacity: 1;
    transform: scale(2);
  }
`;

const Description = styled.div`
  background: linear-gradient(82deg, #26969e 75%, #55bfc7);
  width: 180px;
  height: 180px;
  position: absolute;
  top: 0;

  opacity: 0;
  border-radius: 5px;
  padding: 0 5px;

  color: #fff;
  text-align: center;

  transform: scale(0.5);
  transition: all 0.2s ease-in-out;

  z-index: 1001;

  div {
    position: relative;

    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  svg {
    position: absolute;
    width: 180px !important;
    height: 180px !important;
    top: 0;
    color: rgba(0, 0, 0, 0.08);
    padding: 15px;
  }

  span {
    font-size: 1.4rem;
    font-weight: bold;
  }

  p {
    font-size: 1rem;
    font-weight: 600;
  }
`;

export { Item, Description };
