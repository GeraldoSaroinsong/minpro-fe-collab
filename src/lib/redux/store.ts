import { configureStore } from "@reduxjs/toolkit";
import eventReducer from "./features/eventSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      eventReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
