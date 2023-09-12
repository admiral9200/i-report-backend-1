import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const saveVote = createAsyncThunk(
    'vote/saveVote',
    async (params) => {
        try {
            console.log("params: ", params)
            const res = await axios.post("https://social-media-i-rport-backend-gjf3-git-master-admiral9200.vercel.app:9200/vote/saveVote", { ...params });
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
            const res = await axios.get("https://social-media-i-rport-backend-gjf3-git-master-admiral9200.vercel.app:9200/vote/getVotes");
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
            const res = await axios.get("https://social-media-i-rport-backend-gjf3-git-master-admiral9200.vercel.app:9200/vote/getTotalVotes");
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
            const res = await axios.get("https://social-media-i-rport-backend-gjf3-git-master-admiral9200.vercel.app:9200/vote/getVotePercents");
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
            const res = await axios.get("https://social-media-i-rport-backend-gjf3-git-master-admiral9200.vercel.app:9200/vote/getVotersNumber");
            return res.data
        } catch (err) {
            throw err;
        }
    }
)