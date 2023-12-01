import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { readAll } from "../load/loadData";

export const statusObj = Object.freeze({
  idle: "idle",
  pending: "pending",
  fulfilled: "fulfilled",
});

const name = "customer";
const initialState = {
  status: statusObj.idle,
  customers: [],
};

export const readAllCustomers = createAsyncThunk(
  `${name}/readAllCustomers`,
  async () => {
    const response = await readAll("/customerprofile");
    return response.data;
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
        state.customers = action.payload;

        state.status = statusObj.fulfilled;
      });
  },
});

export const getAllCustomers = (state) => state.customer.customers;
// export const {} = customerSlice.actions;
export default customerSlice.reducer;
