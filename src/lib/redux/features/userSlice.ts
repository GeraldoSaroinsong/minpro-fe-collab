import { createSlice } from "@reduxjs/toolkit";

interface IUser {
  id: string;
  name: string;
  username: string;
  email: string;
  role: string;
  isAuth?: boolean;
  imgProfile?: string;
}

const initialData: IUser = {
  id: "",
  name: "",
  username: "",
  role: "",
  email: "",
  isAuth: false,
  imgProfile: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: { ...initialData },
  reducers: {
    setSignIn: (initialState, action) => {
      console.log("REDUCER ACTION SIGN IN ", action);
      return { ...action.payload };
    },
    setSignOut: () => {
      console.log("REDUCER ACTION SIGN OUT");
      return { ...initialData };
    },
    setUpdateProfile: (state, action) => {
      console.log("REDUCER STATE UPDATE USER ", state);
      console.log("REDUCER ACTION UPDATE USER ", action);
      return { ...state, ...action };
    },
  },
});

export const { setSignIn, setSignOut, setUpdateProfile } = userSlice.actions;

export default userSlice.reducer;
