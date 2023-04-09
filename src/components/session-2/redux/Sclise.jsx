import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
    name:"counter",
    initialState:{
        count:0
    },
    reducers:{
        inc:(s,a) => {
            s.count = s.count+1
        },
        dec:(s,a) => {
            s.count = s.count-1
        },
        reset:(s,a) => {
            s.count = 0
        },
        by10:(s,a) => {
            s.count = s.count+a.payload
        }
    }
})

export const { inc, dec, reset, by10 } = Slice.actions;
export default Slice.reducer;