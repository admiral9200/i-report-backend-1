import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const addProfile = createAsyncThunk(
    'profile/createProfile',
    async (params) => {
        try {
            console.log("save profile: ", params)
            const res = await axios.post("https://192.168.109.163:9200/profile/create", params);
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
            const res = await axios.post("https://192.168.109.163:9200/profile/get", params);
            return res.data;
        } catch(err) {

        }
    }
)