import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { readAll } from "../load/loadData";
import { statusObj } from "./customerSlice";

const name = "supplier";
const initialState = {
  status: statusObj.idle,
  suppliers: [],
};

export const readAllSuppliers = createAsyncThunk(
  `${name}/getAllSuppliers`,
  async () => {
    const response = await readAll("/serviceprofile");
    return response.data;
  }
);

const serviceProviderSlice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build
      .addCase(readAllSuppliers.pending, (state) => {
        state.status = statusObj.pending;
      })
      .addCase(readAllSuppliers.fulfilled, (state, action) => {
        state.status = statusObj.fulfilled;
        state.suppliers = action.payload;
      })
      .addCase(readAllSuppliers.rejected, (state) => {
        state.status = statusObj.error;
      });
  },
});

export const getAllSupplier = (sate) => sate.serviceProvider.suppliers;

export default serviceProviderSlice.reducer;
