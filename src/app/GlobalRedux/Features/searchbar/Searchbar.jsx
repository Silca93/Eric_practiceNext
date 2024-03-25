'use client';

import { createSlice } from "@reduxjs/toolkit"
import data from './../../../database/smartphones.json'

export const searchSlice = createSlice({
    name:"search",

    initialState: {
        value:[]
    },

    reducers: {
        filterByName:(state, action) => {
           const searchTerm = action.payload.toLowerCase()
           const filteredData = data.filter((phone)=> phone.name.toLowerCase().includes(searchTerm))
           state.filteredData = filteredData
        }
    }
})

export const { filterByName, filteredData } = searchSlice.actions;
export default searchSlice.reducer;

