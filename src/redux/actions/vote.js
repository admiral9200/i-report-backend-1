import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const saveVote = createAsyncThunk(
    'vote/saveVote',
    async (params) => {
        try {
            const res = await axios.post("http://localhost:9200/vote/saveVote", params);
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
            const res = await axios.get("http://localhost:9200/vote/getVotes");
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
            const res = await axios.get("http://localhost:9200/vote/getTotalVotes");
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
            const res = await axios.get("http://localhost:9200/vote/getVotePercents");
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
            const res = await axios.get("http://localhost:9200/vote/getVotersNumber");
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
            const res = await axios.post("http://localhost:9200/vote/getMedia", { mediaId });
            if(res) {
                console.log("blob: ", res.blob());
            }
            return res.blob();
        } catch (err) {
            throw err;
        }
    }
)

export const getVotesToAdmin = createAsyncThunk(
    'vote/getVotesToAdmin',
    async () => {
        try {
            const res = await axios.get("http://localhost:9200/vote/getVotesToAdmin");
            if(res.status == 200) {
                return res.data.data;
            } 
        } catch (err) {
            
        }
    }
)