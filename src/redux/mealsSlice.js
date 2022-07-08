import { createSlice } from "@reduxjs/toolkit";
import { DUMMY_MEALS } from "../data/DUMMY_MEALS";

const mealsSlice = createSlice({
  name: "meals",
  initialState: DUMMY_MEALS,
  reducers: {
    bookmarkStatus(state, action) {
      const clickedItem = state.find(item => item.id === action.payload);
      clickedItem.bookmark = !clickedItem.bookmark;
    },
  },
});

export const mealsActions = mealsSlice.actions;

export default mealsSlice;
