import { PayloadAction } from "@reduxjs/toolkit";
import {
  all,
  call,
  fork,
  put,
  takeLatest,
  StrictEffect,
} from "redux-saga/effects";

import { callListSlice, fetchCallListFullfilled } from "./call-list.slice";
import {
  fetchCallListPayload,
  callListAPI,
  callListDTO,
} from "./call-list.api";

export function* callListSaga() {
  yield all([fork(watchfetchCallListPending)]);
}

function* watchfetchCallListPending() {
  yield takeLatest(
    callListSlice.actions.fetchCallListPending.type,
    fetchCallList
  );
}

function* fetchCallList(
  action: PayloadAction<fetchCallListPayload>
): Generator<StrictEffect, void, callListDTO> {
  try {
    let { data } = yield call(callListAPI.fetchCallList(action));
    console.log(data);
    yield put(fetchCallListFullfilled(data));
  } catch (e) {
    yield put({ type: callListSlice.actions.fetchCallListRejected.type });
  }
}
