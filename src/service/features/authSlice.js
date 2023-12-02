import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { statusObj } from "./customerSlice";

export const userRolesObj = Object.freeze({
  admin: "admin",
  superAdmin: "superAdmin",
});

const name = "auth";
const initialState = {
  status: statusObj.idle,
  errorMessage: "",
  isLoggedIn: false,
  userRole: userRolesObj.superAdmin,
};

const login = createAsyncThunk(
  "/auth/login",
  ({ email, password, userRole }) => {}
);

const authSlice = createSlice({
  name,
  initialState,
  reducers: {
    setUserRole: (state, action) => {
      state.userRole = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(login.pending, (state) => {
        state.status = statusObj.pending;
      })
      .addCase(login.fulfilled, (state, action) => {
        if (action.payload.error) {
          state.status = statusObj.error;
          state.errorMessage = action.payload.message;
        } else {
          state.customers = action.payload.data;
          state.status = statusObj.fulfilled;
        }
      })
      .addCase(login.rejected, (state) => {
        state.errorMessage == "Sorry could not load data";
        state.status = statusObj.error;
      });
  },
});

export const { setUserRole } = authSlice.actions;
export const getLoggedInState = (state) => state.auth.isLoggedIn;
export const getUserRole = (state) => state.auth.userRole;
// export const {} = customerSlice.actions;
export default authSlice.reducer;
