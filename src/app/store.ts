import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import {
  Action as LocalizeAction,
  localizeReducer,
  LocalizeState,
} from "react-localize-redux";
import playersReducer, { PlayersState } from "./playersStore";

type reducer = {
  players: PlayersState;
  localize: LocalizeState;
};

export const store = configureStore<reducer, LocalizeAction>({
  reducer: {
    players: playersReducer,
    localize: localizeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
