import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const signUp = createAsyncThunk(
    'auth/signUp',
    async (params) => {
        try {
            const res = await axios.post("https://i-report-backend-admiral.onrender.com/auth/register", { ...params, role: "user" });
            return res.data;
        } catch(err) {
            throw err;
        }
    }
)
// sign in function 
const signIn = createAsyncThunk(
    'auth/signIn',
    async (params) => {
        try {
            const res = await axios.post("https://i-report-backend-admiral.onrender.com/auth/login", params);
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