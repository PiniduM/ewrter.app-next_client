import axios from "axios";

const axIService_api = axios.create({
  baseURL: process.env.SERVER_SERVICE_URL,
  withCredentials: false,
  headers: {
    "Content-Legth": "67",
  },
});


export default axIService_api;
