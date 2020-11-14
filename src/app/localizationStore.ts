import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { buildLocalizedStrings, IStrings } from "../localization/localization";

export interface LocalizationState {
  strings: IStrings;
  currentLanguage: string;
}

const initialState: LocalizationState = {
  strings: buildLocalizedStrings(),
  currentLanguage: "en",
};

export const localizationSlice = createSlice({
  name: "localization",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<string>) => {
      state.strings.setLanguage(action.payload);
    },
  },
});

export const { setLanguage } = localizationSlice.actions;

export default localizationSlice.reducer;
