import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import signInReducer from "../features/users/sign-in/sign-in.slice";
import userReducer from "../features/users/user/user.slice";
import callListReducer from "../features/calls/calls-list/call-list.slice";
import callShowReducer from "../features/calls/calls-show/call-show.slice";

import saga from "./app.sagas";

let sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    signIn: signInReducer,
    user: userReducer,
    callList: callListReducer,
    callShow: callShowReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(saga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
