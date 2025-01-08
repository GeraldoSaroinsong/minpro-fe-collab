import { configureStore } from "@reduxjs/toolkit";
import eventReducer from "./features/eventSlice";
import userReducer from "./features/userSlice";

export const makeStore = () => {
    return configureStore({
        reducer: {
            eventReducer,
            userReducer,
        },
    });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
