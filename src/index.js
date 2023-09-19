import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import './styles/main.scss'; // Importez vos fichiers SCSS ici
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routes /> {/* Utilisez le composant Routes à la place de App */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
