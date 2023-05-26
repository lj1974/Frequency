import styled from "styled-components";

import { dark } from "../styles/dark";

export const BtnPrimary = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  background-color: ${dark.buttons};

  width: calc(30px + 2vw);
  height: calc(30px + 2vw);

  img {
    width: calc(24px + 2vw);
  }

  :hover,
  :focus {
    cursor: pointer !important;
  }
`;

export const BtnSecundary = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${dark.buttons};
  color: ${dark.lighthue};
  border-radius: 10px;

  width: 13rem;
  height: 2rem;

  :hover,
  :focus {
    cursor: pointer !important;
  }
`;

export const BtnGlass = styled.button`
  all: unset;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${dark.glasshue};
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  color: ${dark.buttons};
`;
