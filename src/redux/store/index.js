import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../slice/auth";
import routeSlice from "../slice/route";
import profileSlice from "../slice/profile";
import electionSlice from "../slice/election";

const rootReducer = {
    auth: authSlice,
    route: routeSlice,
    profile: profileSlice,
    election: electionSlice
}

export default configureStore({
    reducer: rootReducer
});