import { createSlice } from "@reduxjs/toolkit";
import { signIn, signOut, signUp } from "../actions/auth";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        registered: false,
        loggedIn: false
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(signUp.fulfilled, (state) => {
                state.registered = true;
            })
            .addCase(signIn.fulfilled, state => {
                console.log("sign in fulfilled")
                state.loggedIn = true;
                state.registered = false;
            })
            .addCase(signOut.fulfilled, state => {
                state.loggedIn = false;
                state.registered = false;
            })
    }
})

export default authSlice.reducer;