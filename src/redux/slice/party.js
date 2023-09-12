import { createSlice } from "@reduxjs/toolkit";
import { getParties } from "../actions/party";

export const partySlice = createSlice({
    name: 'party',
    initialState: {
        parties: []
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getParties.fulfilled, (state, action) => {
                state.parties = action.payload;
            })
    }
})

export default partySlice.reducer;