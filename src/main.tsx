import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

//INI SPEC-001 - 07
// Entrada principal de la aplicación React
const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
//FIN SPEC-001 - 07
