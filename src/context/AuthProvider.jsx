import { createContext, useEffect, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const accessToken = localStorage.getItem('access_token');
    const refreshToken = localStorage.getItem('refresh_token');
    const roles = localStorage.getItem('roles');
    const [auth, setAuth] = useState({...{accessToken: accessToken, refreshToken: refreshToken, roles: roles}});
    //const [persist, setPersist] = useState(JSON.parse(localStorage.getItem("persist")) || false);
    useEffect(()=>{
        localStorage.setItem('access_token', auth.accessToken);
        localStorage.setItem('refresh_token', auth.refreshToken);
        localStorage.setItem('roles', auth.roles);
    },[auth]);
    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;