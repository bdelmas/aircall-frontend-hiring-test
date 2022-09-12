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
  putCallShowArchiveFullfilled,
  putCallShowArchiveRejected,
} from "./call-show.slice";
import {
  fetchCallShowPayload,
  callShowAPI,
  callShowDTO,
  putCallShowArchivePayload,
} from "./call-show.api";
import { cleanCookies } from "universal-cookie/es6/utils";

export function* callShowSaga() {
  yield all([
    fork(watchfetchCallShowPending),
    fork(watchPutCallShowArchivePending),
  ]);
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

function* watchPutCallShowArchivePending() {
  yield takeLatest(
    callShowSlice.actions.putCallShowArchivePending.type,
    putCallShowArchive
  );
}

function* putCallShowArchive(
  action: PayloadAction<putCallShowArchivePayload>
): Generator<StrictEffect, void, callShowDTO> {
  try {
    let { data } = yield call(callShowAPI.putCallShowArchive(action));
    yield put(putCallShowArchiveFullfilled(data));
  } catch (e) {
    cleanCookies();
    yield put(putCallShowArchiveRejected({}));
    window.location.href = "sign-in";
  }
}
