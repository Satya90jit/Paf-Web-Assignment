//! languageSlice.ts this use of redux toolkit

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LanguageType } from "@/types";
import { getFromLocalStorage, saveToLocalStorage } from "@/utils";

interface LanguageState {
  selectedLanguage: LanguageType;
}

const initialState: LanguageState = {
  selectedLanguage:
    (getFromLocalStorage("currentLanguage") as LanguageType) || "hindi",
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    changeLanguage: (state, action: PayloadAction<LanguageType>) => {
      state.selectedLanguage = action.payload;
      saveToLocalStorage("currentLanguage", action.payload);
    },
  },
});

export const { changeLanguage } = languageSlice.actions;
export default languageSlice.reducer;
