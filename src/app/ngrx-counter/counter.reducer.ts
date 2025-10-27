import { createReducer, on } from "@ngrx/store";
import { initialCounterState } from "./counter.state";
import { customInput, decrement, increment, reset } from "./counter.action";

export  const counterReducer = createReducer(initialCounterState,
    on(increment, (state) => ({ ...state, counter: state.counter + 1 })),//returns new statue
    on(decrement, (state) => ({ ...state, counter: state.counter - 1 })),
    on(reset, (state) => ({ ...state, counter: 0 }))    ,
    on(customInput, (state, action) => ({ ...state, counter: state.counter + action.value }))
);  