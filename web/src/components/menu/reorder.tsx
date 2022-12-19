import styled from "styled-components";

import ArrowDown from "../../assets/ArrowDown.svg";
import ArrowUp from "../../assets/ArrowUp.svg";
import { dark } from "../../styles/dark";

const Reorder = () => {
  return (
    <BtnSizeOrder>
      <img src={ArrowUp} alt="up" />
      <img src={ArrowDown} alt="down" />
    </BtnSizeOrder>
  );
};

export default Reorder;

const BtnSizeOrder = styled.button`
  all: unset;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  background-color: ${dark.lighthue};
  color: ${dark.darkhue};

  width: 6.4rem;
  height: 1.9rem;
  border-radius: 10px;
  position: relative;

  img {
    width: 17px;
    height: 17px;
    margin: 0 18px;
  }

  &::after {
    content: "";
    position: absolute;
    width: 1px;
    height: 17px;
    right: 50%;
    background-color: ${dark.darkhue};
  }
`;
