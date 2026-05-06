import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const taglines = [
  'Discover what\'s around the corner.',
  'Local spots worth knowing.',
  'Your town. Your people. Your places.',
  'Find the real deal — near you.',
]

export default function Splash() {
  const navigate = useNavigate()
  const [tagline] = useState(() => taglines[Math.floor(Math.random() * taglines.length)])
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Trigger entrance animation
    const t1 = setTimeout(() => setVisible(true), 100)
    // Navigate after 2.5s
    const t2 = setTimeout(() => navigate('/home', { replace: true }), 2500)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [navigate])

  return (
    <div
      className="flex flex-col items-center justify-center min-h-dvh w-full select-none"
      style={{
        background: 'linear-gradient(160deg, #0F1B2D 0%, #0D2640 50%, #0A3352 100%)',
      }}
    >
      {/* Ambient glow orbs */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #FF6B4A 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      <div
        className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full opacity-15 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #00C9A7 0%, transparent 70%)',
          filter: 'blur(32px)',
        }}
      />

      {/* Logo area */}
      <div
        className="relative z-10 flex flex-col items-center gap-6 transition-all duration-700"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(24px)',
        }}
      >
        {/* Wordmark */}
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-baseline gap-1">
            <span
              className="text-6xl font-black tracking-tighter text-white"
              style={{ letterSpacing: '-0.04em' }}
            >
              lowki
            </span>
            <div
              className="w-2 h-2 rounded-full mb-1"
              style={{ background: '#FF6B4A' }}
            />
          </div>
          <div
            className="h-px w-16 rounded-full opacity-30"
            style={{ background: 'linear-gradient(90deg, transparent, #FF6B4A, transparent)' }}
          />
        </div>

        {/* Tagline */}
        <p
          className="text-base text-center leading-relaxed px-8 transition-all duration-700 delay-300"
          style={{
            color: 'rgba(255,255,255,0.55)',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(12px)',
            fontStyle: 'italic',
            fontWeight: 300,
          }}
        >
          {tagline}
        </p>

        {/* Loading dots */}
        <div
          className="flex items-center gap-1.5 mt-4 transition-all duration-700 delay-500"
          style={{ opacity: visible ? 1 : 0 }}
        >
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-1.5 h-1.5 rounded-full animate-pulse-soft"
              style={{
                background: '#FF6B4A',
                animationDelay: `${i * 0.25}s`,
                opacity: 0.7,
              }}
            />
          ))}
        </div>
      </div>

      {/* Bottom credit */}
      <div
        className="absolute bottom-8 text-xs transition-all duration-700 delay-700"
        style={{
          color: 'rgba(255,255,255,0.2)',
          opacity: visible ? 1 : 0,
        }}
      >
        Made for Enid, OK &amp; beyond
      </div>
    </div>
  )
}
