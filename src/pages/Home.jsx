import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BusinessCard from '../components/BusinessCard'
import { businesses, moodChips, getOpenBusinesses, getRecentlyAdded } from '../lib/data'

export default function Home() {
  const navigate = useNavigate()
  const [activeChip, setActiveChip] = useState('open-now')
  const [searchValue, setSearchValue] = useState('')

  const openNow = getOpenBusinesses()
  const recent = getRecentlyAdded()

  const filteredList = (() => {
    switch (activeChip) {
      case 'open-now':   return businesses.filter((b) => b.isOpen)
      case 'new':        return businesses.filter((b) => b.recentlyAdded)
      case 'near-you':   return [...businesses].sort((a, b) => parseFloat(a.distance) - parseFloat(b.distance))
      case 'local-favs': return businesses.filter((b) => b.isFeatured)
      case 'road-trip':  return businesses
      default:           return businesses
    }
  })()

  return (
    <div className="page-content bg-cream">
      {/* ── Header ── */}
      <div className="px-5 pt-12 pb-4 bg-cream">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-black text-navy tracking-tighter" style={{ letterSpacing: '-0.03em' }}>
              lowki
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-coral mb-0.5" />
          </div>

          <button className="relative w-9 h-9 rounded-full bg-white shadow-card flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" stroke="#0F1B2D" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M13.73 21a2 2 0 0 1-3.46 0" stroke="#0F1B2D" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {/* Unread dot */}
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-coral border-2 border-cream" />
          </button>
        </div>

        {/* Location pill */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-sm text-gray-500">📍</span>
          <span className="text-sm font-medium text-navy">Enid, Oklahoma</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
            <path d="M6 9l6 6 6-6" stroke="#9BA8B5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        {/* Search bar */}
        <button
          onClick={() => navigate('/map')}
          className="w-full bg-white rounded-2xl px-4 py-3.5 flex items-center gap-3 shadow-card text-left mb-4"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <circle cx="11" cy="11" r="8" stroke="#9BA8B5" strokeWidth="1.75"/>
            <path d="M21 21L16.65 16.65" stroke="#9BA8B5" strokeWidth="1.75" strokeLinecap="round"/>
          </svg>
          <span className="text-sm text-gray-400 flex-1">Search places, categories…</span>
          <div className="w-px h-4 bg-gray-200" />
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M3 6h18M7 12h10M11 18h2" stroke="#9BA8B5" strokeWidth="1.75" strokeLinecap="round"/>
          </svg>
        </button>

        {/* Road trip pill */}
        <button
          onClick={() => navigate('/explore')}
          className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl text-white text-sm font-semibold shadow-sm active:scale-95 transition-all duration-150"
          style={{ background: 'linear-gradient(90deg, #0F1B2D, #1A2F4A)' }}
        >
          <span>🛣️</span>
          <span>Plan a road trip</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M5 12h14M12 5l7 7-7 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* ── Mood chips ── */}
      <div className="flex gap-2 px-5 pb-4 overflow-x-auto scroll-hide">
        {moodChips.map((chip) => (
          <button
            key={chip.id}
            onClick={() => setActiveChip(chip.id)}
            className={`chip flex-shrink-0 ${activeChip === chip.id ? 'chip-active' : 'chip-inactive'}`}
          >
            <span>{chip.emoji}</span>
            <span>{chip.label}</span>
          </button>
        ))}
      </div>

      {/* ── Map Preview ── */}
      <div className="mx-5 mb-5">
        <button
          onClick={() => navigate('/map')}
          className="w-full rounded-2xl overflow-hidden shadow-card relative active:scale-[0.98] transition-all duration-150"
          style={{ height: '160px' }}
        >
          {/* Fake map background */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, #E8F4EC 0%, #D6EAE0 40%, #C8E4D8 100%)',
            }}
          >
            {/* Grid lines simulating streets */}
            <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 390 160" preserveAspectRatio="none">
              {/* Horizontal streets */}
              {[30, 70, 110, 130].map((y) => (
                <line key={`h${y}`} x1="0" y1={y} x2="390" y2={y} stroke="#9BC5A8" strokeWidth={y === 70 ? 3 : 1.5} />
              ))}
              {/* Vertical streets */}
              {[60, 130, 195, 260, 330].map((x) => (
                <line key={`v${x}`} x1={x} y1="0" x2={x} y2="160" stroke="#9BC5A8" strokeWidth={x === 195 ? 3 : 1.5} />
              ))}
              {/* Block fills */}
              {[[70, 30, 60, 40],[140, 30, 60, 40],[70, 80, 120, 30],[200, 80, 60, 30]].map(([x, y, w, h], i) => (
                <rect key={i} x={x} y={y} width={w} height={h} fill="#B8D9C2" rx="2"/>
              ))}
            </svg>

            {/* Fake pins */}
            {[
              { x: '30%', y: '40%', emoji: '🌮', color: '#FF6B4A' },
              { x: '52%', y: '30%', emoji: '☕', color: '#7B4F2E' },
              { x: '68%', y: '55%', emoji: '🔥', color: '#D4521A' },
              { x: '42%', y: '62%', emoji: '🫒', color: '#00416A' },
            ].map((pin, i) => (
              <div
                key={i}
                className="absolute flex flex-col items-center"
                style={{ left: pin.x, top: pin.y, transform: 'translate(-50%, -100%)' }}
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-base shadow-md border-2 border-white"
                  style={{ background: pin.color }}
                >
                  {pin.emoji}
                </div>
                <div className="w-0.5 h-2 bg-white/60 rounded-full mt-px" />
              </div>
            ))}
          </div>

          {/* Open map CTA */}
          <div className="absolute bottom-0 left-0 right-0 p-3 flex items-center justify-between"
            style={{ background: 'linear-gradient(to top, rgba(15,27,45,0.7), transparent)' }}
          >
            <span className="text-white text-sm font-semibold drop-shadow">Explore the map</span>
            <div className="flex items-center gap-1.5 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
              <span className="text-white text-xs font-medium">{openNow.length} open now</span>
            </div>
          </div>
        </button>
      </div>

      {/* ── Recently Added ── */}
      {recent.length > 0 && (
        <section className="mb-5">
          <div className="flex items-center justify-between px-5 mb-3">
            <h2 className="section-title">Recently Added ✨</h2>
            <button className="text-sm text-coral font-medium">See all</button>
          </div>
          <div className="flex gap-3 px-5 overflow-x-auto scroll-hide pb-1">
            {recent.map((b) => (
              <BusinessCard key={b.id} business={b} variant="horizontal" />
            ))}
          </div>
        </section>
      )}

      {/* ── Filtered List ── */}
      <section className="px-5 mb-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="section-title">
            {moodChips.find((c) => c.id === activeChip)?.emoji}{' '}
            {moodChips.find((c) => c.id === activeChip)?.label}
          </h2>
          <span className="text-xs text-gray-400 font-medium">{filteredList.length} spots</span>
        </div>

        {filteredList.length === 0 ? (
          <div className="card p-8 text-center">
            <p className="text-3xl mb-2">🔍</p>
            <p className="text-sm text-gray-500">No spots match this filter yet</p>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {filteredList.map((b) => (
              <BusinessCard key={b.id} business={b} variant="compact" />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
