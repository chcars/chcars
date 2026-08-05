import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL || "";

const axiosClient = axios.create({
    baseURL: apiUrl.endsWith("/api") ? apiUrl : `${apiUrl.replace(/\/$/, "")}/api`
});

export default axiosClient;