import { configureStore } from "@reduxjs/toolkit";
import myReducer from './Sclise'
export const Store = configureStore({
    reducer:{
        myKey:myReducer
    }
})