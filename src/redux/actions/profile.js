import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const addProfile = createAsyncThunk(
    'profile/createProfile',
    async (params) => {
        try {
            console.log("save profile: ", params)
            const res = await axios.post("https://1social-media-i-rport-backend-k83rmc4lr-admiral9200.vercel.app/profile/create", params);
            return res.data;
        } catch(err) {
            throw err;
        }
    }
)

export const getProfile = createAsyncThunk(
    'profile/getProfile',
    async (params) => {
        console.log("get profile: ", params);
        try {
            const res = await axios.post("https://1social-media-i-rport-backend-k83rmc4lr-admiral9200.vercel.app/profile/get", params);
            return res.data;
        } catch(err) {

        }
    }
)