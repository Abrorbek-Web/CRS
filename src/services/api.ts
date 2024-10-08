import axios from "axios";

import { getAccessToken } from "../helpers/persistence-storage";
import { signOut } from "../slices/authSlice";
import store from "../store";

axios.defaults.baseURL = "https://287d-213-230-87-114.ngrok-free.app/api/v1/";

axios.interceptors.request.use(
  (config) => {
    const token = getAccessToken();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response.status === 403) {
      store.dispatch(signOut());
    }
    return Promise.reject(error);
  }
);

export default axios;
