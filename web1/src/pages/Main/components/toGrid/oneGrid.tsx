import PropTypes from "prop-types";

const OneGrid = ({ word }) => {
  return <h4>{word}</h4>;
};

export default OneGrid;

OneGrid.PropTypes = {
  word: PropTypes.string.isRequired,
};
