import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { readAll, updateById } from "../load/loadData";

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

export const updateCustomerById = createAsyncThunk(
  `${name}/updateCustomerById`,
  async ({ id, data }) => {
    const response = await updateById({ id, data }, "/customerprofile");
    return response;
  }
);
export const createCustomer = createAsyncThunk(
  `${name}/createCustomer`,
  async (data) => {
    const response = await updateById(data, "/customerprofile");
    return response;
  } 
);

const customerSlice = createSlice({
  name,
  initialState,
  reducers: {
    searchUser: (state, action) => {
      console.log(action.payload);
      state.customers = state.customers.filter(
        (customer) =>
          customer.name.toLowerCase().includes(action.payload) ||
          customer.email.toLowerCase().includes(action.payload)
      );
    },
  },
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

export const { searchUser } = customerSlice.actions;

export const getAllCustomers = (state) => state.customer.customers;
export const selectCustomerById = (id) => (state) =>
  state.customer.customers.filter((customer) => customer._id === id);
export default customerSlice.reducer;
