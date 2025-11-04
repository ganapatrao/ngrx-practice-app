import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IcourseState } from "./courses.state";

const courseSelector = createFeatureSelector<IcourseState>('course');

export const selectCourses = createSelector(
    courseSelector,
    (state:IcourseState) => state.courses
);