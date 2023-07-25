import React, { useRef, useState } from 'react';
import { Routes, Route, useLocation, Navigate } from "react-router-dom"
import Home from '../Pages/Home/Home';
import Login from '../Pages/Auth/Login/Login';
import PrivateRoute from '../Components/PrivateRoute/PrivateRoute';

import Profile from '../Pages/Auth/Profile/Profile';
import Layout from '../Components/Layout/Layout';
import AccessToken from '../Components/Access/AccessToken';
import PageNotFound from '../Components/PageNotFound/PageNotFound';

const Index = () => {

  const location = useLocation();
  const isAuthRouts = location.pathname === '/login' || location.pathname.includes("/access_token/")




  return (
    <>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/access_token/:token" element={<AccessToken />} />

        <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

    </>
  )
}

export default Index