import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
    name:"count",
    initialState:{
        count:0
    },
    reducers:{
        inc:(state,action) => {
            state.count = state.count+1
        },
        dec:(state,action) => {
            state.count = state.count-1
        },
        reset:(state,action) => {
            state.count = 0
        },
        incby10:(state,action) => {
            state.count = state.count + action.payload
        }
    }
})

export const { inc, dec, reset, incby10} = Slice.actions;
export default Slice.reducer