import axios from "axios";

const axIEssaywriter_api = axios.create({
  baseURL: process.env.SERVER_ESSAY_WRITER_URL,
  withCredentials: false,
  headers: {
    "Content-Legth": "67",
  },
});


export default axIEssaywriter_api;
