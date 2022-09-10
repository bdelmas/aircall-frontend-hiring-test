import { all, fork } from "redux-saga/effects";
import { signInSaga } from "../features/users/sign-in/sign-in.saga";
import { callListSaga } from "../features/calls/calls-list/call-list.saga";

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([fork(signInSaga), fork(callListSaga)]);
}
