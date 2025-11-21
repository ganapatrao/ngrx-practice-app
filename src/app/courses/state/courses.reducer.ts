import { createReducer, on } from "@ngrx/store";
import { getCourses, showAddForm, addCourse, editCourse, setSelectedCourses, updateCourse, deleteCourse } from "./courses.action";
import { initialCourseState } from "./courses.state";

export const coursesReducer = createReducer(
    initialCourseState, 
    on(getCourses, (state) => (state)),
    on(showAddForm, (state,action) => ({ ...state, showCourseForm: action.create })),
    on(addCourse, (state, action) => ({ ...state, courses: [...state.courses, action.courseData] })),
    on(editCourse,(state,action)=>({...state,editForm:action.edit})),
    on(setSelectedCourses,(state,action)=>({...state,selectedCourse:action.course})),
    on(updateCourse, (state, action) => {
        const updatedCourses = state.courses.map(course =>
            course.id === action.courseData.id ? action.courseData : course
        );
        return { ...state, courses: updatedCourses };
    }),
    on(deleteCourse, (state, action) => {
        const updatedCourses = state.courses.filter(course => course.id !== action.courseId);
        return { ...state, courses: updatedCourses };
    }),
    on(deleteCourse, (state, action) => {
        const filteredCourses = state.courses.filter(course => course.id !== action.courseId);
        return { ...state, courses: filteredCourses };
    }),
);