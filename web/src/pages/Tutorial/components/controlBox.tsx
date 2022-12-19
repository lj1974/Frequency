import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";

import { BtnGlass, BtnSecundary } from "../../../styles/buttons";
import { dark } from "../../../styles/dark";
import { fonts_size } from "../../../styles/fontSizes";
import { screen_sizes } from "../../../styles/screen";

import {
  toggleTutorial,
  GetTutorial,
} from "../../../store/tutorial/TutorialSlice";

import { tutorial_length } from "../../../store/tutorial/TutorialState";

let count = 0;

const ControlBox = () => {
  const { tittle, text } = useSelector(GetTutorial);

  const dispatch = useDispatch();

  const handleClick = (state: boolean) => {
    count = state == true ? (count += 1) : (count -= 1);

    if (count <= -1) count = 0;
    else if (count >= tutorial_length) count = tutorial_length - 1;

    dispatch(toggleTutorial(count));
  };

  return (
    <Container>
      <h3>{tittle}</h3>
      <p>{text}</p>
      <span>
        <Return onClick={() => handleClick(false)}>Return </Return>
        <Continue onClick={() => handleClick(true)}>Next</Continue>
      </span>
    </Container>
  );
};

export default ControlBox;

const Container = styled(BtnGlass)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 2rem 1.7rem;

  width: 12rem;
  height: 100%;

  gap: 20px;

  background-color: ${dark.darkhue};
  border-radius: 10px;

  h3 {
    font-size: calc(${fonts_size.md} - 2px);
  }

  p {
    color: ${dark.texts};
    font-size: calc(${fonts_size.sm});
    text-align: center;
  }

  span {
    display: flex;
    width: 85%;
    gap: 10px;
    justify-content: space-between;
  }

  @media screen and (min-width: ${screen_sizes.tab_pc}) {
    width: 17rem;
    height: 100%;
  }
`;

const BtnStyle = styled(BtnSecundary)`
  font-size: calc(${fonts_size.sm} - 1px);

  width: 100px;
  height: clamp(30px, 40px, 80px);
`;

const Return = styled(BtnStyle)`
  outline: 1px solid ${dark.greenhue};
  background: transparent;
  color: ${dark.greenhue};
`;

const Continue = styled(BtnStyle)``;
