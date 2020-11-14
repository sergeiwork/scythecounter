import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Player } from "../Player";

interface PlayersState {
  players: Player[];
}

const initialState: PlayersState = {
  players: [],
};

export const playersSlice = createSlice({
  name: "players",
  initialState,
  reducers: {
    addPlayer: (state, action: PayloadAction<Player>) => {
      state.players.push(action.payload);
    },
    updatePlayer: (state, action: PayloadAction<Player>) => {
      state.players[state.players.indexOf(action.payload)] = action.payload;
    },
    reset: (state) => {
      state.players = [];
    },
  },
});

export const { addPlayer, updatePlayer, reset } = playersSlice.actions;

export default playersSlice.reducer;
