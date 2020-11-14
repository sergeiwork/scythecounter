import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import playersReducer from "./playersStore";
import localizationReducer from "./localizationStore";

export const store = configureStore({
  reducer: {
    players: playersReducer,
    localization: localizationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
