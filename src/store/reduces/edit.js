import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  new: 0,
};

export const directorsSlice = createSlice({
  name: "directors",
  initialState,
  reducers: {},
});

export const {} = directorsSlice.actions;

export default directorsSlice.reducer;
