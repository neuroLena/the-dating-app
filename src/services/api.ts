import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "https://60aa8be766f1d00017772f6a.mockapi.io",

  baseURL: 'https://jsonplaceholder.typicode.com',
});

export default axiosInstance;
