import { configureStore } from "@reduxjs/toolkit"
import authSlice from "./slices/authSlice"
import productSlice from "./slices/productSlice"

export const store = configureStore({
  reducer: {
    auth: authSlice,
    products: productSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
      },
    }),
})

export default store
