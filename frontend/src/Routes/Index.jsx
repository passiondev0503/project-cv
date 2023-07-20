import React from 'react';
import { Routes, Route } from "react-router-dom"
import Home from '../Pages/Home/Home';
import Header from '../Components/GlobalComponents/Header/Header';

const Index = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>


    </>
  )
}

export default Index