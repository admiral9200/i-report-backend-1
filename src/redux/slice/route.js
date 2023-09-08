import { createSlice } from "@reduxjs/toolkit";
import { setCurrentRoute } from "../actions/route";

export const routeSlice = createSlice({
    name: 'route',
    initialState: {
        currentRoute: '/'
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(setCurrentRoute.fulfilled, (state, action) => {
                state.currentRoute = action.payload;
            })
    }
})

export default routeSlice.reducer;