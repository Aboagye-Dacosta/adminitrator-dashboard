import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { readAll } from "../load/loadData";
import { statusObj } from "./customerSlice";

const name = "payment";
const initialState = {
  status: statusObj.idle,
  payments: [],
};

export const readAllPayments = createAsyncThunk(
  `${name}/readAllPayments`,
  async () => {
    const response = await readAll("/payments");
    return response.data;
  }
);

const paymentSlice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(readAllPayments.pending, (state) => {
        state.status = statusObj.pending;
      })
      .addCase(readAllPayments.fulfilled, (state, action) => {
        state.payments = action.payload;

        state.status = statusObj.fulfilled;
      });
  },
});

export const getAllPayments = (state) => state.payment.payments;

export default paymentSlice.reducer;
