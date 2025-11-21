import { createAction, props } from "@ngrx/store";
import { ICourseModel } from "../course.model";

export const getCourses = createAction( '[Courses] Get Courses');
export const showAddForm = createAction( '[Courses] Show Form',props<{create:boolean}>() );

export const addCourse = createAction( '[Courses] Add Course',props<{courseData:ICourseModel}>() );
export const editCourse = createAction( '[Courses] Edit Course',props<{edit:boolean}>() );
export const setSelectedCourses = createAction( '[Courses] Select Courses', props<{ course: ICourseModel }>());
export const updateCourse = createAction( '[Courses] Update Course', props<{ courseData: ICourseModel }>());
export const deleteCourse = createAction( '[Courses] Delete Course', props<{ courseId: string }>());
