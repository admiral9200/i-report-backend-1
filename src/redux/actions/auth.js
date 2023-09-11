import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const signUp = createAsyncThunk(
    'auth/signUp',
    async (params) => {
        try {
            const res = await axios.post("https://social-media-i-rport-backend-gjf3.vercel.app/auth/register", { ...params, role: "user" });
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
            const res = await axios.post("https://social-media-i-rport-backend-gjf3.vercel.app/auth/login", params, {
                headers: {
                    'Access-Control-Allow-Origin': '*', // Allow requests from any origin
                    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE', // Specify allowed HTTP methods
                    'Access-Control-Allow-Headers': 'Content-Type, Authorization', // Specify allowed headers
                }
            });
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

export const getCurrentUserRole = createAsyncThunk(
    'auth/getCurrentUserRole',
    async () => {
        return {};
    }
)