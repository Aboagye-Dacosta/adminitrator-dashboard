import { configureStore } from "@reduxjs/toolkit";
import customerSlice from "./features/customerSlice";
import navigationSlice from "./features/navigation_slice";
import paymentSlice from "./features/paymentSlice";
import supplierSlice from "./features/serviceProviderSlice";

const store = configureStore({
  reducer: {
    navigationController: navigationSlice,
    customer: customerSlice,
    supplier: supplierSlice,
    payment: paymentSlice,
  },
});

export default store;
