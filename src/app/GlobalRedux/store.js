'use client'

import { configureStore } from "@reduxjs/toolkit";
import { taskSlice } from "./Features/counter/counterSlice";
import { shoppingSLice } from "./Features/shopping/shoppingSlice";
import { searchSlice } from "./Features/searchbar/Searchbar";

// import counterReducer from '.Features/counter/counterSlice';

export const store = configureStore({
    reducer:{
        task:taskSlice.reducer,
        cart:shoppingSLice.reducer,
        search:searchSlice.reducer,
    },
  
})

