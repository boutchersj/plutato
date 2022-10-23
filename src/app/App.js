import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PrivateRoute from '../backend/PrivateRoute'
import Login from './pages/Login'
import Home from './pages/Home'
import './index.css';
import { AuthProvider } from '../backend/Auth'

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route
                        exact
                        path='/'
                        element={
                            <PrivateRoute>
                                <Home />
                            </PrivateRoute>
                        }
                    />
                    <Route exact path='/login' element={<Login />} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    )
}

export default App