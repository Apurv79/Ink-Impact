import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    userData: JSON.parse(localStorage.getItem("userData")) || null, // Load from storage
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload;
            localStorage.setItem("userData", JSON.stringify(action.payload)); // Persist user data
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;
            localStorage.removeItem("userData"); // Clear on logout
        },
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
