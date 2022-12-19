import styled from "styled-components";

import { screen_sizes } from "../../styles/screen";

import { Info } from "../button/info";

import SelectLanguage from "./headerSelect";
import StartTutorial from "../../pages/Tutorial";
import Tittle from "./tittle";

const WholeHeader = () => {
  return (
    <Container>
      <SeparatorOne>
        <Tittle />
        <SeparatorTwo>
          <StartTutorial />
          <Info />
        </SeparatorTwo>
      </SeparatorOne>

      <SelectLanguage />
    </Container>
  );
};

export default WholeHeader;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  width: 100vw;
  height: auto !important;

  padding: 20px 4%;
  gap: 15px;

  position: fixed;
  right: 0;
  top: 0;

  @media screen and (min-width: ${screen_sizes.tab_pc}) {
    flex-direction: row;
  }
`;

const SeparatorOne = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  gap: 30px;

  @media screen and (min-width: ${screen_sizes.tab_pc}) {
    justify-content: flex-start;
    justify-content: space-between;
  }
`;

const SeparatorTwo = styled.div`
  display: flex;
  gap: 7px;

  @media screen and (min-width: ${screen_sizes.tab_pc}) {
    gap: 20px;
  }
`;
