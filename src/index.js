import React from 'react';
import ReactDOM from 'react-dom';

import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';
import Home from './Home';
import UserProvider from './providers/UserProvider';
import Login from './Login';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
      <UserProvider>
          <BrowserRouter>
              <Routes>
                  <Route path='/' element={<Login />} />
                  <Route path='home' element={<Home />} />
              </Routes>
          </BrowserRouter>
      </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
