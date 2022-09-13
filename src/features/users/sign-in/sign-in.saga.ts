import { PayloadAction } from "@reduxjs/toolkit";
import {
  all,
  call,
  fork,
  put,
  takeLatest,
  StrictEffect,
} from "redux-saga/effects";
import Cookies from "universal-cookie";

import {
  signInSlice,
  fetchSignInFullfilled,
  fetchSignInRejected,
} from "./sign-in.slice";
import { fetchSignInPayload, signInAPI, signInDTO } from "./sign-in.api";

export function* signInSaga() {
  yield all([fork(watchfetchSignInPending)]);
}

function* watchfetchSignInPending() {
  yield takeLatest(signInSlice.actions.fetchSignInPending.type, fetchSignIn);
}

function* fetchSignIn(
  action: PayloadAction<fetchSignInPayload>
): Generator<StrictEffect, void, signInDTO> {
  try {
    let { data } = yield call(signInAPI.fetchSignIn(action));

    const cookies = new Cookies();
    cookies.set("access_token", data.access_token, { path: "/" });
    cookies.set("refresh_token", data.refresh_token, { path: "/" });

    yield put(fetchSignInFullfilled(data.user));
  } catch (e) {
    yield put(fetchSignInRejected({}));
  }
}
