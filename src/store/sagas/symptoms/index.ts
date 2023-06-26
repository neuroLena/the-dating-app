//store/sagas/symptoms/index.ts

import { fetchSymptomsRequest, Types } from "~store/reducers/symptoms";
import { call, put, takeLatest } from "redux-saga/effects";
import api from "~services/api";

function* fetchSymptoms() {
  try {
    const response = yield call(api.get, "/symptoms");
    yield put(fetchSymptomsRequest.success(response.data));
  } catch (error) {
    yield put(fetchSymptomsRequest.failure(error));
  }
}

export default function* symptomsSaga() {
  yield takeLatest(Types.FETCH_SYMPTOMS_REQUEST, fetchSymptoms);
}
