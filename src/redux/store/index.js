import { configureStore } from "@reduxjs/toolkit";
// import { authReducer } from "../reducers/auth";
import authSlice from "../slice/auth";

export default configureStore({
    reducer: {
        auth: authSlice
    }
});