import { configureStore } from '@reduxjs/toolkit';
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query';
// import { ProductApi } from './services/ProductRTK';
import { BaseApi } from './services/rtkQ';
// import { CategoryRTK } from './services/CategoryRTK';

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    // [ProductApi.reducerPath]: ProductApi.reducer,
    [BaseApi.reducerPath]: BaseApi.reducer,
    // [CategoryRTK.reducerPath]: CategoryRTK.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(BaseApi.middleware),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
