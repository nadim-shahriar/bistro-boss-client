import { useContext } from "react";
import { AuthContext } from "../providers/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    if (loading) {
        return <div className="text-center pt-40 p-20">
            <span className="loading loading-bars loading-xl"></span>
        </div>
    }

    if (user) {
        return children
    }
    return <Navigate to={'/login'} state={{from : location}} replace></Navigate>

};

export default PrivateRoute;