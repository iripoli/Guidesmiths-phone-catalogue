import axios from "axios";

export const APIKit = axios.create({
  baseURL: "http://localhost:3005/api/phones",
  timeout: 10000,
});
