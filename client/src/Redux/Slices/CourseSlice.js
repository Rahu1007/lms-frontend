import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../Helper/axiosInstance.js';
import { toast } from 'react-hot-toast';

const initialState = {
    courses: [],
};

export const getAllCourses = createAsyncThunk("/course/get", async () => {
    const response = axiosInstance.get("/courses");
    toast.promise(response, {
        loading: "loading course data...",
        success: "Courses loaded successfully",
        error: "Failed to get the courses",
    });

    return (await response).data;
});

const courseSlice = createSlice({
    name: 'courses',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllCourses.fulfilled, (state, action) => {
            if(action.payload?.courses) {
                state.courses = [...action.payload.courses];
            }
        })
    }
});

export default courseSlice.reducer;
