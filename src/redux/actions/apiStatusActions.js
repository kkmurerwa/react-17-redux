import * as Types from "./actionTypes";

export function beginApiCall() {
  return { type: Types.BEGIN_API_CALL };
}

export function apiCallError() {
  return { type: Types.API_CALL_ERROR };
}
