import { configureStore } from "@reduxjs/toolkit";
import customerSlice from "./features/customerSlice";
import navigationSlice from "./features/navigation_slice";
import paymentSlice from "./features/paymentSlice";
import serviceProviderAndCustomerSlice from "./features/serviceProviderAndCustomerSlice";
import serviceProviderSlice from "./features/serviceProviderSlice";
import serviceRequestSlice from "./features/serviceRequestSlice";
import serviceSlice from "./features/serviceSlice";
import authSlice from "./features/authSlice";

const store = configureStore({
  reducer: {
    navigationController: navigationSlice,
    customer: customerSlice,
    serviceProvider: serviceProviderSlice,
    payment: paymentSlice,
    serviceProviderAndCustomer: serviceProviderAndCustomerSlice,
    service: serviceSlice,
    serviceRequest: serviceRequestSlice,
    auth:authSlice
  },
});

export default store;
