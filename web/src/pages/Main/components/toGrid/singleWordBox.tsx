import styled from "styled-components";
import PropTypes from "prop-types";

import { Ranking } from "../../../../styles/ranking";
import Hear from "../../../../components/img/hear";

import { RetangleContainer } from "../../../../styles/retangle";

const SingleWordBox = ({ word, number }) => {
  return (
    <Container>
      <h4>{word}</h4>
      <p>
        <Ranking> #{number}</Ranking>
        <Hear />
      </p>
    </Container>
  );
};

export default SingleWordBox;

SingleWordBox.propTypes = {
  word: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
};

const Container = styled(RetangleContainer)`
  position: absolute;
  justify-content: space-between;
  
  h4 {
    margin-right: 1rem;
    margin-left: 1rem;
  }
  p {
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    gap: 0.5em;

    height: 100%;
    margin-right: 10px;
  }
`;
