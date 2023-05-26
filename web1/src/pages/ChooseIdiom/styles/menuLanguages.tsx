import styled from "styled-components";

import { BtnGlass } from "../../../styles/buttons";
import { dark } from "../../../styles/dark";

export const LangWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 17px;
`;

export const BtnLang = styled(BtnGlass)`
  width: 13.2rem;
  height: 3.1rem;
  border-radius: 10px;
  opacity: 0.9;

  :focus,
  :hover {
    cursor: pointer;
    color: ${dark.lighthue};
  }
`;
