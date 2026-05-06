# Lowki — Local Business Discovery

A mobile-first local business discovery app built with React + Vite.

---

## 🚀 Quick Start

```bash
# 1. Clone or unzip the project
cd lowki-app

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env
# Edit .env with your Supabase and Mapbox credentials

# 4. Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) — optimised for a **390px** mobile viewport.

---

## 🗂 Project Structure

```
src/
├── lib/
│   ├── supabase.js       # Supabase client
│   └── data.js           # Mock business data + helpers
├── components/
│   ├── BottomNav.jsx     # Bottom navigation bar
│   └── BusinessCard.jsx  # Reusable card (default / compact / horizontal)
├── pages/
│   ├── Splash.jsx        # Animated splash screen
│   ├── Home.jsx          # Main discovery feed
│   ├── MapPage.jsx       # Map view with filters
│   ├── Explore.jsx       # Road trip + category grid
│   ├── Saved.jsx         # Saved businesses
│   ├── UserProfile.jsx   # User account & settings
│   └── BusinessProfile.jsx # Full business detail
├── App.jsx               # Router + shell
├── main.jsx              # Entry point
└── index.css             # Tailwind + design tokens
```

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| `--coral` | `#FF6B4A` |
| `--navy` | `#0F1B2D` |
| `--cream` | `#FFFBF5` |
| `--teal` | `#00C9A7` |
| `--gray` | `#9BA8B5` |

Font: `system-ui` / SF Pro Display

---

## 📦 Tech Stack

- **React 19** + **Vite 8**
- **Tailwind CSS v3**
- **React Router v6**
- **Supabase JS** (auth & database)
- **Mapbox GL** + **react-map-gl** (live map — ready to wire up)

---

## 🗺 Routes

| Path | Page |
|------|------|
| `/` | Splash screen |
| `/home` | Home feed |
| `/map` | Map view |
| `/explore` | Explore / road trip |
| `/saved` | Saved businesses |
| `/profile` | User profile |
| `/business/:id` | Business detail |

---

## 🏙 Mock Data

Five Enid, OK businesses are included in `src/lib/data.js`:

1. 🌮 **Valdo's Tacos** — Food Truck
2. ☕ **Coffee Inclination** — Specialty Coffee
3. 🔥 **Moody Q** — BBQ
4. 🥞 **Rolling Café** — All-day Breakfast Diner
5. 🫒 **Mr. Greek House** — Greek / Mediterranean

---

## 🔌 Connecting Supabase

1. Create a project at [supabase.com](https://supabase.com)
2. Copy your `URL` and `anon key` into `.env`
3. Create a `businesses` table matching the schema in `src/lib/data.js`
4. Replace the mock data helpers with `supabase.from('businesses').select()`

---

## 🗺 Enabling the Live Map

1. Get a free token at [mapbox.com](https://www.mapbox.com)
2. Add `VITE_MAPBOX_TOKEN=pk.xxx` to `.env`
3. In `MapPage.jsx`, replace the SVG placeholder with:

```jsx
import Map, { Marker } from 'react-map-gl'

<Map
  mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
  initialViewState={{ longitude: -97.8784, latitude: 36.3956, zoom: 13 }}
  style={{ width: '100%', height: '100%' }}
  mapStyle="mapbox://styles/mapbox/streets-v12"
>
  {businesses.map(b => (
    <Marker key={b.id} longitude={b.lng} latitude={b.lat}>
      <span style={{ fontSize: 24 }}>{b.emoji}</span>
    </Marker>
  ))}
</Map>
```

---

## 📄 License

MIT — Build something great for your community.
