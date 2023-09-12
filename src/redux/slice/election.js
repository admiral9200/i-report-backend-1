import { createSlice } from "@reduxjs/toolkit";
import { getAllElectionData, getCountries, getGovernments, getPolls, getStates, getWards } from "../actions/election";

export const electionSlice = createSlice({
    name: 'election',
    initialState: {
        electionData: {},
        countries: [],
        states: [],
        governments: [],
        wards: [],
        polls: []
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getAllElectionData.fulfilled, (state, action) => {
                state.electionData = action.payload;
            })
            .addCase(getCountries.fulfilled, (state, action) => {
                state.countries = action.payload;
            })
            .addCase(getStates.fulfilled, (state, action) => {
                state.states = action.payload
            })
            .addCase(getGovernments.fulfilled, (state, action) => {
                state.governments = action.payload
            })
            .addCase(getWards.fulfilled, (state, action) => {
                state.wards = action.payload
            })
            .addCase(getPolls.fulfilled, (state, action) => {
                state.polls = action.payload;
            })
            
            
    }
})

export default electionSlice.reducer;