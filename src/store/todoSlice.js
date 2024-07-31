import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: { searchData: {} },
  reducers: {
    setSearchData(state, action) {
      state.searchData = action.payload;
    },
  },
});

export const todoActions = todoSlice.actions;
export default todoSlice;
