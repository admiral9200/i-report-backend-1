import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const signUp = createAsyncThunk(
    'auth/signUp',
    async (params) => {
        try {
            const res = await axios.post("http://localhost:9200/auth/register", { ...params, role: "user" });
            return res.data;
        } catch(err) {
            throw err;
        }
    }
)

export const signIn = createAsyncThunk(
    'auth/signIn',
    async (params) => {
        try {
            const res = await axios.post("http://localhost:9200/auth/login", params);
            console.log(res.data)
            return res.data;
        } catch (err) {
            throw err;
        }
    }
)

export const signOut = createAsyncThunk(
    'auth/signOut',
    async () => {
        return true;
    }
)