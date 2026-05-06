import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function BusinessCard({ business, variant = 'default', className = '' }) {
  const navigate = useNavigate()

  if (!business) return null

  const { id, name, category, emoji, isOpen, distance, priceRange, tags, heroGradient } = business

  if (variant === 'compact') {
    return (
      <button
        onClick={() => navigate(`/business/${id}`)}
        className={`card w-full text-left flex items-center gap-3 p-3 active:scale-[0.98] transition-all duration-150 ${className}`}
      >
        {/* Emoji badge */}
        <div
          className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center text-2xl"
          style={{ background: heroGradient }}
        >
          {emoji}
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            <span className="font-semibold text-navy text-sm truncate">{name}</span>
            <span
              className="flex-shrink-0 text-[10px] font-semibold px-1.5 py-0.5 rounded-full"
              style={{
                background: isOpen ? 'rgba(0,201,167,0.12)' : 'rgba(155,168,181,0.15)',
                color: isOpen ? '#00C9A7' : '#9BA8B5',
              }}
            >
              {isOpen ? 'Open' : 'Closed'}
            </span>
          </div>
          <p className="text-xs text-gray-500 truncate">{category}</p>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-xs text-gray--500">📍 {distance}</span>
            <span className="text-gray-300">·</span>
            <span className="text-xs text-gray-500">{priceRange}</span>
          </div>
        </div>

        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 text-gray-300">
          <path d="M9 18L15 12L9 6" stroke="#CED4DA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    )
  }

  if (variant === 'horizontal') {
    return (
      <button
        onClick={() => navigate(`/business/${id}`)}
        className={`card flex-shrink-0 w-48 text-left overflow-hidden active:scale-[0.98] transition-all duration-150 ${className}`}
      >
        {/* Hero */}
        <div
          className="h-28 flex items-center justify-center text-4xl relative"
          style={{ background: heroGradient }}
        >
          <span className="drop-shadow-sm">{emoji}</span>
          {isOpen && (
            <span className="absolute top-2 right-2 text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/90 text-teal">
              Open
            </span>
          )}
        </div>

        {/* Info */}
        <div className="p-3">
          <p className="font-semibold text-navy text-sm leading-tight truncate">{name}</p>
          <p className="text-xs text-gray-500 mt-0.5 truncate">{category}</p>
          <div className="flex items-center justify-between mt-2">
            <span className="text-xs text-gray-500">📍 {distance}</span>
            <span className="text-xs font-medium text-gray-600">{priceRange}</span>
          </div>
        </div>
      </button>
    )
  }

  // Default / full card
  return (
    <button
      onClick={() => navigate(`/business/${id}`)}
      className={`card w-full text-left overflow-hidden active:scale-[0.98] transition-all duration-150 ${className}`}
    >
      {/* Hero */}
      <div
        className="h-36 flex items-center justify-center text-5xl relative"
        style={{ background: heroGradient }}
      >
        <span className="drop-shadow-md">{emoji}</span>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {isOpen && (
            <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-white/95 text-teal shadow-sm">
              🟢 Open Now
            </span>
          )}
        </div>
        <div className="absolute top-3 right-3">
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/95 text-navy shadow-sm">
            {priceRange}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="font-bold text-navy text-base leading-tight">{name}</h3>
          <span className="flex-shrink-0 text-xs text-gray-500">📍 {distance}</span>
        </div>
        <p className="text-sm text-gray-500 mb-3">{category}</p>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-[11px] px-2.5 py-0.5 rounded-full bg-cream border border-gray-200 text-gray-600 font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </button>
  )
}
