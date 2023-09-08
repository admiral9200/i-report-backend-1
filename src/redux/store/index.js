import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../slice/auth";
import routeSlice from "../slice/route";
import profileSlice from "../slice/profile";

const rootReducer = {
    auth: authSlice,
    route: routeSlice,
    profile: profileSlice
}

export default configureStore({
    reducer: rootReducer
});