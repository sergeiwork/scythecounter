import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Player } from "../Player";

export interface PlayersState {
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
      var foundPlayer = state.players.find(player => player.faction === action.payload.faction);
      if (foundPlayer)
        state.players[state.players.indexOf(foundPlayer)] = action.payload;
      else
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
