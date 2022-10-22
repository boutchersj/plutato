import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PrivateRoute from '../backend/PrivateRoute'
import Login from './pages/Login'
import Home from './pages/Home'
import './index.css';
import UserContext from '../backend/UserContext'
import useAuthListener from '../backend/useAuthListener'

function App() {
    const { user } = useAuthListener()

    return (
        <UserContext.Provider value={{ user }}>
            <BrowserRouter>
                <Routes>
                        <Route path='/' element={<Login />} />
                        <Route
                            path='/home'
                            element={
                                <PrivateRoute user={user}>
                                    <Home />
                                </PrivateRoute>
                            }
                        />
                    </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    )
}

export default App