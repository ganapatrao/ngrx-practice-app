import { createReducer, on } from "@ngrx/store";
import { initialCounterState } from "./counter.state";
import { decrement, increment, reset } from "./counter.action";

export  const counterReducer = createReducer(initialCounterState,
    on(increment, (state) => ({ ...state, counter: state.counter + 1 })),//returns new statue
    on(decrement, (state) => ({ ...state, counter: state.counter - 1 })),
    on(reset, (state) => ({ ...state, counter: 0 }))    
);