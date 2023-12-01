import { createSlice } from "@reduxjs/toolkit";

const name = "navigationSlice";
const initialState = {
  open: true,
};

const navigationSlice = createSlice({
  name,
  initialState,
  reducers: {
    setNavigationState: (state, action) => {
      state.open = action.payload;
      console.log(state.open)
    },
  },
});

export const { setNavigationState } = navigationSlice.actions;
export const selectNavState = (state) => state.navigationController.open;

export default navigationSlice.reducer;
