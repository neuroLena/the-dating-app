//store/sagas/symptoms/index.ts

import { fetchSymptomsRequest, submitSymptomsRequest, Types } from "~store/reducers/symptoms";
import { call, put, takeLatest,takeEvery } from "redux-saga/effects";
import api from "~services/api";

function* fetchSymptoms() {
  try {
    const response = yield call(api.get, "/symptoms");
    yield put(fetchSymptomsRequest.success(response.data));
  } catch (error) {
    yield put(fetchSymptomsRequest.failure(error));
  }
}

function* submitSymptoms(action) {
  try {
    // You'd actually send the symptoms to your API here.
    // For now, we'll just log them:
    console.log('Submitted symptoms:', action.payload);

    // Then, you could dispatch a success action if you want:
    yield put(submitSymptomsRequest.success());
  } catch (error) {
    // And you could dispatch a failure action if there's an error:
    yield put(submitSymptomsRequest.failure(error));
  }
}

export default function* symptomsSaga() {
  yield takeLatest(Types.FETCH_SYMPTOMS_REQUEST, fetchSymptoms);
  yield takeEvery(Types.SUBMIT_SYMPTOMS_REQUEST, submitSymptoms);
}
