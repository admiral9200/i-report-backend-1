import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const saveVote = createAsyncThunk(
    'vote/saveVote',
    async (params) => {
        try {
            const res = await axios.post("https://i-report-backend-admiral.onrender.com/vote/saveVote", params);
            return res.data;
        } catch(err) {
            throw err;
        }
    }
)

export const getVotes = createAsyncThunk(
    'vote/getVotes',
    async () => {
        try {
            const res = await axios.get("https://i-report-backend-admiral.onrender.com/vote/getVotes");
            return res.data
        } catch (err) {
            throw err
        }
    }
)

export const getTotalVotes = createAsyncThunk(
    'vote/getTotalVotes',
    async () => {
        try {
            const res = await axios.get("https://i-report-backend-admiral.onrender.com/vote/getTotalVotes");
            return res.data
        } catch (err) {
            throw err;
        }
    }
)

export const getVotePercents = createAsyncThunk(
    'vote/getVotePercents',
    async () => {
        try {
            const res = await axios.get("https://i-report-backend-admiral.onrender.com/vote/getVotePercents");
            return res.data
        } catch (err) {
            throw err;
        }
    }
)

export const getVotersNumber = createAsyncThunk(
    'vote/getVotersNumber',
    async () => {
        try {
            const res = await axios.get("https://i-report-backend-admiral.onrender.com/vote/getVotersNumber");
            return res.data
        } catch (err) {
            throw err;
        }
    }
)

export const getMedia = createAsyncThunk(
    'vote/getMedia',
    async (mediaId) => {
        try {
            const res = await axios.post("https://i-report-backend-admiral.onrender.com/vote/getMedia", { mediaId });
            if(res) {
                console.log("blob: ", res.blob());
            }
            return res.blob();
        } catch (err) {
            throw err;
        }
    }
)