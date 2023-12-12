import {createSlice} from "@reduxjs/toolkit";

export interface CounterSlice {
    value: number
}

const initialState: CounterSlice = {
    value: 0
}
export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
    },
});
export const {increment, decrement} = counterSlice.actions

export default counterSlice.reducer