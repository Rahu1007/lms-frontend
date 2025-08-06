import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from './AuthSlice';
import courseSliceReducer from './CourseSlice';


const store=configureStore({
    reducer:{
        auth:authSliceReducer,
        course: courseSliceReducer
    },
    devTools:true
});

export default store;