import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './config/i18n';
import { AuthProvider } from './Contexts/AuthContext';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
