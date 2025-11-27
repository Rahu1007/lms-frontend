import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../Helper/axiosInstance.js";
import toast from "react-hot-toast";

const initialState = {
    key: "",
    subscription_id: "",
    isPaymentVerified: false,
    allPayments: {},
    finalMonth: {},
    monthlySalesRecord: [],
};

export const getRazorPayId = createAsyncThunk("/razorpay/getId", async () => {
    try {
        const response = await axiosInstance.get("/payment/razorpay-key");
        return response.data;
    } catch {
        toast.error("Failed to load data");
    }
});

export const purchaseCourseBundle = createAsyncThunk("/purchaseCourse", async () => {
    try {
        const response = await axiosInstance.post("/payment/subscribe");
        return response.data;
    } catch (error) {
        toast.error(error?.response?.data?.message || "Subscription failed");
    }
});

export const verifyUserPayment = createAsyncThunk("/payment/verify", async (data) => {
    try {
        const response = await axiosInstance.post("/payment/verify", {
            razorpay_payment_id: data.razorpay_payment_id,
            razorpay_subscription_id: data.razorpay_subscription_id,
            razorpay_signature: data.razorpay_signature,
        });
        return response.data;
    } catch (error) {
        toast.error(error?.response?.data?.message || "Payment verification failed");
    }
});

export const getPaymentRecord = createAsyncThunk("/payments/record", async () => {
    try {
        const response = axiosInstance.get("/payment?count=100");
        toast.promise(response, {
            loading: "Getting the payment records...",
            success: (data) => {
                return data?.data?.message || "Payment records loaded successfully";
            },
            error: "Failed to get payment records",
        });
        return (await response).data;
    } catch {
        toast.error("Operation failed");
    }
});

export const cancelCourseBundle = createAsyncThunk("/payments/cancel", async () => {
    try {
        const response = axiosInstance.post("/payment/unsubscribe");
        toast.promise(response, {
            loading: "Unsubscribing the bundle...",
            success: (data) => {
                return data?.data?.message || "Unsubscribed successfully";
            },
            error: "Failed to unsubscribe",
        });
        return (await response).data;
    } catch {
        toast.error("Failed to unsubscribe");
    }
});

const razorpaySlice = createSlice({
    name: "razorpay",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getRazorPayId.fulfilled, (state, action) => {
                state.key = action?.payload?.key;
            })
            .addCase(purchaseCourseBundle.fulfilled, (state, action) => {
                state.subscription_id = action?.payload?.subscription_id;
            })
            .addCase(verifyUserPayment.fulfilled, (state, action) => {
                toast.success(action?.payload?.message || "Payment verified successfully");
                state.isPaymentVerified = action?.payload?.success;
            })
            .addCase(verifyUserPayment.rejected, (state, action) => {
                toast.error(action?.payload?.message || "Payment verification failed");
                state.isPaymentVerified = action?.payload?.success;
            })
            .addCase(getPaymentRecord.fulfilled, (state, action) => {
                state.allPayments = action?.payload?.allPayments;
                state.finalMonth = action?.payload?.finalMonth;
                state.monthlySalesRecord = action?.payload?.monthlySalesRecord;
            });
    },
});

export default razorpaySlice.reducer;