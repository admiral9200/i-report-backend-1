import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const addProfile = createAsyncThunk(
    'profile/createProfile',
    async (params) => {
        try {
            console.log("save profile: ", params)
            const res = await axios.post("https://i-report-backend-admiral.onrender.com//profile/create", params);
            return res.data;
        } catch(err) {
            throw err;
        }
    }
)

export const getProfile = createAsyncThunk(
    'profile/getProfile',
    async (params) => {
        console.log("get profile: ", JSON.stringify(params));
        try {
            const res = await axios.post("https://i-report-backend-admiral.onrender.com//profile/get", {params});
            return res.data;
        } catch(err) {

        }
    }
)