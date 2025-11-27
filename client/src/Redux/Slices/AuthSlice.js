import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axiosInstance from "../../Helper/axiosInstance.js";

const storedData = localStorage.getItem('data');

let parsedData = {};
if (storedData && storedData !== "undefined") {
    try {
        parsedData = JSON.parse(storedData);
    } catch {
        localStorage.removeItem('data');
    }
}

const initialState = {
    isLoggedIn: localStorage.getItem('isLoggedIn') === 'true' || false,
    role: localStorage.getItem('role') || "",
    data: parsedData
};

export const login = createAsyncThunk("/auth/login", async (data, { rejectWithValue }) => {
    try {
        const response = await axiosInstance.post("user/login", data);
        if (response.data && response.data.user) {
            toast.success(response.data.message || "Login successful! Done.");
            return response.data;
        } else {
            const errorMessage = response.data.message || "Login failed: No user data received.";
            toast.error(errorMessage);
            return rejectWithValue(errorMessage);
        }
    } catch (error) {
        const errorMessage = error?.response?.data?.message || "Failed to log in";
        toast.error(errorMessage);
        return rejectWithValue(errorMessage);
    }
});

export const logout = createAsyncThunk("/auth/logout", async (_, { rejectWithValue }) => {
    try {
        const response = await axiosInstance.post("user/logout");
        toast.success(response.data.message || "Logout successful!");
        return response.data;
    } catch (error) {
        const errorMessage = error?.response?.data?.message || "Failed to log out";
        toast.error(errorMessage);
        return rejectWithValue(errorMessage);
    }
});

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(login.fulfilled, (state, action) => {
                localStorage.setItem("data", JSON.stringify(action?.payload?.user));
                localStorage.setItem("isLoggedIn", true);
                localStorage.setItem("role", action?.payload?.user?.role);
                state.isLoggedIn = true;
                state.data = action?.payload?.user;
                state.role = action?.payload?.user?.role;
            })
            .addCase(logout.fulfilled, (state) => {
                localStorage.clear();
                state.data = {};
                state.isLoggedIn = false;
                state.role = "";
            });
    }
});

export default authSlice.reducer;