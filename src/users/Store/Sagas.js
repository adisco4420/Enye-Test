import { fork } from "redux-saga/effects";
import UserListSagas from "../List/Sagas";

export default function*() {
  yield fork(UserListSagas);
}
