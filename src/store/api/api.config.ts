/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { FORM_METHODS } from "../../utils/helpers";
import { State } from "../../model/application/state";
import { notification } from "antd";

export const baseUrl = import.meta.env.VITE_APP_BASE_URL;

type BaseQueryType = ReturnType<typeof fetchBaseQuery>;

export const baseQueryWithReauth: (baseQuery: BaseQueryType) => BaseQueryType =
  (baseQuery) => async (args, api, extraOptions) => {
    const result: any = await baseQuery(args, api, extraOptions);

    if (result.error && result.error.status === 403) {
      notification.open({
        message:
          result.error?.data?.message ??
          result.error?.data?.responseMessage ??
          "You do not have permissions to perform this action",
        type: "error",
      });
    }
    if (result.error && result.error.status === 401) {
      notification.open({
        message:
          result.error?.data?.message ??
          result.error?.data?.responseMessage ??
          "Unauthorized!, Please login",
        type: "error",
      });
      sessionStorage.clear();
      window.location.href = "/";
    }
    return result;
  };

export const baseQuery = fetchBaseQuery({
  baseUrl,
});

export const globalApi = createApi({
  reducerPath: "globalApi",
  baseQuery: baseQueryWithReauth(baseQuery),
  refetchOnReconnect: true,
  refetchOnMountOrArgChange: true,
  tagTypes: ["GetData"],
  endpoints: (builder) => ({
    getData: builder.query({
      query: (data) => {
        return {
          url: data.getUrl,
        };
      },
      providesTags: ["GetData"],
    }),
    getDataOnClick: builder.query({
      query: (data) => {
        return {
          url: data.getUrl,
        };
      },
    }),
    postData: builder.mutation({
      query: (data: State.App | any) => {
        return {
          url: data.postUrl,
          method: FORM_METHODS.POST,
          body: data.request,
        };
      },
      invalidatesTags: (_result, _error, arg) => [
        { type: "GetData", id: arg._id },
      ],
    }),
    updateData: builder.mutation({
      query: (data: State.App | any) => {
        return {
          url: data.postUrl,
          method: FORM_METHODS.PUT,
          body: data.request,
        };
      },
      invalidatesTags: (_result, _error, arg) => [
        { type: "GetData", id: arg._id },
      ],
    }),
    deleteData: builder.mutation({
      query: (data) => {
        return {
          url: data.deleteUrl,
          method: FORM_METHODS.DELETE,
        };
      },
      invalidatesTags: (_result, _error, arg) => [
        { type: "GetData", id: arg._id },
      ],
    }),
    authPostData: builder.mutation({
      query: (data: any) => {
        return {
          url: data.postUrl,
          method: FORM_METHODS.POST,
          body: data.request,
        };
      },
    }),
  }),
});

export const {
  useGetDataQuery,
  useLazyGetDataQuery,
  usePostDataMutation,
  useAuthPostDataMutation,
  useGetDataOnClickQuery,
  useLazyGetDataOnClickQuery,
  useUpdateDataMutation,
  useDeleteDataMutation,
} = globalApi;
