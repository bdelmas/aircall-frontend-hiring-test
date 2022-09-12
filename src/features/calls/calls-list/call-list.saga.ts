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
  fetchCallListRejected,
  putCallListArchiveFullfilled,
  putCallListArchiveRejected,
} from "./call-list.slice";
import {
  fetchCallListPayload,
  callListAPI,
  callListDTO,
  putCallListArchivePayload,
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
    yield put(fetchCallListRejected({}));
  }
}

function* watchPostCallListArchivePending() {
  yield takeLatest(
    callListSlice.actions.putCallListArchivePending.type,
    putCallListArchive
  );
}

function* putCallListArchive(
  action: PayloadAction<putCallListArchivePayload>
): Generator<StrictEffect, void, callListDTO> {
  try {
    let { data } = yield call(callListAPI.putCallListArchive(action));
    yield put(putCallListArchiveFullfilled(data));
  } catch (e) {
    yield put(putCallListArchiveRejected({}));
  }
}
