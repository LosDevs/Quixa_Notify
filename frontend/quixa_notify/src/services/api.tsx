import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

api.interceptors.request.use(async (config) => {
  const token = JSON.parse(localStorage.getItem('token') || 'null');
  const tmpConfig = config;
    if (token) {
      tmpConfig.headers.Authorization = `Bearer ${token}`;
    }
  return config;
});

export { api };
