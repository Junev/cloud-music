import axios from "axios";

const baseURL = "http://localhost:4000";

const axiosInstance = axios.create({ baseURL, timeout: 1000 });

axiosInstance.interceptors.response.use(
  (result) => {
    return result.data;
  },
  (e) => {
    console.error(e);
  }
);

export { axiosInstance };
