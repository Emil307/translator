import axios from "axios";
const API_URL = process.env.EXPO_PUBLIC_API_URL;

export const $api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
  timeout: 10000,
});

export const $apiFile = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "multipart/form-data",
  },
  withCredentials: true,
});
