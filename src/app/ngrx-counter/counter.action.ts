import { createAction, props } from "@ngrx/store";


export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');     
export const reset = createAction('[Counter Component] Reset');
export const customInput =   createAction('[Counter Component] Custom Input',props<{value:number}>());
export const toggle = createAction('[Counter Component] Toggle');