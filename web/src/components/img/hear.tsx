import styled from "styled-components";

import { dark } from "../../styles/dark";
import Hearing from "../../assets/hearing.svg";

const Hear = () => {
  return <Img src={Hearing} alt="click here to listen the word" />;
};

export default Hear;

const Img = styled.img`
  height: min(calc(20px + 1vw), 26px);
  width: min(calc(17px + 1vw), 23px);
  background-color: ${dark.buttons};
`;
