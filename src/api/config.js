import axios from "axios";

const baseURL = process.env.REACT_APP_API_BASE_URL;

const axiosInstance = axios.create({ baseURL, timeout: 10000 });

axiosInstance.interceptors.response.use(
  (result) => {
    return result.data;
  },
  (e) => {
    console.error(e);
  }
);

export { axiosInstance };
