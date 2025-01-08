/* eslint-disable @typescript-eslint/no-explicit-any */
import { callAPI } from "@/config/axios";
import { createSlice } from "@reduxjs/toolkit";

const eventSlice = createSlice({
  name: "event",
  initialState: [{}],
  reducers: {
    setEvents: (initialState, action) => {
      console.log("Check action redux from events", action);

      // store data in global store
      return [...action.payload];
    },
  },
});

// export actions
export const { setEvents } = eventSlice.actions;

// export reducer
export default eventSlice.reducer;

// call api function
export const getEventList = () => {
  return async (dispatch: any) => {
    try {
      const res = await callAPI.get("/events");
      dispatch(setEvents(res.data));
    } catch (error) {
      console.log(error);
    }
  };
};
