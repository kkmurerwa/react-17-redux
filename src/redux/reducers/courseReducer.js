import * as Types from "../actions/actionTypes";
import initialState from "./initialState";

export default function courseReducer(state = initialState.authors, action) {
  switch (action.type) {
    case Types.CREATE_COURSE_SUCCESS:
      return [...state, { ...action.course }];
    case Types.UPDATE_COURSE_SUCCESS:
      return state.map((course) =>
        course.id === action.course.id ? action.course : course
      );
    case Types.LOAD_COURSES_SUCCESS:
      return action.courses;
    case Types.DELETE_COURSE_OPTIMISTIC:
      return state.filter((course) => course.id !== action.course.id);
    default:
      return state;
  }
}
