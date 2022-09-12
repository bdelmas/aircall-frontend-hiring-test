import { createSlice } from "@reduxjs/toolkit";

import { RootState } from "../../../app/app.store";

export interface SignInState {
  isSignedIn: boolean;
  status: "idle" | "loading" | "failed";
}

const initialState: SignInState = {
  isSignedIn: false,
  status: "idle",
};

export const signInSlice = createSlice({
  name: "signIn",
  initialState,
  reducers: {
    fetchSignInFullfilled: (state, action) => {
      state.status = "idle";
      state.isSignedIn = true;
    },
    fetchSignInPending: (state, action) => {
      state.status = "loading";
    },
    fetchSignInRejected: (state, action) => {
      state.status = "failed";
    },
  },
});

export const {
  fetchSignInFullfilled,
  fetchSignInPending,
  fetchSignInRejected,
} = signInSlice.actions;

export const selectIsSignedIn = (state: RootState) => state.signIn.isSignedIn;

export default signInSlice.reducer;
