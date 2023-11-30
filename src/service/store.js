import { configureStore } from "@reduxjs/toolkit";
import navigationSlice from "./features/navigation_slice";
import pageManagementSlice from "./features/page_management_slice";

const store = configureStore({
  reducer: {
    pageManagement: pageManagementSlice.reducer,
    navigationController: navigationSlice.reducer,
  },
});

export default store;
