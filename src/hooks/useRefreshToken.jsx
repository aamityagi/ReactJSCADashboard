import axios from "axios"
import useAuth from "./useAuth";
import { useState } from "react";
import { useEffect } from "react";

const useRefreshToken = () => {
    const { setAuth } = useAuth();
    const { auth } = useAuth();
    const [refreshToken, setRefreshToken] = useState(()=>{
      return auth?.refreshAccessToken;
    })
    console.log("refresh token state:- " + refreshToken)
    const refresh = async () => {
        const qs = require('qs');
        let data = qs.stringify({
          'refresh_token' : `${refreshToken}`,
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
          data : data,
        };
        const response = await axios.request(config, {withCredentials:true})
        setRefreshToken(response.data.access_token)
        setAuth(prev => {
            console.log(JSON.stringify(prev));
            console.log("refresh Token:- " + response.data.refresh_token)
            console.log({...prev})
            console.log(auth?.roles)
            return {
              ...prev, 
              roles: auth?.roles,
              accessToken: response.data.refresh_token
            }
        });
        return response.data.refresh_token
    }
    return refresh;
}

export default useRefreshToken
