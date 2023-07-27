import React  from 'react';
import { Routes, Route } from "react-router-dom"
import Home from '../Pages/Home/Home';
import Login from '../Pages/Auth/Login/Login';
import PrivateRoute from '../Components/PrivateRoute/PrivateRoute';

import Profile from '../Pages/Auth/Profile/Profile';
import AccessToken from '../Components/Access/AccessToken';
import PageNotFound from '../Components/PageNotFound/PageNotFound';

const Index = () => {

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