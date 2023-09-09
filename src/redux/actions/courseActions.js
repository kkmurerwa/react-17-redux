import * as Types from "./actionTypes";

export function createCourse(course) {
  return {
    type: Types.CREATE_COURSE,
    course,
  };
}
