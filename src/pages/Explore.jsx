import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { categories } from '../lib/data'

const categoryColors = [
  'linear-gradient(135deg, #FF6B4A, #FF9472)',
  'linear-gradient(135deg, #3D2C1E, #C47F4A)',
  'linear-gradient(135deg, #8B2500, #D4521A)',
  'linear-gradient(135deg, #1A5C30, #2E9C52)',
  'linear-gradient(135deg, #C0392B, #E74C3C)',
  'linear-gradient(135deg, #1A2F4A, #3A6186)',
]

export default function Explore() {
  const navigate = useNavigate()
  const [fromValue, setFromValue] = useState('')
  const [toValue, setToValue] = useState('')

  const handleRoadTrip = () => {
    if (fromValue.trim() || toValue.trim()) {
      alert(`Road trip from "${fromValue || 'current location'}" to "${toValue}" — feature coming soon! 🛣️`)
    }
  }

  return (
    <div className="page-content bg-cream">
      {/* ── Header ── */}
      <div className="px-5 pt-12 pb-5">
        <h1 className="text-2xl font-black text-navy tracking-tight mb-1">Explore</h1>
        <p className="text-sm text-gray-500">Discover local spots and plan your next trip</p>
      </div>

      {/* ── Road Trip Feature Card ── */}
      <div className="mx-5 mb-6">
        <div
          className="rounded-3xl overflow-hidden p-5 shadow-card"
          style={{
            background: 'linear-gradient(135deg, #0F1B2D 0%, #0D2640 50%, #0A3352 100%)',
          }}
        >
          {/* Ambient glow */}
          <div
            className="absolute pointer-events-none w-32 h-32 rounded-full opacity-20"
            style={{
              background: 'radial-gradient(circle, #FF6B4A, transparent)',
              filter: 'blur(20px)',
              right: '10%',
              top: '-10%',
            }}
          />

          <div className="flex items-center gap-2 mb-3">
            <span className="text-2xl">🛣️</span>
            <div>
              <h2 className="text-white font-bold text-base leading-tight">Road Trip Mode</h2>
              <p className="text-white/50 text-xs">Find local spots along your route</p>
            </div>
          </div>

          {/* From / To inputs */}
          <div className="flex flex-col gap-2.5 mb-4">
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-teal" />
              <input
                type="text"
                value={fromValue}
                onChange={(e) => setFromValue(e.target.value)}
                placeholder="From — city or address"
                className="w-full bg-white/10 border border-white/15 rounded-xl pl-8 pr-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-coral/60 focus:bg-white/15 transition-all duration-150"
              />
            </div>

            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2">
                <svg width="8" height="8" viewBox="0 0 8 8">
                  <rect x="1" y="1" width="6" height="6" rx="1" fill="#FF6B4A"/>
                </svg>
              </div>
              <input
                type="text"
                value={toValue}
                onChange={(e) => setToValue(e.target.value)}
                placeholder="To — city or destination"
                className="w-full bg-white/10 border border-white/15 rounded-xl pl-8 pr-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-coral/60 focus:bg-white/15 transition-all duration-150"
              />
            </div>
          </div>

          {/* Find spots button */}
          <button
            onClick={handleRoadTrip}
            className="w-full py-3 rounded-xl text-sm font-bold text-white transition-all duration-150 active:scale-95"
            style={{ background: 'linear-gradient(90deg, #FF6B4A, #FF9472)' }}
          >
            Find spots along the route →
          </button>

          <p className="text-white/30 text-[11px] text-center mt-3">
            Powered by local knowledge, not algorithms
          </p>
        </div>
      </div>

      {/* ── Browse by Category ── */}
      <section className="px-5 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="section-title">Browse by Category</h2>
          <span className="text-xs text-gray-400">{categories.length} types</span>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {categories.map((cat, i) => (
            <button
              key={cat.id}
              onClick={() => navigate('/map')}
              className="rounded-2xl overflow-hidden text-left active:scale-[0.97] transition-all duration-150 shadow-card"
              style={{ background: categoryColors[i % categoryColors.length] }}
            >
              <div className="p-4 flex flex-col gap-1 relative">
                <span className="text-3xl leading-none">{cat.emoji}</span>
                <span className="text-white font-bold text-sm mt-2 leading-tight">{cat.label}</span>

                {/* Subtle arrow */}
                <svg
                  className="absolute top-3 right-3 opacity-40"
                  width="14" height="14" viewBox="0 0 24 24" fill="none"
                >
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* ── Discover Section ── */}
      <section className="px-5 mb-6">
        <h2 className="section-title mb-4">Nearby Highlights</h2>

        <div className="card overflow-hidden">
          {/* Mini promo rows */}
          {[
            { emoji: '🎪', title: 'Events This Weekend', sub: '3 upcoming in Enid', color: '#FF6B4A' },
            { emoji: '⭐', title: 'Hidden Gems', sub: 'Spots locals swear by', color: '#00C9A7' },
            { emoji: '🆕', title: 'Just Opened', sub: '2 new spots this month', color: '#0F1B2D' },
          ].map((item, i) => (
            <button
              key={i}
              onClick={() => navigate('/map')}
              className="w-full flex items-center gap-3 p-4 text-left active:bg-gray-50 transition-colors duration-150 border-b border-gray-100 last:border-b-0"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                style={{ background: `${item.color}18` }}
              >
                {item.emoji}
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-navy">{item.title}</p>
                <p className="text-xs text-gray-400 mt-0.5">{item.sub}</p>
              </div>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M9 18l6-6-6-6" stroke="#CED4DA" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          ))}
        </div>
      </section>
    </div>
  )
}
