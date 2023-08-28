import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            console.log('it is working')
            state.count += 1
        },
        decrement: (state) => {
            state.count -= 1
        },
        incrementByAmount: (state,action) => {
            state.count += action.payload
        }
    }
})
export const counterValue = (state) => state.counter.count
export const {increment,decrement,incrementByAmount} = counterSlice.actions
export default counterSlice.reducer