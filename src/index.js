import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// CSS
import './CSS/index.css';
import './CSS/Variables.css';
import './CSS/Reusables.css';


import { AuthContextProvider } from './firebase/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);