"use client";

import { useDispatch, useSelector, useStore } from "react-redux";
import type { AppStore, RootState, AppDispatch } from "./store";

// redefine react hooks for action
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
// redefine react hooks for state reducer
export const useAppSelector = useSelector.withTypes<RootState>();
// redefine react hooks for access all data in store
export const useAppStore = useStore.withTypes<AppStore>();
