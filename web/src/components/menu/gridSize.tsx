import styled from "styled-components";

import { dark } from "../../styles/dark";

import umGrid from "../../assets/umGrid.svg";
import quatroGrid from "../../assets/quatroGrid.svg";
import oitoGrid from "../../assets/oitoGrid.svg";

const GridSize = () => {
  return (
    <BtnSizeOrder>
      <picture>
        <source media="(max-width: 743px)" srcSet={umGrid} />
        <source media="(min-width: 744px)" srcSet={quatroGrid} />
        <img src={quatroGrid} alt="less grids" />
      </picture>

      <picture>
        <source media="(max-width: 743px)" srcSet={quatroGrid} />
        <source media="(min-width: 744px)" srcSet={oitoGrid} />
        <img src={oitoGrid} alt="less grids" />
      </picture>
    </BtnSizeOrder>
  );
};

export default GridSize;

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

  picture {
    position: relative;
    width: 17px;
    height: 17px;
    margin: 0 18px;
  }

  picture source {
    width: 17px;
    height: 17px;
  }

  picture img {
    width: 17px;
    height: 17px;
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
