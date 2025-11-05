import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IcourseState } from "./courses.state";

const courseSelector = createFeatureSelector<IcourseState>('course');

export const selectCourses = createSelector(
    courseSelector,
    (state:IcourseState) => state.courses
);


export const showFormSelector = createSelector(
    courseSelector,
    (state:IcourseState) => state.showCourseForm
);  

export const editFormSelector = createSelector(
    courseSelector,
    (state:IcourseState) => state.editForm
);

export const getCoursesSelector = createSelector(
    courseSelector,
    (state:IcourseState) => state.selectedCourse
);