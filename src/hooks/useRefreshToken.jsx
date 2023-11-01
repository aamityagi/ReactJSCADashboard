import axios from "axios"
import useAuth from "./useAuth";
const useRefreshToken = () => {
    const { setAuth } = useAuth();
    const { auth } = useAuth();
    const getRefreshTokenToLocalstorage = auth.refreshToken;
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
        setAuth(prev => {
            return {
              ...prev, 
              roles: auth?.roles,
              accesToken: response?.data?.acces_token,
              refreshAccessToken: response?.data?.refresh_token,
            }
        });
        return response.data.access_token
    }
    return refresh;
}

export default useRefreshToken
