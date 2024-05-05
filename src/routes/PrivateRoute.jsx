import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import loadingSpinner from '../assets/square-loading.svg'

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center">
                <img src={loadingSpinner} alt="loading..." />
            </div>
        )
    }

    if (user?.email) {
        return children;
    }
    return <Navigate state={location.pathname} to='/login' replace></Navigate>;
};

PrivateRoute.propTypes = {
    children: PropTypes.node,
}

export default PrivateRoute;