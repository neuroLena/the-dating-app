// store/reducers/symptoms/index.ts

import produce from "immer";
import { createAsyncAction, ActionType } from "typesafe-actions";
import { RootAction } from "~store/reducers"; // Update the path according to your file structure


// Define the properties of the Symptom type
export interface Symptom {
    id: number;
    name: string;
    parent: string;
  }

// Action types
export enum Types {
  FETCH_SYMPTOMS_REQUEST = "FETCH_SYMPTOMS_REQUEST",
  FETCH_SYMPTOMS_SUCCESS = "FETCH_SYMPTOMS_SUCCESS",
  FETCH_SYMPTOMS_FAILURE = "FETCH_SYMPTOMS_FAILURE",
}

// Action creators
export const fetchSymptomsRequest = createAsyncAction(
  Types.FETCH_SYMPTOMS_REQUEST,
  Types.FETCH_SYMPTOMS_SUCCESS,
  Types.FETCH_SYMPTOMS_FAILURE
)<void, Symptom[], Error>();


// Initial state
export interface SymptomsState {
  data: Symptom[];
  loading: boolean;
  error: Error | null;
}

export const initialState: SymptomsState = {
  data: [],
  loading: false,
  error: null,
};

// Reducer
export const symptomsReducer = produce(
  (draft: SymptomsState, action: ActionType<typeof fetchSymptomsRequest | RootAction>) => {
    switch (action.type) {
      case Types.FETCH_SYMPTOMS_REQUEST:
        draft.loading = true;
        draft.error = null;
        break;
      case Types.FETCH_SYMPTOMS_SUCCESS:
        draft.loading = false;
        draft.data = action.payload;
        break;
      case Types.FETCH_SYMPTOMS_FAILURE:
        draft.loading = false;
        draft.error = action.payload;
        break;
      default:
        break;
    }
  },
  initialState
);
