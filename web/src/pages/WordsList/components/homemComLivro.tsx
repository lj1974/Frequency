import styled from "styled-components";
import HomemComLivro from "../../../assets/HomemComLivro.svg";

const Img = () => {
  return <PutImg src={HomemComLivro} />;
};

export default Img;

const PutImg = styled.img`
  position: relative;
  width: 16.2rem;
  height: 10.75rem;
`;
