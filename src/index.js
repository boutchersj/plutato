import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './backend/AuthProvider';
import App from './app/App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);
