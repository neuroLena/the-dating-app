//store/saga/index.s

import { all, call, put } from "redux-saga/effects";
import users from "~store/sagas/users";
import symptomsSaga from "~store/sagas/symptoms";
import { Actions } from "~store/reducers";

export default function* rootSaga() {
  // yield users;
  yield all([
    // call(users), 
    call(symptomsSaga)
  ]); 
  // yield put(Actions.users.list.request());
  yield put(Actions.symptoms.request()); 
}

