import React from 'react';
import ReactDOM from "react-dom/client";

import Routes from './Routes';
import './styles/main.scss'; 
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>    
      <Routes />    
  </React.StrictMode>
  
);

reportWebVitals();



