import { createAsyncThunk } from "@reduxjs/toolkit";

export const setCurrentRoute = createAsyncThunk(
    'route/setCurrentRoute',
    async (route) => {
        return route;
    }
)