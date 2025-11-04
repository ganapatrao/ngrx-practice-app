import { createReducer, on } from "@ngrx/store";
import { getCourses } from "./courses.action";
import { initialCourseState } from "./courses.state";

export const coursesReducer = createReducer(
    initialCourseState, 
    on(getCourses, (state) => (state))
);