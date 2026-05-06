import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getBusinessById } from '../lib/data'

export default function BusinessProfile() {
  const { id } = useParams()
  const navigate = useNavigate()
  const business = getBusinessById(id)

  const [saved, setSaved] = useState(false)
  const [followed, setFollowed] = useState(false)

  if (!business) {
    return (
      <div className="page-content flex flex-col items-center justify-center p-8 text-center">
        <p className="text-5xl mb-4">🔍</p>
        <h2 className="text-lg font-bold text-navy mb-2">Business not found</h2>
        <p className="text-sm text-gray-400 mb-6">This spot might have moved or closed.</p>
        <button onClick={() => navigate('/home')} className="btn-primary">
          Back to Home
        </button>
      </div>
    )
  }

  const {
    name, category, emoji, description, address, isOpen, todayHours,
    distance, priceRange, tags, heroGradient, socialLinks, menuUrl,
  } = business

  const infoRows = [
    {
      icon: '📍',
      label: 'Location',
      value: address,
      action: () => window.open(`https://maps.google.com/?q=${encodeURIComponent(address)}`, '_blank'),
      actionLabel: 'Directions',
    },
    {
      icon: '🕐',
      label: 'Hours Today',
      value: todayHours,
      action: null,
    },
    {
      icon: '🍽️',
      label: 'Menu',
      value: 'View full menu →',
      action: () => alert('Menu feature coming soon!'),
      actionLabel: 'View',
    },
    {
      icon: '📢',
      label: 'Updates',
      value: 'No recent updates',
      action: null,
    },
  ]

  return (
    <div className="page-content bg-cream">
      {/* ── Hero ── */}
      <div
        className="relative flex flex-col items-center justify-center"
        style={{ background: heroGradient, height: '260px' }}
      >
        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-12 left-4 w-9 h-9 rounded-full bg-black/20 backdrop-blur-sm flex items-center justify-center active:scale-90 transition-all duration-150"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Save button */}
        <button
          onClick={() => setSaved((s) => !s)}
          className="absolute top-12 right-4 w-9 h-9 rounded-full bg-black/20 backdrop-blur-sm flex items-center justify-center active:scale-90 transition-all duration-150"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path
              d="M19 21L12 16L5 21V5C5 3.89543 5.89543 3 7 3H17C18.1046 3 19 3.89543 19 5V21Z"
              fill={saved ? '#FF6B4A' : 'none'}
              stroke={saved ? '#FF6B4A' : 'white'}
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Open badge */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2">
          <span
            className="text-xs font-bold px-3 py-1.5 rounded-full shadow-sm"
            style={{
              background: isOpen ? 'rgba(0,201,167,0.95)' : 'rgba(155,168,181,0.95)',
              color: 'white',
            }}
          >
            {isOpen ? '🟢 Open Now' : '⭕ Closed'}
          </span>
        </div>

        {/* Emoji */}
        <span className="text-7xl drop-shadow-lg animate-scale-pop">{emoji}</span>

        {/* Bottom gradient overlay */}
        <div
          className="absolute bottom-0 left-0 right-0 h-16"
          style={{ background: 'linear-gradient(to bottom, transparent, rgba(255,251,245,0.95))' }}
        />
      </div>

      {/* ── Name & Category ── */}
      <div className="px-5 pt-3 pb-4">
        <h1 className="text-2xl font-black text-navy tracking-tight leading-tight mb-1">{name}</h1>
        <p className="text-sm text-gray-500">{category}</p>

        {/* Pills row */}
        <div className="flex flex-wrap gap-2 mt-3">
          <span className="chip chip-inactive text-xs">
            📍 {distance}
          </span>
          <span className="chip chip-inactive text-xs">
            💰 {priceRange}
          </span>
          <span
            className="chip text-xs"
            style={{
              background: isOpen ? 'rgba(0,201,167,0.10)' : 'rgba(155,168,181,0.12)',
              color: isOpen ? '#00C9A7' : '#9BA8B5',
              border: `1px solid ${isOpen ? 'rgba(0,201,167,0.20)' : 'rgba(155,168,181,0.25)'}`,
            }}
          >
            🕐 {todayHours}
          </span>
        </div>
      </div>

      {/* ── Tags ── */}
      {tags && tags.length > 0 && (
        <div className="px-5 pb-4">
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] px-3 py-1 rounded-full font-medium"
                style={{ background: 'rgba(255,107,74,0.10)', color: '#E5502F' }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* ── Description ── */}
      <div className="px-5 pb-5">
        <h2 className="text-sm font-bold text-navy mb-2">About</h2>
        <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
      </div>

      {/* ── Info Rows ── */}
      <div className="mx-5 mb-5 card divide-y divide-gray-100">
        {infoRows.map((row) => (
          <div key={row.label} className="flex items-center gap-3 p-4">
            <span className="text-lg w-7 flex-shrink-0 text-center">{row.icon}</span>
            <div className="flex-1 min-w-0">
              <p className="text-[11px] text-gray-400 font-medium uppercase tracking-wide mb-0.5">{row.label}</p>
              <p className="text-sm text-navy font-medium truncate">{row.value}</p>
            </div>
            {row.action && (
              <button
                onClick={row.action}
                className="flex-shrink-0 text-xs text-coral font-bold active:opacity-70"
              >
                {row.actionLabel} →
              </button>
            )}
          </div>
        ))}
      </div>

      {/* ── Social Links ── */}
      {socialLinks && Object.keys(socialLinks).length > 0 && (
        <div className="px-5 mb-5">
          <h2 className="text-sm font-bold text-navy mb-3">Connect</h2>
          <div className="flex gap-2">
            {socialLinks.instagram && (
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold active:scale-95 transition-all duration-150"
                style={{ background: 'linear-gradient(135deg, #833AB4, #FD1D1D, #FCAF45)', color: 'white' }}
              >
                <span>📸</span>
                <span>Instagram</span>
              </a>
            )}
            {socialLinks.facebook && (
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white active:scale-95 transition-all duration-150"
                style={{ background: '#1877F2' }}
              >
                <span>👥</span>
                <span>Facebook</span>
              </a>
            )}
          </div>
        </div>
      )}

      {/* ── Follow Button ── */}
      <div className="px-5 pb-6">
        <button
          onClick={() => setFollowed((f) => !f)}
          className={`w-full py-4 rounded-2xl text-sm font-bold transition-all duration-200 active:scale-95 ${
            followed
              ? 'bg-navy text-white'
              : 'text-white'
          }`}
          style={followed
            ? {}
            : { background: 'linear-gradient(135deg, #FF6B4A, #FF9472)' }
          }
        >
          {followed ? '✓ Following this spot' : `Follow ${name}`}
        </button>
        <p className="text-center text-xs text-gray-400 mt-2">
          Get notified about specials and updates
        </p>
      </div>
    </div>
  )
}
