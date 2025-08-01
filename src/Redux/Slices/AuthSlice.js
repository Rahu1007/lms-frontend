import { createSlice } from "@reduxjs/toolkit";

const storedData = localStorage.getItem('data');

const initialState = {
    isLoggedIn: localStorage.getItem('isLoggedIn') === 'true' || false,
    role: localStorage.getItem('role') || "",
    data: storedData ? JSON.parse(storedData) : {}
};

const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
        login: (state, action) => {
            state.isLoggedIn = true;
            state.role = action.payload.role;
            state.data = action.payload.data;
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('role', action.payload.role);
            localStorage.setItem('data', JSON.stringify(action.payload.data));
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.role = "";
            state.data = {};
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('role');
            localStorage.removeItem('data');
        }
    },
});

export const { login, logout }=authSlice.actions;

export default authSlice.reducer;