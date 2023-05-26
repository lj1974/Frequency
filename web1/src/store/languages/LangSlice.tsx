import { createSlice } from "@reduxjs/toolkit";
import { LangState } from "./LangState";

const setLangTittle = (id: number) => {
  const language = LangState.setLanguages.find((word) => word.id === id);
  return language.tittle;
};

export const LangSlice = createSlice({
  name: "SELECT_LANGUAGE",
  initialState: {
    id: null,
    onLanguage: null,
    isSelected: false,
    sentence: "click here to select a language!",
  },
  reducers: {
    toggleLanguage(state, { payload }) {
      return {
        ...state,
        id: payload,
        onLanguage: setLangTittle(payload),
        isSelected: true,
        sentence: "click here to select another language!",
      };
    },
    noLanguage(state) {
      return {
        ...state,
        id: null,
        isSelected: false,
        sentence: "click here to select a language!",
      };
    },
  },
});

export const { toggleLanguage, noLanguage } = LangSlice.actions;

export const GetLang = (state) => state.language;

export default LangSlice.reducer;
