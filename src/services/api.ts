import axios from "axios";

const api = axios.create({
  // baseURL: "https://projetobluem4-xboxlive-production.up.railway.app",
  baseURL: "http://localhost:3555",
});

api.interceptors.request.use((config: any) => {
  try {
    const token = localStorage.getItem("jwt");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
    
  } catch (error: any) {
    console.log(error);
  }
});

export default api;
