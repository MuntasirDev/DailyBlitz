import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from './AuthProvider';
import Loading from '../Pages/loading';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return (
           <Loading></Loading>
        );
    }

    if (user?.email) {
        return children; // user is logged in
    }

    return <Navigate state={location.pathname}  to="/auth/login" />;
};

export default PrivateRoute;
