import axios from "axios";

// const baseDomain = "http://localhost:3100";
const baseDomain = 'http://192.168.18.17:3000';
const baseURL = `${baseDomain}`;

// Create a function to update the axios instance headers
const updateAuthorizationHeader = () => {
  const token = localStorage.getItem("token");
  axiosInstance.defaults.headers.common["Authorization"] = token || "";
};

const axiosInstance = axios.create({
  baseURL,
});

// Update the Authorization header when initializing
updateAuthorizationHeader();

axiosInstance.interceptors.request.use(
  (config) => {
    updateAuthorizationHeader(); // Update the Authorization header before each request
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;