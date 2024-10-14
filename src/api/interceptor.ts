import { onLogout } from "@/components/hooks/useAuth";
import { environment } from "@/environments/environment";
import axios from "axios";

// Axios instance
const axiosInstance = axios.create({
  baseURL: environment.DEV_URL,
});

// Request Interceptor to attach token
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      // Token expired or invalid, redirect to login
      onLogout();
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
