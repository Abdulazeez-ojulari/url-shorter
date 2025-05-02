import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
} from "@reduxjs/toolkit";
import { appReducer, setAppKey, setAllAppKeys } from "./slice/app";
import {
  globalApi,
  useGetDataQuery,
  usePostDataMutation,
  useLazyGetDataQuery,
  useAuthPostDataMutation,
  useGetDataOnClickQuery,
  useLazyGetDataOnClickQuery,
  useUpdateDataMutation,
  useDeleteDataMutation,
} from "./api/api.config";
import { setupListeners } from "@reduxjs/toolkit/query/react";

const rootReducer = combineReducers({
  app: appReducer,
  [globalApi.reducerPath]: globalApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: import.meta.env.PROD === false,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    }).concat(globalApi.middleware);
  },
});

// enable listener behavior for the store
setupListeners(store.dispatch);

export {
  setAppKey,
  setAllAppKeys,
  useGetDataQuery,
  usePostDataMutation,
  useLazyGetDataQuery,
  useAuthPostDataMutation,
  useGetDataOnClickQuery,
  useLazyGetDataOnClickQuery,
  useUpdateDataMutation,
  useDeleteDataMutation,
};

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
