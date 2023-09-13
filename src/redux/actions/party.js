import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getParties = createAsyncThunk(
    'party/getParties',
    async () => {
        try {
            const res = await axios.get("https://i-report-backend-admiral.onrender.com//party/getParties");
            return res.data;
        } catch(err) {
            throw err;
        }
    }
)