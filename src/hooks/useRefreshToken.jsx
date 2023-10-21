import axios from "axios"
import useAuth from "./useAuth";
import { useState } from "react";


const useRefreshToken = () => {
    const { setAuth } = useAuth();
    const { auth } = useAuth();
    const refresh = async () => {
        const qs = require('qs');
        let data = qs.stringify({
          'refresh_token' : `${auth.refreshAccessToken}`,
          'grant_type': 'refresh_token',
          'client_id': 'ca-website',
          'client_secret': 'nUSw2Rlf661q9b9iYwfUtj37nrHmWIi6' 
        });
        // All required config in a one place
        let config = {
          method: 'post',
          maxBodyLength: Infinity,
          url: `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_LOGIN__TOKEN_URL}`,
          headers: { 
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          withCredentials:true,
          data : data,
        };
        const response = await axios.request(config)
        setAuth(prev => {
            console.log(JSON.stringify(prev));
            console.log(response.data.refresh_token)
            return {...prev, accesToken: auth?.refresh_token}
        });
    }
    
    return refresh;
}

export default useRefreshToken
