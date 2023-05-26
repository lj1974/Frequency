import { useSelector } from "react-redux";
import styled from "styled-components";

import { GetLang } from "../../store/languages/LangSlice";

import { dark } from "../../styles/dark";
import { fonts_size } from "../../styles/fontSizes";
import { screen_sizes } from "../../styles/screen";

let isSelected = false;

const SelectLanguage = () => {
  const { onLanguage, sentence } = useSelector(GetLang);
  isSelected = onLanguage != null ? true : false;
  return (
    <Container>
      <h4>{onLanguage}</h4>
      <p>{sentence}</p>
    </Container>
  );
};

export default SelectLanguage;

const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  justify-content: ${() => (isSelected ? "space-between" : "center")};
  background-color: ${dark.lighthue};

  height: 47px;
  width: min(100%, 600px);
  border-radius: 15px;

  &::after {
    content: "";
    position: absolute;
    width: 2px;
    height: 40px;
    right: 50%;
    background-color: ${dark.darkhue};
    opacity: ${() => (isSelected ? 1 : 0)};
  }

  &:hover {
    cursor: pointer;
  }

  h4 {
    display: ${() => (isSelected ? "flex" : "none")};
    font-size: calc(8px + ${fonts_size.md});
    width: 50%;

    justify-content: center;
    align-self: center;
    text-align: center;
  }

  p {
    display: inline-block;
    justify-content: center;
    word-break: break-word;

    font-size: ${() =>
      isSelected ? "min(calc(8px + 2vw), 1em)" : "${fonts_size.sm}"};
    width: ${() => (isSelected ? "50%" : "100%")};

    text-align: center;
    padding: 2px 15px;
    width: ${() => (isSelected ? "50%" : "100%")};
  }

  @media screen and (max-width: 330px) {
    p {
      font-size: ${() => (isSelected ? "calc(6px + 2vw)" : "${fonts_size.sm}")};
    }
  }

  @media screen and (min-width: ${screen_sizes.tab_pc}) {
    height: 54px;
    border-radius: 20px;
  }
`;
