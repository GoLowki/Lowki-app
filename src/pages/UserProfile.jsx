import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const stats = [
  { label: 'Visited', value: 12 },
  { label: 'Saved',   value: 7  },
  { label: 'Following', value: 5 },
]

const settingsRows = [
  { icon: '👤', label: 'Edit Profile',          sub: 'Name, photo, bio' },
  { icon: '📍', label: 'My Location',           sub: 'Enid, Oklahoma'   },
  { icon: '🔔', label: 'Notifications',         sub: 'Manage alerts'    },
  { icon: '🔒', label: 'Privacy & Security',    sub: 'Visibility settings' },
  { icon: '❤️', label: 'Favorites & History',   sub: 'Places you love'  },
  { icon: '⭐', label: 'Suggest a Business',    sub: 'Add a local spot'  },
  { icon: '💬', label: 'Send Feedback',         sub: 'Help improve Lowki' },
  { icon: '🌐', label: 'About Lowki',           sub: 'Version 1.0.0'    },
]

export default function UserProfile() {
  const navigate = useNavigate()
  const [following, setFollowing] = useState(false)

  return (
    <div className="page-content bg-cream">
      {/* ── Hero ── */}
      <div
        className="relative pt-14 pb-6 px-5"
        style={{
          background: 'linear-gradient(160deg, #0F1B2D 0%, #1A3354 100%)',
        }}
      >
        {/* Settings button */}
        <button className="absolute top-12 right-5 w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
              stroke="white" strokeWidth="1.75"
            />
            <path
              d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"
              stroke="white" strokeWidth="1.75"
            />
          </svg>
        </button>

        {/* Avatar */}
        <div className="flex flex-col items-center mb-5">
          <div
            className="w-20 h-20 rounded-3xl flex items-center justify-center text-4xl mb-3 border-2 shadow-lg"
            style={{
              background: 'linear-gradient(135deg, #FF6B4A, #FF9472)',
              borderColor: 'rgba(255,255,255,0.2)',
            }}
          >
            👤
          </div>
          <h1 className="text-xl font-bold text-white tracking-tight">Dave W.</h1>
          <p className="text-white/50 text-sm mt-0.5">Enid local · Explorer</p>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-around">
          {stats.map((stat, i) => (
            <React.Fragment key={stat.label}>
              {i > 0 && <div className="w-px h-8 bg-white/10" />}
              <div className="flex flex-col items-center">
                <span className="text-2xl font-black text-white">{stat.value}</span>
                <span className="text-white/40 text-xs mt-0.5">{stat.label}</span>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* ── Activity Strip ── */}
      <div className="px-5 py-4 border-b border-gray-100">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Recent Activity</p>
        <div className="flex gap-2 overflow-x-auto scroll-hide">
          {[
            { emoji: '🌮', label: "Valdo's Tacos",       action: 'Visited' },
            { emoji: '☕', label: 'Coffee Inclination', action: 'Saved' },
            { emoji: '🔥', label: 'Moody Q',             action: 'Followed' },
          ].map((item) => (
            <div key={item.label} className="flex-shrink-0 flex items-center gap-2 bg-white rounded-xl px-3 py-2 shadow-card">
              <span className="text-base">{item.emoji}</span>
              <div>
                <p className="text-[11px] font-semibold text-navy leading-tight">{item.label}</p>
                <p className="text-[10px] text-gray-400">{item.action}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Settings Rows ── */}
      <div className="px-5 py-4">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Settings</p>
        <div className="card divide-y divide-gray-100">
          {settingsRows.map((row) => (
            <button
              key={row.label}
              className="w-full flex items-center gap-3 p-4 text-left active:bg-gray-50 transition-colors duration-150"
            >
              <span className="text-xl w-8 flex-shrink-0 text-center">{row.icon}</span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-navy">{row.label}</p>
                <p className="text-xs text-gray-400 mt-0.5 truncate">{row.sub}</p>
              </div>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M9 18l6-6-6-6" stroke="#CED4DA" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          ))}
        </div>
      </div>

      {/* ── Sign Out ── */}
      <div className="px-5 pb-6">
        <button className="w-full py-3.5 rounded-2xl border border-red-200 text-red-400 text-sm font-semibold active:bg-red-50 transition-all duration-150">
          Sign Out
        </button>
      </div>
    </div>
  )
}
