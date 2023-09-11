import { createSlice } from "@reduxjs/toolkit";
import { setLoggedIn, signIn, signOut, signUp, setCurrentUser, getCurrentUserRole } from "../actions/auth";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        registered: false,
        loggedIn: false,
        currentUser: {}
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(signUp.fulfilled, (state) => {
                state.registered = true;
            })
            .addCase(signIn.fulfilled, (state, action) => {
                state.loggedIn = true;
                state.registered = false;
            })
            .addCase(signOut.fulfilled, state => {
                state.loggedIn = false;
                state.registered = false;
                state.currentUser = {};
            })
            .addCase(setLoggedIn.fulfilled, state => {
                state.loggedIn = true;
            })
            .addCase(setCurrentUser.fulfilled, (state, action) => {
                state.currentUser = action.payload;
            })
            .addCase(getCurrentUserRole.fulfilled, state => {
                return state.currentUser.role
            })
    }
})

export default authSlice.reducer;