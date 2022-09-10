import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState, AppThunk } from "app/app.store";
import { signInSlice } from "../sign-in/sign-in.slice";
// import signInAPI from "./sign-in.api";

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

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.user.value)`
export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
