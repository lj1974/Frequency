import styled from "styled-components";

import { dark } from "../../styles/dark";

import { screen_sizes } from "../../styles/screen";

import { BtnGlass } from "../../styles/buttons";

const Footer = () => {
  return <Container>created by LJ</Container>;
};

export default Footer;

const Container = styled(BtnGlass)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9em;
  border-radius: 10px;

  color: ${dark.lighthue};
  opacity: 0.9;

  height: 40px;
  width: 9rem;

  position: absolute;
  bottom: 0;
  left: ${screen_sizes.margin_phone};

  @media screen and (min-width: ${screen_sizes.tab_pc}) {
    width: 45vw;
    left: ${screen_sizes.margin_pc};
    justify-content: flex-start;
    padding-left: 40px;
    border-radius: 15px 15px 0 0;
  }
`;
