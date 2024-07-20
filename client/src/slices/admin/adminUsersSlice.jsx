import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [],
    loading: false,
    error: null,
    };

const adminUsersSlice = createSlice({
    name: "adminUsers",
    initialState,
    reducers: {
        getUsersRequest: (state) => {
            state.loading = true;
            state.error = null;
        },
        getUsersSuccess: (state, action) => {
            state.users = action.payload;
            state.loading = false;
        },
        getUsersFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { getUsersRequest, getUsersSuccess, getUsersFailure } = adminUsersSlice.actions;

export default adminUsersSlice.reducer;