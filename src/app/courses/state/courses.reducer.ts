import { createReducer, on } from "@ngrx/store";
import { getCourses, showAddForm, addCourse, editCourse } from "./courses.action";
import { initialCourseState } from "./courses.state";

export const coursesReducer = createReducer(
    initialCourseState, 
    on(getCourses, (state) => (state)),
    on(showAddForm, (state,action) => ({ ...state, showCourseForm: action.create })),
    on(addCourse, (state, action) => ({ ...state, courses: [...state.courses, action.courseData] })),
    on(editCourse,(state,action)=>({...state,editForm:action.edit}))
);