import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loadAllSuppliers } from "../load/loadSuppliers";
import { statusObj } from "./customerSlice";

const name = "supplier";
const initialState = {
  status: statusObj.idle,
  suppliers: [],
};

export const readAllSuppliers = createAsyncThunk(
  `${name}/getAllSuppliers`,
  async () => {
      const response = await loadAllSuppliers("/serviceprovider");
      return response.data;
  }
);

const supplierSlice = createSlice({
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
      });
  },
});

export const getAllSupplier = (sate) => sate.supplier.suppliers;

export default supplierSlice.reducer;
