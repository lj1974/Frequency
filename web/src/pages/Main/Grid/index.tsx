import PropTypes from "prop-types";
import styled from "styled-components";

import OneGrid from "../components/toGrid/oneGrid";
import { fonts_size } from "../../../styles/fontSizes";
import { dark } from "../../../styles/dark";

const wordSet = {
  words: [
    {
      id: 1,
      position: 1,
      word: "House",
    },
    {
      id: 2,
      position: 1,
      word: "House",
    },
    {
      id: 3,
      position: 1,
      word: "House",
    },
    {
      id: 4,
      position: 1,
      word: "House",
    },
  ],
};

const WordGrid = () => {
  const { words } = wordSet;

  return (
    <Container>
      {words.map((set) => (
        <GridSize key={set.id}>
          <OneGrid word={set.word} />
        </GridSize>
      ))}
    </Container>
  );
};

export default WordGrid;

WordGrid.propTypes = {
  column: PropTypes.number.isRequired,
  row: PropTypes.number.isRequired,
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
`;

const GridSize = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  min-width: 7rem;
  min-height: 5rem;
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
