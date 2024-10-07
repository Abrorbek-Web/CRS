import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  getAccessToken,
  getRefreshToken,
  saveAccessToken,
  saveRefreshToken,
  deleteAccessToken,
  deleteRefreshToken,
} from "../helpers/persistence-storage";

const accessToken = getAccessToken();
const refreshToken = getRefreshToken();
const ADMIN_KEY = "isAdmin";
const isAdmin = localStorage.getItem(ADMIN_KEY);

interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  isAdmin: string | null;
}

const initialState: AuthState = {
  accessToken,
  refreshToken,
  isAdmin,
};

interface SignInPayload {
  access: string;
  refresh: string;
  is_admin: string;
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signIn: (state, action: PayloadAction<SignInPayload>) => {
      const { refresh, access, is_admin } = action.payload;
      saveAccessToken(access);
      saveRefreshToken(refresh);

      if (is_admin) {
        localStorage.setItem(ADMIN_KEY, is_admin);
      }

      state.accessToken = access;
      state.refreshToken = refresh;
      state.isAdmin = is_admin;
    },
    signOut: (state) => {
      deleteAccessToken();
      deleteRefreshToken();
      localStorage.removeItem(ADMIN_KEY);

      state.accessToken = null;
      state.refreshToken = null;
      state.isAdmin = null;
    },
  },
});

export const { signIn, signOut } = authSlice.actions;
export default authSlice.reducer;
