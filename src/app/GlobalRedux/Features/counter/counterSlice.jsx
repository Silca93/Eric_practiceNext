'use client';

import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice ({
    name:"task",
    
    initialState: {
        value:0
    },

    reducers: {
        increment:(state) =>  {state.value += 1},
        decrement:(state) => {state.value -= 1},
        incrementByAmount:(state, action) => {
            state.value  += action.payload;
        }
    }
})

export const { increment, decrement, incrementByAmount} = taskSlice.actions;
export default taskSlice.reducer;