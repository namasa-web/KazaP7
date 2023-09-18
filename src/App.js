import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import './styles/index.css'; // Importez vos fichiers de style globaux ici

function App() {
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);