import { createSlice } from "@reduxjs/toolkit";
import { TutorialAbas } from "./TutorialState";

const { setTutorialAbas } = TutorialAbas;

export const TutorialSlice = createSlice({
  name: "CHANGE_TUTORIAL",
  initialState: {
    id: 0,
    isActive: true,
    tittle: setTutorialAbas[0].tittle,
    text: setTutorialAbas[0].text,
  },
  reducers: {
    toggleTutorial(state, { payload }) {
      return {
        ...state,
        id: payload,
        tittle: setTutorialAbas[payload].tittle,
        text: setTutorialAbas[payload].text,
      };
    },
    noTutorial(state) {
      return {
        ...state,
        isActive: false,
      };
    },
  },
});

export const { toggleTutorial, noTutorial } = TutorialSlice.actions;

export const GetTutorial = (state) => state.tutorial;

export default TutorialSlice.reducer;
