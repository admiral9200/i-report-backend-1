import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getParties = createAsyncThunk(
    'party/getParties',
    async () => {
        try {
            const res = await axios.get("https://social-media-i-rport-backend-gjf3-admiral9200.vercel.app:9200/party/getParties");
            return res.data;
        } catch(err) {
            throw err;
        }
    }
)