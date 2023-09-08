import { createSlice } from "@reduxjs/toolkit";
import { addProfile, getProfile } from "../actions/profile";

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
    }
})

export default profileSlice.reducer;