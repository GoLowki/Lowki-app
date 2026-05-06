import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BusinessCard from '../components/BusinessCard'
import { businesses } from '../lib/data'

const filterChips = [
  { id: 'open-now',     label: 'Open Now',    emoji: '🟢' },
  { id: 'near-1mi',     label: '< 1 mi',      emoji: '📍' },
  { id: 'food-trucks',  label: 'Food Trucks',  emoji: '🚚' },
  { id: 'coffee',       label: 'Coffee',       emoji: '☕' },
  { id: 'bbq',          label: 'BBQ',          emoji: '🔥' },
  { id: 'healthy',      label: 'Healthy',      emoji: '🥗' },
  { id: 'shops',        label: 'Shops',        emoji: '🛍️' },
]

// Fake pin data for map overlay
const mapPins = [
  { id: 'valdos-tacos',       x: '28%', y: '38%', emoji: '🌮', color: '#FF6B4A', name: "Valdo's" },
  { id: 'coffee-inclination', x: '50%', y: '25%', emoji: '☕', color: '#7B4F2E', name: 'Coffee Inc.' },
  { id: 'moody-q',            x: '18%', y: '55%', emoji: '🔥', color: '#D4521A', name: 'Moody Q' },
  { id: 'rolling-cafe',       x: '72%', y: '60%', emoji: '🥞', color: '#2D6A9F', name: 'Rolling Café' },
  { id: 'mr-greek-house',     x: '55%', y: '48%', emoji: '🫒', color: '#00416A', name: 'Mr. Greek' },
]

