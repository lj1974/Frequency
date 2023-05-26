import { configureStore } from "@reduxjs/toolkit";

import LangSlice from "./languages/LangSlice";
import TutorialSlice from "./tutorial/TutorialSlice";

export const store = configureStore({
  reducer: {
    language: LangSlice,
    tutorial: TutorialSlice,
  },
});
