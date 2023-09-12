import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const signUp = createAsyncThunk(
    'auth/signUp',
    async (params) => {
        try {
            const res = await axios.post("https://social-media-i-rport-backend-gjf3-admiral9200.vercel.app:9200/auth/register", { ...params, role: "user" });
            return res.data;
        } catch(err) {
            throw err;
        }
    }
)

const signIn = createAsyncThunk(
    'auth/signIn',
    async (params) => {
        try {
            const res = await axios.post("https://social-media-i-rport-backend-gjf3-admiral9200.vercel.app:9200/auth/login", params);
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

const signOut = createAsyncThunk(
    'auth/signOut',
    async () => {
        await localStorage.removeItem("token");
        return true;
    }
)

const setLoggedIn = createAsyncThunk(
    'auth/setLoggedIn',
    async () => {
        return true;
    }
)

const setCurrentUser = createAsyncThunk(
    'auth/setCurrentUser',
    async (params) => {
        return params;
    }
)

const getCurrentUserRole = createAsyncThunk(
    'auth/getCurrentUserRole',
    async () => {
        return {};
    }
)

export { signUp, signIn, signOut, setLoggedIn, setCurrentUser, getCurrentUserRole };