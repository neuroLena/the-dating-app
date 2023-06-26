//store/reducers/uindex.ts

import * as users from "./users";
import * as symptoms from "./symptoms";
import { StateType } from "typesafe-actions";
import { combineReducers } from "redux";

export const Types = {
  ...users.Types,
  ...symptoms.Types
};

export const Actions = {
  users: users.Actions,
  symptoms: symptoms.fetchSymptomsRequest
};

const rootReducer = combineReducers({
  users: users.default,
  symptoms: symptoms.symptomsReducer
});


export type RootAction = typeof Actions;
export type RootState = StateType<typeof rootReducer>;

export default rootReducer;
