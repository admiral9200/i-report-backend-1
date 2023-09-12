import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../slice/auth";
import routeSlice from "../slice/route";
import profileSlice from "../slice/profile";
import electionSlice from "../slice/election";
import partySlice from "../slice/party";
import voteSlice from "../slice/vote";

const rootReducer = {
    auth: authSlice,
    route: routeSlice,
    profile: profileSlice,
    election: electionSlice,
    party: partySlice,
    vote: voteSlice
}

export default configureStore({
    reducer: rootReducer
});