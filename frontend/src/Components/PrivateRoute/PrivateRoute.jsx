import React from 'react';
import { Navigate } from 'react-router-dom';
import Layout from '../Layout/Layout';

const PrivateRoute = ({ children }) => {
    const token = localStorage.getItem('token');

    const parsedData = JSON.parse(token);
    const userToken = parsedData?.access_token;
    const tokenExpiration = parsedData?.expiry;
    const currentTimestamp = Math.floor(Date.now() / 1000);

    if (userToken && tokenExpiration && currentTimestamp < tokenExpiration) {
        return (
            <>
                <Layout>
                    {children}
                </Layout>
            </>
        );
    } else {
        return <Navigate to="/login" replace />;
    }
};

export default PrivateRoute;
