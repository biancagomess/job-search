import { useContext } from "react"
import { AuthContext } from "../context/auth"
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = () => {

    const { signed } = useContext(AuthContext);
    return signed ? <Outlet /> : <Navigate to="/login" />;
} 