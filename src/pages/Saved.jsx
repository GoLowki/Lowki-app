import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BusinessCard from '../components/BusinessCard'
import { businesses } from '../lib/data'

// For demo, show a couple of "saved" businesses
const DEMO_SAVED = ['coffee-inclination', 'valdos-tacos']

export default function Saved() {
  const navigate = useNavigate()
  const [saved, setSaved] = useState(DEMO_SAVED)

  const savedBusinesses = businesses.filter((b) => saved.includes(b.id))

  const handleUnsave = (id) => {
    setSaved((prev) => prev.filter((s) => s !== id))
  }

  return (
    <div className="page-content bg-cream">
      {/* ── Header ── */}
      <div className="px-5 pt-12 pb-5">
        <h1 className="text-2xl font-black text-navy tracking-tight mb-1">Saved</h1>
        <p className="text-sm text-gray-500">
          {savedBusinesses.length === 0
            ? 'Your saved spots will appear here'
            : `${savedBusinesses.length} place${savedBusinesses.length !== 1 ? 's' : ''} saved`}
        </p>
      </div>

      {savedBusinesses.length === 0 ? (
        /* ── Empty State ── */
        <div className="flex flex-col items-center justify-center px-8 py-16 text-center">
          <div
            className="w-24 h-24 rounded-3xl flex items-center justify-center text-4xl mb-5 shadow-card"
            style={{ background: 'linear-gradient(135deg, #FFFBF5, #F5EFE6)' }}
          >
            🔖
          </div>
          <h2 className="text-lg font-bold text-navy mb-2">Nothing saved yet</h2>
          <p className="text-sm text-gray-400 leading-relaxed mb-6">
            Tap the bookmark on any business to save it here for later.
          </p>
          <button
            onClick={() => navigate('/home')}
            className="btn-primary"
          >
            Browse local spots
          </button>
        </div>
      ) : (
        <div className="px-5">
          {/* Saved list */}
          <div className="flex flex-col gap-3 mb-6">
            {savedBusinesses.map((b, i) => (
              <div
                key={b.id}
                className="animate-fade-up"
                style={{ animationDelay: `${i * 0.07}s`, opacity: 0 }}
              >
                <div className="relative">
                  <BusinessCard business={b} />
                  {/* Unsave button */}
                  <button
                    onClick={(e) => { e.stopPropagation(); handleUnsave(b.id) }}
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center shadow-sm active:scale-90 transition-all duration-150"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M19 21L12 16L5 21V5C5 3.89543 5.89543 3 7 3H17C18.1046 3 19 3.89543 19 5V21Z"
                        fill="#FF6B4A"
                        stroke="#FF6B4A"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Discover more */}
          <div
            className="rounded-2xl p-4 mb-4 flex items-center gap-3"
            style={{ background: 'linear-gradient(135deg, rgba(255,107,74,0.08), rgba(255,107,74,0.04))' }}
          >
            <span className="text-2xl">🗺️</span>
            <div className="flex-1">
              <p className="text-sm font-semibold text-navy">Discover more spots</p>
              <p className="text-xs text-gray-400 mt-0.5">Enid has plenty left to explore</p>
            </div>
            <button
              onClick={() => navigate('/explore')}
              className="text-xs font-bold text-coral active:opacity-70"
            >
              Explore →
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
