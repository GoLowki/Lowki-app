/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coral: '#FF6B4A',
        navy: '#0F1B2D',
        cream: '#FFFBF5',
        teal: '#00C9A7',
        gray: {
          DEFAULT: '#9BA8B5',
          50: '#F8F9FA',
          100: '#F1F3F5',
          200: '#E9ECEF',
          300: '#DEE2E6',
          400: '#CED4DA',
          500: '#9BA8B5',
          600: '#6C757D',
          700: '#495057',
          800: '#343A40',
          900: '#212529',
        },
      },
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"SF Pro Display"',
          '"Segoe UI"',
          'Roboto',
          'sans-serif',
        ],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        card: '0 2px 16px rgba(15,27,45,0.08)',
        'card-hover': '0 8px 32px rgba(15,27,45,0.14)',
        nav: '0 -1px 0 rgba(15,27,45,0.06), 0 -4px 24px rgba(15,27,45,0.06)',
      },
      backgroundImage: {
        'gradient-coral': 'linear-gradient(135deg, #FF6B4A 0%, #FF9472 100%)',
        'gradient-navy': 'linear-gradient(135deg, #0F1B2D 0%, #1A2F4A 100%)',
        'gradient-teal': 'linear-gradient(135deg, #00C9A7 0%, #00E5C0 100%)',
      },
    },
  },
  plugins: [],
}
