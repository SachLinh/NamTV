/* eslint-disable no-unused-vars */
/** @format */

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const init = {
  loading: false,
  listUser: [],
  detailUser: null,
  dialogLogin: false,
  actionType: "LOGIN",
};

export const authslice = createSlice({
  name: "Auth",
  initialState: init,
  reducers: {
    showDialogLogin: (state) => {
      return { ...state, dialogLogin: true };
    },
    hideDialogLogin: (state) => {
      return { ...state, dialogLogin: false };
    },
    changeActionType: (state, data) => {
      return { ...state, actionType: data.payload };
    },
  },
});
export const { showDialogLogin, hideDialogLogin, changeActionType } =
  authslice.actions;
export default authslice.reducer;
