import { configureStore } from "@reduxjs/toolkit";
import Login from "../Features/Login";

export const store = configureStore({
  reducer: {
    Login: Login,
  },
});
