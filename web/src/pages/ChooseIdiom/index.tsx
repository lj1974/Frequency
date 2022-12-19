import { useDispatch } from "react-redux";

import { toggleLanguage } from "../../store/languages/LangSlice";

import { LangState } from "../../store/languages/LangState";

import { BtnLang, LangWrapper } from "./styles/menuLanguages";

const Index = () => {
  const { setLanguages } = LangState;

  const dispatch = useDispatch();

  const handleClick = (id: number) => {
    dispatch(toggleLanguage(id));
  };

  return (
    <LangWrapper>
      {setLanguages.map((lang) => (
        <BtnLang key={lang.id} onClick={() => handleClick(lang.id)}>
          {lang.tittle}
        </BtnLang>
      ))}
    </LangWrapper>
  );
};

export default Index;
