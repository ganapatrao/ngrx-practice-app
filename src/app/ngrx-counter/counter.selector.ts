import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterState } from "./counter.state";

//const getCounterState = createFeatureSelector<CounterState>('count'); or
const getCounterState = createFeatureSelector<CounterState>('count'); // we can use the key and access the state

export const getCounter = createSelector(
    getCounterState,
    (state: CounterState) => state.counter
);  

export const getToggle = createSelector(
    getCounterState,
    (state: CounterState) => state.toggle
);