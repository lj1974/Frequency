import styled from "styled-components";
import MulherSentada from "../../../assets/mulherSentada.svg";

const Img = () => {
  return <PutImg src={MulherSentada} />;
};

export default Img;

const PutImg = styled.img`
  position: relative;
  width: 12.7em;
  height: 15.2rem;
`;
