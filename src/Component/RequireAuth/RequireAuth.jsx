import { useLocation, Navigate, Outlet } from "react-router-dom"
import useAuth from "../../hooks/useAuth"

const RequireAuth = ({allowedRoles}) => {
    const { auth } = useAuth();
    const location = useLocation();
    console.log(auth.username, auth.userID, auth.roles, auth.accessToken)
  return (
    auth?.roles?.find(role => allowedRoles?.includes(role)) 
    ? <Outlet/>
    : auth?.user 
    ? <Navigate to="/unauthorized" state={{ from: location}} replace/>
    : <>error</>
  )
}

export default RequireAuth