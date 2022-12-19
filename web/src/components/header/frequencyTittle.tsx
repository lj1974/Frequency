import styled from "styled-components";

import { dark } from "../../styles/dark";

import { screen_sizes } from "../../styles/screen";

const FrequencyTittle = () => {
  return (
    <Tittle>
      Freque<span>n</span>
      <span>c</span>y.
    </Tittle>
  );
};

export default FrequencyTittle;

const Tittle = styled.div`
  font-size: min(2em, 2.4em);
  color: ${dark.lighthue};
  font-weight: 600;

  span:first-child {
    color: ${dark.greenhue};
  }

  span {
    color: ${dark.buttons};
  }

  @media screen and (min-width: ${screen_sizes.tab_pc}) {
    font-size: 3.8em;
  }
`;
