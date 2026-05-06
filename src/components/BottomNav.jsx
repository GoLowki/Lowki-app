import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const tabs = [
  {
    to: '/home',
    label: 'Home',
    icon: (active) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path
          d="M3 9.5L12 3L21 9.5V20C21 20.5523 20.5523 21 20 21H15V15H9V21H4C3.44772 21 3 20.5523 3 20V9.5Z"
          fill={active ? '#FF6B4A' : 'none'}
          stroke={active ? '#FF6B4A' : '#9BA8B5'}
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    to: '/map',
    label: 'Map',
    icon: (active) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path
          d="M9 20L3 17V4L9 7M9 20L15 17M9 20V7M15 17L21 20V7L15 4M15 17V4M9 7L15 4"
          stroke={active ? '#FF6B4A' : '#9BA8B5'}
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    to: '/explore',
    label: 'Explore',
    icon: (active) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle
          cx="12" cy="12" r="9"
          stroke={active ? '#FF6B4A' : '#9BA8B5'}
          strokeWidth="1.75"
        />
        <path
          d="M16.5 7.5L13.5 13.5L7.5 16.5L10.5 10.5L16.5 7.5Z"
          fill={active ? '#FF6B4A' : 'none'}
          stroke={active ? '#FF6B4A' : '#9BA8B5'}
          strokeWidth="1.75"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    to: '/saved',
    label: 'Saved',
    icon: (active) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path
          d="M19 21L12 16L5 21V5C5 3.89543 5.89543 3 7 3H17C18.1046 3 19 3.89543 19 5V21Z"
          fill={active ? '#FF6B4A' : 'none'}
          stroke={active ? '#FF6B4A' : '#9BA8B5'}
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    to: '/profile',
    label: 'Profile',
    icon: (active) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle
          cx="12" cy="8" r="4"
          fill={active ? '#FF6B4A' : 'none'}
          stroke={active ? '#FF6B4A' : '#9BA8B5'}
          strokeWidth="1.75"
        />
        <path
          d="M4 20C4 17.7909 7.58172 16 12 16C16.4183 16 20 17.7909 20 20"
          stroke={active ? '#FF6B4A' : '#9BA8B5'}
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
]

export default function BottomNav() {
  const location = useLocation()

  // Hide nav on splash screen
  if (location.pathname === '/' || location.pathname === '/splash') return null

  return (
    <nav
      className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[390px] bg-white z-50"
      style={{ boxShadow: 'var(--shadow-nav)' }}
    >
      <div className="flex items-center justify-around px-2 pt-2 pb-safe pb-3">
        {tabs.map((tab) => {
          const isActive =
            tab.to === '/home'
              ? location.pathname === '/home' || location.pathname === '/home'
              : location.pathname.startsWith(tab.to)

          return (
            <NavLink
              key={tab.to}
              to={tab.to}
              className="flex flex-col items-center gap-0.5 px-3 py-1 rounded-xl transition-all duration-150 active:scale-90"
            >
              {tab.icon(isActive)}
              <span
                className="text-[10px] font-semibold tracking-wide transition-colors duration-150"
                style={{ color: isActive ? '#FF6B4A' : '#9BA8B5' }}
              >
                {tab.label}
              </span>
            </NavLink>
          )
        })}
      </div>
    </nav>
  )
}