export default function MapPage() {
  const navigate = useNavigate()
  const [activeFilters, setActiveFilters] = useState([])
  const [selectedPin, setSelectedPin] = useState(null)
  const [searchValue, setSearchValue] = useState('')

  const toggleFilter = (id) => {
    setActiveFilters((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    )
  }

  const sortedBusinesses = [...businesses].sort(
    (a, b) => parseFloat(a.distance) - parseFloat(b.distance)
  )

  const filteredBusinesses = sortedBusinesses.filter((b) => {
    if (activeFilters.length === 0) return true
    return activeFilters.some((f) => {
      switch (f) {
        case 'open-now':    return b.isOpen
        case 'near-1mi':    return parseFloat(b.distance) < 1
        case 'food-trucks': return b.tags.includes('Food Truck')
        case 'coffee':      return b.tags.includes('Coffee')
        case 'bbq':         return b.tags.includes('BBQ')
        case 'healthy':     return b.tags.some((t) => ['Healthy', 'Vegetarian Options', 'Salads'].includes(t))
        case 'shops':       return b.tags.includes('Shops')
        default:            return true
      }
    })
  })

  return (
    <div className="page-content bg-cream flex flex-col">
      {/* ── Search Bar ── */}
      <div className="px-4 pt-12 pb-3 bg-cream">
        <div className="relative">
          <svg className="absolute left-4 top-1/2 -translate-y-1/2" width="16" height="16" viewBox="0 0 24 24" fill="none">
            <circle cx="11" cy="11" r="8" stroke="#9BA8B5" strokeWidth="1.75"/>
            <path d="M21 21L16.65 16.65" stroke="#9BA8B5" strokeWidth="1.75" strokeLinecap="round"/>
          </svg>
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search the map…"
            className="input-field pl-10 pr-10"
          />
          {searchValue && (
            <button
              onClick={() => setSearchValue('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
            >
              ×
            </button>
          )}
        </div>
      </div>

      {/* ── Filter Chips ── */}
      <div className="flex gap-2 px-4 pb-3 overflow-x-auto scroll-hide">
        {filterChips.map((chip) => {
          const isActive = activeFilters.includes(chip.id)
          return (
            <button
              key={chip.id}
              onClick={() => toggleFilter(chip.id)}
              className={`chip flex-shrink-0 ${isActive ? 'chip-active' : 'chip-inactive'}`}
            >
              <span>{chip.emoji}</span>
              <span>{chip.label}</span>
            </button>
          )
        })}
      </div>

      {/* ── Map Area ── */}
      <div className="mx-4 mb-4 rounded-2xl overflow-hidden shadow-card relative" style={{ height: '300px' }}>
        {/* Map background */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(145deg, #DCF0E4 0%, #C8E8D2 40%, #B8DFCA 100%)',
          }}
        >
          {/* Street grid SVG */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 390 300" preserveAspectRatio="none">
            {/* Major roads */}
            <line x1="0" y1="120" x2="390" y2="120" stroke="#96BDAA" strokeWidth="4" opacity="0.6"/>
            <line x1="0" y1="200" x2="390" y2="200" stroke="#96BDAA" strokeWidth="2.5" opacity="0.5"/>
            <line x1="195" y1="0" x2="195" y2="300" stroke="#96BDAA" strokeWidth="4" opacity="0.6"/>
            <line x1="100" y1="0" x2="100" y2="300" stroke="#96BDAA" strokeWidth="2.5" opacity="0.5"/>
            <line x1="290" y1="0" x2="290" y2="300" stroke="#96BDAA" strokeWidth="2.5" opacity="0.5"/>
            {/* Minor roads */}
            {[60, 160, 240, 260].map((y) => (
              <line key={`hy${y}`} x1="0" y1={y} x2="390" y2={y} stroke="#A8CCBA" strokeWidth="1.2" opacity="0.4"/>
            ))}
            {[40, 150, 250, 340].map((x) => (
              <line key={`vx${x}`} x1={x} y1="0" x2={x} y2="300" stroke="#A8CCBA" strokeWidth="1.2" opacity="0.4"/>
            ))}
            {/* City blocks */}
            {[
              [105, 65, 85, 50],
              [105, 125, 85, 70],
              [200, 65, 85, 50],
              [200, 125, 85, 70],
              [105, 205, 85, 50],
              [200, 205, 85, 50],
            ].map(([x, y, w, h], i) => (
              <rect key={i} x={x} y={y} width={w} height={h} fill="#AECFBA" rx="3" opacity="0.5"/>
            ))}
            {/* Park/green area */}
            <rect x="0" y="205" width="95" height="90" fill="#8EC5A0" rx="0" opacity="0.4"/>
            <rect x="295" y="65" width="95" height="125" fill="#8EC5A0" rx="0" opacity="0.35"/>
          </svg>

          {/* Pins */}
          {mapPins.map((pin) => {
            const biz = businesses.find((b) => b.id === pin.id)
            const isSelected = selectedPin === pin.id
            return (
              <button
                key={pin.id}
                className="absolute flex flex-col items-center transition-all duration-150 active:scale-90"
                style={{
                  left: pin.x,
                  top: pin.y,
                  transform: `translate(-50%, -100%) scale(${isSelected ? 1.2 : 1})`,
                  zIndex: isSelected ? 10 : 5,
                }}
                onClick={() => setSelectedPin(isSelected ? null : pin.id)}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-lg shadow-lg border-2"
                  style={{
                    background: pin.color,
                    borderColor: isSelected ? 'white' : 'rgba(255,255,255,0.6)',
                  }}
                >
                  {pin.emoji}
                </div>
                {isSelected && (
                  <div className="absolute -bottom-10 bg-white rounded-xl px-2 py-1 shadow-card whitespace-nowrap z-20">
                    <p className="text-xs font-semibold text-navy">{pin.name}</p>
                  </div>
                )}
                <div className="w-0.5 h-2 rounded-full mt-0.5" style={{ background: pin.color, opacity: 0.7 }} />
              </button>
            )
          })}

          {/* My location dot */}
          <div
            className="absolute flex items-center justify-center"
            style={{ left: '45%', top: '50%', transform: 'translate(-50%, -50%)' }}
          >
            <div className="w-4 h-4 rounded-full bg-blue-500 border-2 border-white shadow-md" />
            <div className="absolute w-10 h-10 rounded-full bg-blue-400 opacity-20 animate-ping" />
          </div>

          {/* Compass */}
          <div className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow-sm">
            <span className="text-sm">🧭</span>
          </div>

          {/* Zoom controls */}
          <div className="absolute bottom-3 right-3 flex flex-col gap-1">
            <button className="w-8 h-8 bg-white/90 rounded-t-lg flex items-center justify-center shadow-sm text-navy font-bold text-lg">+</button>
            <button className="w-8 h-8 bg-white/90 rounded-b-lg flex items-center justify-center shadow-sm text-navy font-bold text-lg">−</button>
          </div>
        </div>
      </div>

      {/* ── Results List ── */}
      <div className="px-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="section-title">
            {activeFilters.length > 0 ? 'Filtered Results' : 'Nearest Spots'}
          </h2>
          <span className="text-xs text-gray-400 font-medium">{filteredBusinesses.length} places</span>
        </div>

        {filteredBusinesses.length === 0 ? (
          <div className="card p-8 text-center mb-4">
            <p className="text-3xl mb-2">🗺️</p>
            <p className="text-sm font-medium text-navy mb-1">No results found</p>
            <p className="text-xs text-gray-400">Try removing some filters</p>
          </div>
        ) : (
          <div className="flex flex-col gap-3 mb-4">
            {filteredBusinesses.map((b, i) => (
              <div key={b.id} className="animate-fade-up" style={{ animationDelay: `${i * 0.05}s`, opacity: 0 }}>
                <BusinessCard business={b} variant="compact" />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
