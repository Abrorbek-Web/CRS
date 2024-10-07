import axios from "axios";
import store from "../store";
import { signOut } from "../slices/authSlice";

const baseApi = process.env.BASE_API;

interface LoginResponse {
  access: string;
  refresh: string;
  is_admin: string;
}

interface User {
  email: string;
  first_name: string;
  last_name: string;
  position: string;
  phone_number: string;
  password: string;
  company: string;
}

export const login = async (
  email: string,
  password: string
): Promise<LoginResponse> => {
  try {
    const response = await axios.post(`${baseApi}/login/`, { email, password });
    return response.data;
  } catch (err: any) {
    console.log(err, "xxx");
    console.log(err.response?.status, "salom");
    throw err;
  }
};

export const register = async (user: User): Promise<any> => {
  try {
    const response = await axios.post(`${baseApi}/register/`, user);
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const logOut = async (
  accessToken: string,
  refreshToken: string
): Promise<any> => {
  const data = {
    refresh_token: refreshToken,
  };

  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };

  try {
    const response = await axios.post(`${baseApi}/logout/`, data, { headers });
    return response.data;
  } catch (err: any) {
    store.dispatch(signOut());

    console.log(err, "xxx");
    console.log(err.response?.status, "salom");
    throw err;
  }
};
