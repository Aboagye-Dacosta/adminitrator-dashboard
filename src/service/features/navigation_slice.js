import { createSlice } from "@reduxjs/toolkit";

const name = "navigationSlice";
const initialState = {
  open: false,
  sideTwo: false,
  isAlertOpen: false,
  alertData: {
    icon: "",
    message: "",
    bgColor: "",
    iconColor: "",
  },
};

const navigationSlice = createSlice({
  name,
  initialState,
  reducers: {
    setNavigationState: (state, action) => {
      state.open = action.payload;
      state.sideTwo = false;
    },
    toggleSideTwo: (state) => {
      state.sideTwo = !state.sideTwo;
      state.open = false;
    },
    setAlertData: (state, action) => {
      state.alertData = action.payload;
    },
    toggleAlert: (state) => {
      state.isAlertOpen = !state.isAlertOpen;
    },
  },
});

export const { setNavigationState, toggleSideTwo, toggleAlert, setAlertData } =
  navigationSlice.actions;
export const selectNavState = (state) => state.navigationController.open;
export const selectSideTwo = (state) => state.navigationController.sideTwo;
export const getAlertData = (state) => state.navigationController.alertData;
export const getAlertStatus = (state) => state.navigationController.isAlertOpen;

export default navigationSlice.reducer;
