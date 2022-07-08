import { createSlice } from "@reduxjs/toolkit";
import { DUMMY_MEALS } from "../data/DUMMY_MEALS";

const mealsSlice = createSlice({
  name: "meals",
  initialState: DUMMY_MEALS,
});

export const mealsActions = mealsSlice.actions;

export default mealsSlice;
