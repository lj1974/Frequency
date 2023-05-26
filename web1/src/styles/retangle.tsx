import styled from "styled-components";
import { dark } from "./dark";
import { fonts_size } from "./fontSizes";

export const retangle_size = {
  width: "10.3rem",
  height: "5.7rem",
};

export const RetangleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  

  min-width: ${retangle_size.width};
  min-height: ${retangle_size.height};
  padding: 2px 10px;
  border-radius: 10px;

  background-color: ${dark.darkhue};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  opacity: 100%;

  h4 {
    color: ${dark.texts};
    font-size: ${fonts_size.md};
    word-wrap: break-word;
    max-width: 15ch;
  }
`;
