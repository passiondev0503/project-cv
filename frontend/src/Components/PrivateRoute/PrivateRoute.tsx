import React from 'react';
import { Navigate } from 'react-router-dom';
import Layout from '../Layout/Layout';
import DraggableArea from '../GlobalComponents/DraggableArea/DraggableArea';

const PrivateRoute = ({ children }:any) => {
    const token:any = localStorage.getItem('token');
    const parsedData = JSON.parse(token);
    const userToken = parsedData?.access_token;
    const tokenExpiration = parsedData?.expiry;
    const currentTimestamp = Math.floor(Date.now() / 1000);

    if (userToken && tokenExpiration && currentTimestamp < tokenExpiration) {
        return (
            <>
            <DraggableArea>
                <Layout>
                    {children}
                </Layout>
                </DraggableArea>
            </>
        );
    } else {
        localStorage.removeItem("token")
        return <Navigate to="/login" replace />;
    }
};

export default PrivateRoute;
