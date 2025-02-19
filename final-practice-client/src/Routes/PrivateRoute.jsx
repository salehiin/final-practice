
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth();
    const location = useLocation();

    if(loading){
        return <p className="text-yellow-200">Loading...</p>
    }
    if (user) {
        return children;
    }
    return (
        <Navigate to="/login" state={{from: location}} replace ></Navigate>
    );
};

export default PrivateRoute;