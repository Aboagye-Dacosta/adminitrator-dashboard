import { configureStore } from "@reduxjs/toolkit";
import pageManagementSlice from "./slices/page_management_slice";

const store = configureStore({
    reducer: {
    
    pageManagement: pageManagementSlice.reducer,
  },
});

export default store;
