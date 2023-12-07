import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { readAll, updateById } from "../load/loadData";
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


export const updateServiceProviderById = createAsyncThunk(
  `${name}/updateServiceProviderById`,
  async ({ id, data }) => {
    const response = await updateById({ id, data }, "/customerprofile");
    return response;
  }
);

const serviceProviderSlice = createSlice({
  name,
  initialState,
  reducers: {
    searchServiceProvider: (state, action) => {
      state.suppliers = state.suppliers.filter(
        (customer) =>
          customer.name.toLowerCase().includes(action.payload) ||
          customer.email.toLowerCase().includes(action.payload)
      );
    },
  },
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
      })
      .addCase(updateServiceProviderById.pending, (state) => {
        state.status = statusObj.pending;
      })
      .addCase(updateServiceProviderById.fulfilled, (state, action) => {
        state.status = statusObj.fulfilled;
        state.suppliers = action.payload;
      })
      .addCase(updateServiceProviderById.rejected, (state) => {
        state.status = statusObj.error;
      });
  },
});

export const { searchServiceProvider } = serviceProviderSlice.actions;

export const getAllSupplier = (sate) => sate.serviceProvider.suppliers;
export const selectServiceProviderById = (id) => (state) =>
  state.serviceProvider.suppliers.filter((provider) => provider._id == id);

export default serviceProviderSlice.reducer;
