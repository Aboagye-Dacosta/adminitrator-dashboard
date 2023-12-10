import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { readAll } from "../../load/loadData";
import { statusObj } from "../customer/customerSlice";

const name = "supplier";
const initialState = {
  status: statusObj.idle,
  errorMessage: "",
  superChecked: false,
  selectedServiceProviders: {},
  serviceProviders: [],
};

export const readAllSuppliers = createAsyncThunk(
  `${name}/getAllSuppliers`,
  async () => {
    const response = await readAll("/serviceprofile");
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
    setSelectedServiceProvider: (state, action) => {
      state.selectedServiceProviders = {
        ...state.selectedServiceProviders,
        [action.payload.id]: action.payload.isChecked,
      };
    },
    checkAllServiceProviders: (state) => {
      const selectedServiceProviders = state.selectedServiceProviders;
      for (const key in selectedServiceProviders) {
        if (Object.hasOwnProperty.call(selectedServiceProviders, key)) {
          selectedServiceProviders[key] = true;
        }
      }
      state.selectedServiceProviders = selectedServiceProviders;
    },
    uncheckAllServiceProvides: (state) => {
      const selectedServiceProviders = state.selectedServiceProviders;
      for (const key in selectedServiceProviders) {
        if (Object.hasOwnProperty.call(selectedServiceProviders, key)) {
          selectedServiceProviders[key] = false;
        }
      }
      state.selectedServiceProviders = selectedServiceProviders;
    },
    setSuperCheck: (state, action) => {
      state.superChecked = action.payload;
    },
  },
  extraReducers: (build) => {
    build
      .addCase(readAllSuppliers.pending, (state) => {
        state.status = statusObj.pending;
      })
      .addCase(readAllSuppliers.fulfilled, (state, action) => {
        if (action.payload.error) {
          state.status = statusObj.error;
          state.errorMessage = action.payload.message;
        } else {
          state.status = statusObj.fulfilled;
          state.errorMessage = action.payload.message;
          state.serviceProviders = action.payload.data;
        }
      })
      .addCase(readAllSuppliers.rejected, (state, action) => {
        state.status = statusObj.error;
        state.errorMessage = action.payload.message;
      });
  },
});

export const {
  searchServiceProvider,
  setSelectedServiceProvider,
  checkAllServiceProviders,
  uncheckAllServiceProvides,
  setSuperCheck,
} = serviceProviderSlice.actions;

export const getAllSupplier = (state) => state.serviceProvider.serviceProviders;
export const getSuperCheckedState = (state) => state.serviceProvider.superChecked;
export const getSelectedServiceProviders = (id) => (state) =>
  state.serviceProvider.selectedServiceProviders[id];
export const selectServiceProviderById = (id) => (state) =>
  state.serviceProvider.serviceProviders.filter(
    (provider) => provider._id == id
  );

export default serviceProviderSlice.reducer;
