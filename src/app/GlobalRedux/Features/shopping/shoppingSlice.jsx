'use client'
import { createSlice } from "@reduxjs/toolkit"

export const shoppingSLice = createSlice ({
    name:"cart",
    initialState: {
        value:[]
    },
    reducers: {
        addToCart : (state, action) => {
            state.value.push(action.payload)
            console.log(state.value.length);
            
        },
        remove: (state, action) => {
            const itemIndex = state.value.findIndex(phone => phone.id === action.payload); 
            if (itemIndex !== -1) {
              state.value.splice(itemIndex, 1); 
            }
        },
    }
})

export const {addToCart, remove} = shoppingSLice.actions;
export default shoppingSLice.reducer;