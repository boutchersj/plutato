import React from 'react';
import { createRoot } from 'react-dom/client';
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';
import Home from './Home';
import UserProvider from './providers/UserProvider';
import Login from './Login';
import './index.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <UserProvider>
          <BrowserRouter>
              <Routes>
                  <Route path='/' element={<Login />} />
                  <Route path='home' element={<Home />} />
              </Routes>
          </BrowserRouter>
      </UserProvider>
  </React.StrictMode>
);
