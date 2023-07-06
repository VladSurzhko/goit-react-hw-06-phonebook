import { createSlice } from "@reduxjs/toolkit";

const filterState = ""

const filterSlice = createSlice({
    name: 'filter',
    initialState: filterState,
    reducers: {
      update(state, action) {
        state = action.payload;
      },
    },
});

export default filterSlice

export const {update} = filterSlice.actions