
export interface CounterState { // go though the syntax
    counter: number,
    toggle:boolean
}


// export const initialCounterState = {
//     counter: 0
// }

export const initialCounterState :CounterState = {
    counter: 0,
    toggle:false
}