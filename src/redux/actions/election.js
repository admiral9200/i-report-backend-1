import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllElectionData = createAsyncThunk(
    'election/getAllElectionData',
    async () => {
        try {
            const res = await axios.get("https://i-report-backend-admiral.onrender.com/election/getAllElectionData");
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
            const res = await axios.get("https://i-report-backend-admiral.onrender.com/election/getCountries");
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
            const res = await axios.post("https://i-report-backend-admiral.onrender.com/election/getStates", { country });
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
            const res = await axios.post("https://i-report-backend-admiral.onrender.com/election/getGovernments", { params });

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
            const res = await axios.post("https://i-report-backend-admiral.onrender.com/election/getWards", { params });
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
            const res = await axios.post("https://i-report-backend-admiral.onrender.com/election/getPolls", { params });
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
            const res = await axios.get("https://i-report-backend-admiral.onrender.com/election/getPollUnitIds");
            return res.data;
        } catch(err) {
            throw err;
        }
    }
)