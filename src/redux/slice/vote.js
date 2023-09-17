import { createSlice } from "@reduxjs/toolkit";
import { getMedia, getTotalVotes, getVotePercents, getVotersNumber, getVotes, getVotesToAdmin, saveVote } from "../actions/vote";

export const voteSlice = createSlice({
    name: 'route',
    initialState: {
        voted: false,
        totalVotes: 0,
        votePercents: [],
        votersNumber: 0,
        votes: [],
        media: null,
        votesToAdmin: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(saveVote.fulfilled, (state, action) => {
                state.voted = action.payload;
            })
            .addCase(getVotes.fulfilled, (state, action) => {
                state.votes = action.payload;
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
            .addCase(getMedia.fulfilled, (state, action) => {
                return { ...state, media: action.payload }
            })
            .addCase(getVotesToAdmin.fulfilled, (state, action) => {
                return {
                    ...state, votesToAdmin: action.payload
                }
            })
    }
})

export default voteSlice.reducer;