import { callAPI } from "@/config/axios";
import { createSlice } from "@reduxjs/toolkit";

const eventSlice = createSlice({
  name: "event",
  initialState: [{}],
  reducers: {
    setEvents: (initalState, action) => {
      console.log("Check action redux from events", action);
      return [...action.payload];
    },
  },
});

export const { setEvents } = eventSlice.actions;

export default eventSlice.reducer;
