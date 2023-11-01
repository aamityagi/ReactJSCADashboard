import axios from "axios";
const baseURL = `${process.env.REACT_APP_API_URL}`
const getPostURL = `${process.env.REACT_APP_GET_POST_API_URL}`
export default axios.create({
    baseURL: getPostURL,
});

export const axiosPrivate = axios.create({
    url: getPostURL,
    headers: { 
    'Content-Type': 'application/json'
    },
    withCredentials:true,
});