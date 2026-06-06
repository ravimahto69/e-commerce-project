import axios from "axios";

console.log("Backend URL:", import.meta.env.REACT_APP_BACKEND_URL);

const API = axios.create({
  baseURL: "https://shopzen.up.railway.app",
});

API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default API;