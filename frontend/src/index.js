import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from "@material-tailwind/react";
import { Provider } from "react-redux";
import store from "./Store/store"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <ThemeProvider>
    <Provider store={store} >
      <App />
    </Provider>
  </ThemeProvider>
);

reportWebVitals();
