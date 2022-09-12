import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "app/app.store";
import { signInSlice } from "../sign-in/sign-in.slice";

export interface UserState {
  id?: number;
  username: string;
}

const initialState: UserState = {
  // id: 0,
  username: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      signInSlice.actions.fetchSignInFullfilled.type,
      (state, action: PayloadAction<{ id: number; username: string }>) => {
        state.id = action.payload.id;
        state.username = action.payload.username;
      }
    );
  },
});

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
