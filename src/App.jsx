import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import BottomNav from './components/BottomNav'
import Splash from './pages/Splash'
import Home from './pages/Home'
import MapPage from './pages/MapPage'
import Explore from './pages/Explore'
import Saved from './pages/Saved'
import UserProfile from './pages/UserProfile'
import BusinessProfile from './pages/BusinessProfile'

export default function App() {
  return (
    <div className="app-shell">
      <Routes>
        {/* Splash / root */}
        <Route path="/" element={<Splash />} />

        {/* Main app routes */}
        <Route path="/home"           element={<Home />} />
        <Route path="/map"            element={<MapPage />} />
        <Route path="/explore"        element={<Explore />} />
        <Route path="/saved"          element={<Saved />} />
        <Route path="/profile"        element={<UserProfile />} />
        <Route path="/business/:id"   element={<BusinessProfile />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {/* Bottom navigation (hidden on splash) */}
      <BottomNav />
    </div>
  )
}
