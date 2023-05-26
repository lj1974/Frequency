import PropTypes from "prop-types";
import styled from "styled-components";

import { dark } from "../../../styles/dark";

import { Ranking } from "../../../styles/ranking";
import Hear from "../../../components/img/hear";
import { fonts_size } from "../../../styles/fontSizes";

const Word = ({ word, number }) => {
  return (
    <Container>
      <div>
        <Hear />
        <PutWord>{word}</PutWord>
      </div>
      <Ranking> # {number}</Ranking>
    </Container>
  );
};

export default Word;

Word.propTypes = {
  word: PropTypes.string.isRequired,
  ranking: PropTypes.number.isRequired,
};

const Container = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  width: 17.25rem;
  height: 2rem;

  padding: 0 4px;

  border-bottom: 0.1212px solid grey;

  div {
    display: flex;
    align-items: center;
  }
`;

const PutWord = styled.div`
  position: relative;

  font-weight: 500;
  font-size: ${fonts_size.md};
  margin-left: 0.7rem;
  margin-right: 1rem;
  color: ${dark.texts};

  width: 90%;
`;
