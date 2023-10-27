import axios from "axios"
import useAuth from "./useAuth";
const useRefreshToken = () => {
    const { setAuth } = useAuth();
    const { auth } = useAuth();
    const getRefreshTokenToLocalstorage = window.localStorage.getItem("refresh_token");
    console.log(getRefreshTokenToLocalstorage)
    const refresh = async () => {
        const qs = require('qs');
        let data = qs.stringify({
          'refresh_token' : `${getRefreshTokenToLocalstorage}`,
          'grant_type': 'refresh_token',
          'client_id': 'ca-website',
          'client_secret': 'nUSw2Rlf661q9b9iYwfUtj37nrHmWIi6' 
        });
        // All required config in a one place
        let config = {
          method: 'post',
          maxBodyLength: Infinity,
          url: `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_LOGIN_REFRESH_TOKEN_URL}`,
          headers: { 
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          withCredentials:true,
          data : data,
        };
        const response = await axios.request(config)
        console.log("response refres token" + JSON.stringify(response?.data?.refresh_token))
        console.log("response Access token" + JSON.stringify(response?.data?.access_token))
        setAuth(prev => {
            // Old Access Token and Refresh token in prev State
            console.log(JSON.stringify(prev));
            // Get New Access token in the Refresh token
            console.log(response?.data?.acces_token)
            // localStorage.setItem("Refresh Token", `${response?.data?.refresh_token}`);
            return {
              ...prev, 
              roles: auth?.roles,
              accesToken: response?.data?.acces_token,
              refreshAccessToken: response?.data?.refresh_token,
            }
        });
        console.log("Refresh token send to Access token " + JSON.stringify(response.data.access_token))
        return response.data.access_token
    }
    return refresh;
}

export default useRefreshToken
