/* eslint-disable @typescript-eslint/no-explicit-any */
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { State } from "../../model/application/state";
import { App } from "../../model/application/payload";

const initialState: State.App = {
  request: undefined,
  response: undefined,
  current: 0,
  limit: 10,
  page: 1,
  action: "CREATE",
};

const AppSlice = createSlice({
  name: "appSlice",
  initialState,
  reducers: {
    setAppKey: (state, action: PayloadAction<App>) => {
      const key: keyof State.App = action.payload.key;
      state = {
        ...state,
        [key]: action.payload.value,
      };
      return state;
    },
    setAllAppKeys: (state, action: PayloadAction<State.App>) => {
      state = action.payload as any;
      return state;
    },
  },
});

export const { setAllAppKeys, setAppKey } = AppSlice.actions;
export const appReducer = AppSlice.reducer;
