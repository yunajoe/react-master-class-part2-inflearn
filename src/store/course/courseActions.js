import { courseTypes } from "./courseTypes";

export function increaseCourse(item) {
  return {
    type: courseTypes.INCREMENT,
    payload: item,
  };
}

export function decreaseCourse(item) {
  return {
    type: courseTypes.DECREMENT,
    payload: item,
  };
}
