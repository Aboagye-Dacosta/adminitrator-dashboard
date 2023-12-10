import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { statusObj } from "./customer/customerSlice";

export const userRolesObj = Object.freeze({
  admin: "admin",
  superAdmin: "superAdmin",
});

const name = "auth";
const initialState = {
  status: statusObj.idle,
  errorMessage: "",
  isLoggedIn: true,
  userRole: userRolesObj.superAdmin,
};

export const validateUser = createAsyncThunk(
  "/auth/validateUser",
  ({ username, password, userRole }) => {
    return new Promise((res) => {
      return res({ username, password, userRole });
    });
  }
);

export const logoutUser = createAsyncThunk("/auth/logoutUser", async () => {});

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
      .addCase(validateUser.pending, (state) => {
        state.status = statusObj.pending;
      })
      .addCase(validateUser.fulfilled, (state, action) => {
        console.log(action.payload);
        state.status = statusObj.fulfilled;
      })
      .addCase(validateUser.rejected, (state) => {
        state.errorMessage == "Sorry could not load data";
        state.status = statusObj.error;
      })
      .addCase(logoutUser.pending, (state) => {
        state.status = statusObj.pending;
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        console.log(action.payload);
        state.status = statusObj.fulfilled;
        state.isLoggedIn = false;
      })
      .addCase(logoutUser.rejected, (state) => {
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
