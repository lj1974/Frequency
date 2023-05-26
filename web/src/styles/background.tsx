import styled from "styled-components";
import Shapes from "../assets/shapes_dark.svg";
import { dark } from "../styles/dark";

export const BodyContainer = styled.div`
  background-image: url(${Shapes});
  width: 100vw;
  height: 100vh;
  position: absolute;
  background-color: ${dark.darkhue};
  overflow: hidden;

  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
`;
