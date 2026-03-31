import * as CourseType from "./courseTypes.js";

export const increment = (id) => ({ type: CourseType.INCREMENT, payload: id });

export const decrement = (id) => ({ type: CourseType.DECREMENT, payload: id });

export const remove = (id) => ({ type: CourseType.REMOVE, payload: id });
