import axios from "axios";

export default axios.create({
    baseURL: process.env.REACT_API_URL
});

export const axiosPrivate = axios.create({
    baseURL: process.env.REACT_API_URL,
    headers: {'Content-Type': 'application/json'},
    withCredentials: true
});