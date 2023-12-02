import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { readAll } from "../load/loadData";
import { statusObj } from "./customerSlice";

const name = "payment";
const initialState = {
  status: statusObj.idle,
  serviceRequests: [],
};

export const readAllServiceRequests = createAsyncThunk(
  `${name}/readAllServiceRequests`,
  async () => {
    const response = await readAll("/payments");
    return response.data;
  }
);

export const readServiceRequestsByCustomerEmail = createAsyncThunk(
  `${name}/readServiceRequestsByCustomerEmail`,
  async (email) => {
    const response = await readAll(`/servicerequest/customer/${email}`);
    return response.data;
  }
);

export const readServiceRequestsByServiceProviderEmail = createAsyncThunk(
  `${name}/readServiceRequestsByServiceProviderEmail`,
  async (email) => {
    const response = await readAll(`/servicerequest/serviceprovider/${email}`);
    return response.data;
  }
);

const serviceRequestSlice = createSlice({
  name,
  initialState,
  reducers: {
    resetPaymentStatus: (state) => {
      state.status = statusObj.idle;
    },
    searchServiceRequests: (state, action) => {
      state.serviceRequests = state.payments.filter(
        (customer) =>
          customer.requestNumber.toLowerCase().includes(action.payload) ||
          customer.customerEmail.toLowerCase().includes(action.payload) ||
          customer.category.toLowerCase().includes(action.payload) ||
          customer.subcategory.toLowerCase().includes(action.payload)
      );
    },
  },
  extraReducers(builder) {
    builder
      .addCase(readAllServiceRequests.pending, (state) => {
        state.status = statusObj.pending;
      })
      .addCase(readAllServiceRequests.fulfilled, (state, action) => {
        state.serviceRequests = action.payload;

        state.status = statusObj.fulfilled;
      })
      .addCase(readServiceRequestsByCustomerEmail.pending, (state) => {
        state.status = statusObj.pending;
      })
      .addCase(
        readServiceRequestsByCustomerEmail.fulfilled,
        (state, action) => {
          state.status = statusObj.fulfilled;
          state.serviceRequests = action.payload;
        }
      )
      .addCase(readServiceRequestsByServiceProviderEmail.pending, (state) => {
        state.status = statusObj.pending;
      })
      .addCase(
        readServiceRequestsByServiceProviderEmail.fulfilled,
        (state, action) => {
          state.status = statusObj.fulfilled;
          state.serviceRequests = action.payload;
        }
      );
  },
});

export const { resetPaymentStatus, searchServiceRequests } =
  serviceRequestSlice.actions;

export const getAllServiceRequests = (state) =>
  state.serviceRequest.serviceRequests;

export default serviceRequestSlice.reducer;
