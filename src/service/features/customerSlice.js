import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { readAll } from "../load/loadData";

export const statusObj = Object.freeze({
  idle: "idle",
  pending: "pending",
  fulfilled: "fulfilled",
  error: "error",
});

const name = "customer";
const initialState = {
  status: statusObj.idle,
  errorMessage: "",
  customers: [],
};

export const readAllCustomers = createAsyncThunk(
  `${name}/readAllCustomers`,
  async () => {
    const response = await readAll("/customerprofile");
    return response;
  }
);

const customerSlice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(readAllCustomers.pending, (state) => {
        state.status = statusObj.pending;
      })
      .addCase(readAllCustomers.fulfilled, (state, action) => {
        if (action.payload.error) {
          state.status = statusObj.error;
          state.errorMessage = action.payload.message;
        } else {
          state.customers = action.payload.data;
          state.status = statusObj.fulfilled;
        }
      })
      .addCase(readAllCustomers.rejected, (state) => {
        state.errorMessage == "Sorry could not load data";
        state.status = statusObj.error;
      });
  },
});

export const getAllCustomers = (state) => state.customer.customers;
// export const {} = customerSlice.actions;
export default customerSlice.reducer;
