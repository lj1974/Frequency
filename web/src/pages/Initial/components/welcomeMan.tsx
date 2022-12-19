import styled from "styled-components";
import WelcomeMan from "../../../assets/welcomeMan.svg";

const Img = () => {
  return <PutImg src={WelcomeMan} />;
};

export default Img;

const PutImg = styled.img`
  position: relative;
  width: 10.9em;
  height: 12.9rem;
`;
