import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3443/api",
  withCredentials: true,
});

console.log(process.env.REACT_APP_API);

export default axiosInstance;
