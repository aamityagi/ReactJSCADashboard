import axios from "axios";
const baseApiURL = `${process.env.REACT_APP_API_URL}`
export default axios.create({
    baseURL: baseApiURL,
});

export const axiosPrivate = axios.create({
    url: baseApiURL,
    headers: { 
    'Content-Type': 'application/json'
    },
    withCredentials:true,
});