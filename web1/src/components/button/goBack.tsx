import { BtnSecundary } from "../../styles/buttons";
import PropTypes from "prop-types";

const GoBack = ({ label }) => {
  return <BtnSecundary> {label} </BtnSecundary>;
};

GoBack.propTypes = {
  label: PropTypes.string.isRequired,
};

export default GoBack;
