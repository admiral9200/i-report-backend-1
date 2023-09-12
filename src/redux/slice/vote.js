import { createSlice } from "@reduxjs/toolkit";
import { getTotalVotes, getVotePercents, getVotersNumber, getVotes, saveVote } from "../actions/vote";

export const voteSlice = createSlice({
    name: 'route',
    initialState: {
        voted: false,
        vote: [],
        totalVotes: 0,
        votePercents: [],
        votersNumber: 0
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(saveVote.fulfilled, (state, action) => {
                state.voted = action.payload;
            })
            .addCase(getVotes.fulfilled, (state, action) => {
                state.vote = action.payload;
            })
            .addCase(getTotalVotes.fulfilled, (state, action) => {
                state.totalVotes = action.payload;
            })
            .addCase(getVotePercents.fulfilled, (state, action) => {
                state.votePercents = action.payload;
            })
            .addCase(getVotersNumber.fulfilled, (state, action) => {
                state.votersNumber = action.payload;
            })
    }
})

export default voteSlice.reducer;