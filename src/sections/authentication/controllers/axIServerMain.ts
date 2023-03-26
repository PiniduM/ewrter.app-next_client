import axios from "axios";

const axIServerMain = axios.create({
  baseURL: process.env.SERVER_MAIN_URL,
  withCredentials: false,
  headers: {
    "Content-Legth": "67",
  },
});


export default axIServerMain;
