//store/index.ts

import createSagaMiddleware from "redux-saga";
import sagas from "./sagas";
import { configureStore } from "@reduxjs/toolkit";
import { all} from "redux-saga/effects";
import rootReducer from "./reducers/"

//Saga middleware
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];


export type RootState = ReturnType<typeof rootReducer>;

//Redux store 
export const store = configureStore({
  reducer: rootReducer, //root reducer
  middleware: middlewares,
});

function* rootSaga() {
  yield all([sagas()]);
}

sagaMiddleware.run(rootSaga);
