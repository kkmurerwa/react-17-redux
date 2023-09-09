import * as Types from "../actions/actionTypes";
import initialState from "./initialState";

export default function courseReducer(state = initialState.authors, action) {
  switch (action.type) {
    case Types.CREATE_COURSE:
      return [...state, { ...action.course }];
    case Types.LOAD_COURSES_SUCCESS:
      return action.courses;
    default:
      return state;
  }
}
