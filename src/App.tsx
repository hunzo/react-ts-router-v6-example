import React from 'react'
import { Routes, Route } from 'react-router'
import './App.css'
import { AuthProvider } from './authProvider'
import { Layout, RequiredAuth } from './layout'
import Login from './pages/login'
import Protect from './pages/protect'

const App: React.FC = () => {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/protected"
            element={
              <RequiredAuth>
                <Protect />
              </RequiredAuth>
            }
          />
        </Routes>
      </AuthProvider>
    </div>
  )
}

export default App
