import { createContext, useEffect, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const accessToken = localStorage.getItem('access_token');
    const refreshToken = localStorage.getItem('refresh_token');
    const roles = localStorage.getItem('roles');
    const [auth, setAuth] = useState({...{accessToken: accessToken, refreshToken: refreshToken, roles: roles}});
    
    useEffect(()=>{
        localStorage.setItem('access_token', auth.accessToken);
        localStorage.setItem('refresh_token', auth.refreshToken);
        localStorage.setItem('roles', auth.roles);
    },[auth]);
    
    const [checkTruestDevice, setCheckTruestDevice] = useState(JSON.parse(localStorage.getItem("persist")) || false);
    
    return (
        <AuthContext.Provider value={{ auth, setAuth, checkTruestDevice, setCheckTruestDevice }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;