import { createSlice } from "@reduxjs/toolkit";
import { addProfile, getProfile } from "../actions/profile";
import { signOut } from "../actions/auth";

export const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        profile: {}
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(addProfile.fulfilled, (state, action) => {
                state.profile = action.payload;
            })
            .addCase(getProfile.fulfilled, (state, action) => {
                state.profile = action.payload;
            })
            .addCase(signOut.fulfilled, state => {
                state.profile = {}
            })
    }
})

export default profileSlice.reducer;