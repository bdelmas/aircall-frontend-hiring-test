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
  callListSlice,
  fetchCallListFullfilled,
  postCallListArchiveFullfilled,
} from "./call-list.slice";
import {
  fetchCallListPayload,
  callListAPI,
  callListDTO,
  postCallListArchivePayload,
} from "./call-list.api";

export function* callListSaga() {
  yield all([
    fork(watchfetchCallListPending),
    fork(watchPostCallListArchivePending),
  ]);
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
    yield put(fetchCallListFullfilled(data));
  } catch (e) {
    yield put({ type: callListSlice.actions.fetchCallListRejected.type });
  }
}

function* watchPostCallListArchivePending() {
  yield takeLatest(
    callListSlice.actions.postCallListArchivePending.type,
    postCallListArchive
  );
}

function* postCallListArchive(
  action: PayloadAction<postCallListArchivePayload>
): Generator<StrictEffect, void, callListDTO> {
  try {
    let { data } = yield call(callListAPI.postCallListArchive(action));
    console.log(data);
    yield put(postCallListArchiveFullfilled(data));
  } catch (e) {
    yield put({ type: callListSlice.actions.postCallListArchiveRejected.type });
  }
}
