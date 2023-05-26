import styled from "styled-components";

import { dark } from "../../styles/dark";

import { screen_sizes } from "../../styles/screen";

const Tittle = () => {
  return (
    <PutTittle>
      Freque<span>n</span>
      <span>c</span>y.
    </PutTittle>
  );
};

export default Tittle;

const PutTittle = styled.div`
  font-size: min(2em, 2.4em);
  color: ${dark.lighthue};
  font-weight: 400;

  span:first-child {
    color: ${dark.greenhue};
  }

  span {
    color: ${dark.buttons};
  }

  @media screen and (min-width: ${screen_sizes.tab_pc}) {
    font-size: 3.5em;
  }
`;
