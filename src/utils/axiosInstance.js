import axios from "axios";

const baseURL = "https://api.popules.com";
const api = axios.create({
  baseURL: baseURL,
});

export default api;
