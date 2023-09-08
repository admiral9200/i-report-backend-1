import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const signUp = createAsyncThunk(
    'auth/signUp',
    async (params) => {
        try {
            const res = await axios.post("https://192.168.109.163:9200/auth/register", { ...params, role: "user" });
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
            const res = await axios.post("https://192.168.109.163:9200/auth/login", params);
            console.log(res.data)
            if(res.status == 200) {
                await localStorage.setItem("token", res.data.token);
            }
            return res.data;
        } catch (err) {
            throw err;
        }
    }
)

export const signOut = createAsyncThunk(
    'auth/signOut',
    async () => {
        await localStorage.removeItem("token");
        return true;
    }
)

export const setLoggedIn = createAsyncThunk(
    'auth/setLoggedIn',
    async () => {
        return true;
    }
)

export const setCurrentUser = createAsyncThunk(
    'auth/setCurrentUser',
    async (params) => {
        return params;
    }
)