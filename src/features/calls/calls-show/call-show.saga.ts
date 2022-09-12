import { PayloadAction } from "@reduxjs/toolkit";
import {
  all,
  call,
  fork,
  put,
  takeLatest,
  StrictEffect,
} from "redux-saga/effects";

import {
  callShowSlice,
  fetchCallShowFullfilled,
  fetchCallShowRejected,
} from "./call-show.slice";
import {
  fetchCallShowPayload,
  callShowAPI,
  callShowDTO,
} from "./call-show.api";
import { cleanCookies } from "universal-cookie/es6/utils";

export function* callShowSaga() {
  yield all([fork(watchfetchCallShowPending)]);
}

function* watchfetchCallShowPending() {
  yield takeLatest(
    callShowSlice.actions.fetchCallShowPending.type,
    fetchCallShow
  );
}

function* fetchCallShow(
  action: PayloadAction<fetchCallShowPayload>
): Generator<StrictEffect, void, callShowDTO> {
  try {
    let { data } = yield call(callShowAPI.fetchCallShow(action));
    yield put(fetchCallShowFullfilled({ node: data }));
  } catch (e) {
    cleanCookies();
    yield put(fetchCallShowRejected({}));
    window.location.href = "sign-in";
  }
}
