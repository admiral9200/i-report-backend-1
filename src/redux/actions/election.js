import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllElectionData = createAsyncThunk(
    'election/getAllElectionData',
    async () => {
        try {
            const res = await axios.get("https://social-media-i-rport-backend-gjf3-admiral9200.vercel.app:9200/election/getAllElectionData");
            return res.data;
        } catch(err) {
            throw err;
        }
    }
)

export const getCountries = createAsyncThunk(
    'election/getCountries',
    async () => {
        try {
            const res = await axios.get("https://social-media-i-rport-backend-gjf3-admiral9200.vercel.app:9200/election/getCountries");
            return res.data;
        } catch(err) {
            throw err;
        }
    }
)

export const getStates = createAsyncThunk(
    'election/getStates',
    async (country) => {
        try {
            const res = await axios.post("https://social-media-i-rport-backend-gjf3-admiral9200.vercel.app:9200/election/getStates", { country });
            return res.data;
        } catch(err) {
            throw err;
        }
    }
)

export const getGovernments = createAsyncThunk(
    'election/getGovernments',
    async (params) => {
        try {
            const res = await axios.post("https://social-media-i-rport-backend-gjf3-admiral9200.vercel.app:9200/election/getGovernments", { params });

            return res.data;
        } catch(err) {
            throw err;
        }
    }
)

export const getWards = createAsyncThunk(
    'election/getWards',
    async (params) => {
        try {
            const res = await axios.post("https://social-media-i-rport-backend-gjf3-admiral9200.vercel.app:9200/election/getWards", { params });
            return res.data;
        } catch(err) {
            throw err;
        }
    }
)

export const getPolls = createAsyncThunk(
    'election/getPolls',
    async (params) => {
        try {
            const res = await axios.post("https://social-media-i-rport-backend-gjf3-admiral9200.vercel.app:9200/election/getPolls", { params });
            return res.data;
        } catch(err) {
            throw err;
        }
    }
)

export const getPollUnitIds = createAsyncThunk(
    'election/getPollUnitIds',
    async () => {
        try {
            const res = await axios.get("https://social-media-i-rport-backend-gjf3-admiral9200.vercel.app:9200/election/getPollUnitIds");
            return res.data;
        } catch(err) {
            throw err;
        }
    }
)