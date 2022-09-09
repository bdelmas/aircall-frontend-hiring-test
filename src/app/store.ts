import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import saga from "./sagas";

let sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {},
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
