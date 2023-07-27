import React from 'react'
import Routes from './Routes/Index';
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
  )
}

export default App