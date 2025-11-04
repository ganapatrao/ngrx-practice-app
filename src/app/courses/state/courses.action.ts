import { createAction } from "@ngrx/store";
import { ICourseModel } from "../course.model";

export const getCourses = createAction( '[Courses] Get Courses');
export const getCoursesSuccess = createAction( '[Courses] Get Courses Success', (courses: ICourseModel[]) => ({ courses }));