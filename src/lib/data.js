// ── Mock Business Data — Enid, Oklahoma ──────────────────────────────────────
// Coordinates centered around Enid, OK (36.3956° N, 97.8784° W)

export const businesses = [
  {
    id: 'valdos-tacos',
    name: "Valdo's Tacos",
    category: 'Mexican · Food Truck',
    emoji: '🌮',
    description:
      "Enid's beloved taco truck, serving handcrafted street tacos, loaded burritos, and fresh-squeezed agua frescas since 2015. Valdo's slow-braised meats and made-from-scratch salsas keep locals coming back every week.",
    address: '123 W Randolph Ave, Enid, OK 73701',
    lat: 36.3956,
    lng: -97.8784,
    hours: {
      monday:    '10:00 AM – 8:00 PM',
      tuesday:   '10:00 AM – 8:00 PM',
      wednesday: '10:00 AM – 8:00 PM',
      thursday:  '10:00 AM – 9:00 PM',
      friday:    '10:00 AM – 10:00 PM',
      saturday:  '11:00 AM – 10:00 PM',
      sunday:    'Closed',
    },
    todayHours: '10:00 AM – 9:00 PM',
    isOpen: true,
    distance: '0.3 mi',
    priceRange: '$',
    tags: ['Food Truck', 'Mexican', 'Tacos', 'Local Fav', 'Quick Bite'],
    heroGradient: 'linear-gradient(135deg, #FF6B4A 0%, #FF9472 60%, #FFB347 100%)',
    socialLinks: {
      instagram: 'https://instagram.com/valdostacos',
      facebook:  'https://facebook.com/valdostacos',
    },
    menuUrl: '#',
    isFeatured: true,
    recentlyAdded: false,
  },

  {
    id: 'coffee-inclination',
    name: 'Coffee Inclination',
    category: 'Coffee Shop · Café',
    emoji: '☕',
    description:
      'A cozy specialty coffee shop in the heart of downtown Enid. Sourcing single-origin beans from small farms, Coffee Inclination crafts every pour-over and espresso with intention. Their pastry case — stocked by local bakers — sells out by noon.',
    address: '215 S Grand St, Enid, OK 73701',
    lat: 36.3977,
    lng: -97.8801,
    hours: {
      monday:    '6:30 AM – 5:00 PM',
      tuesday:   '6:30 AM – 5:00 PM',
      wednesday: '6:30 AM – 5:00 PM',
      thursday:  '6:30 AM – 5:00 PM',
      friday:    '6:30 AM – 6:00 PM',
      saturday:  '7:00 AM – 4:00 PM',
      sunday:    '8:00 AM – 2:00 PM',
    },
    todayHours: '6:30 AM – 5:00 PM',
    isOpen: true,
    distance: '0.5 mi',
    priceRange: '$$',
    tags: ['Coffee', 'Specialty', 'Pastries', 'WiFi', 'Cozy'],
    heroGradient: 'linear-gradient(135deg, #3D2C1E 0%, #7B4F2E 60%, #C47F4A 100%)',
    socialLinks: {
      instagram: 'https://instagram.com/coffeeinclination',
      facebook:  'https://facebook.com/coffeeinclination',
    },
    menuUrl: '#',
    isFeatured: false,
    recentlyAdded: true,
  },

  {
    id: 'moody-q',
    name: 'Moody Q',
    category: 'BBQ · Restaurant',
    emoji: '🔥',
    description:
      'Low-and-slow Oklahoma BBQ that means business. Moody Q smokes brisket, ribs, and pulled pork overnight, serving them with house-made sides like smoked mac and jalapeño cornbread. The line starts before the doors open — arrive early.',
    address: '408 W Maine Ave, Enid, OK 73701',
    lat: 36.3941,
    lng: -97.8812,
    hours: {
      monday:    'Closed',
      tuesday:   '11:00 AM – 8:00 PM',
      wednesday: '11:00 AM – 8:00 PM',
      thursday:  '11:00 AM – 8:00 PM',
      friday:    '11:00 AM – 9:00 PM',
      saturday:  '11:00 AM – 9:00 PM',
      sunday:    '11:00 AM – 6:00 PM',
    },
    todayHours: '11:00 AM – 8:00 PM',
    isOpen: true,
    distance: '0.7 mi',
    priceRange: '$$',
    tags: ['BBQ', 'Brisket', 'Ribs', 'Local Fav', 'Dine In'],
    heroGradient: 'linear-gradient(135deg, #1A0A00 0%, #8B2500 60%, #D4521A 100%)',
    socialLinks: {
      instagram: 'https://instagram.com/moodyqbbq',
      facebook:  'https://facebook.com/moodyqbbq',
    },
    menuUrl: '#',
    isFeatured: true,
    recentlyAdded: false,
  },

  {
    id: 'rolling-cafe',
    name: 'Rolling Café',
    category: 'American · Diner',
    emoji: '🥞',
    description:
      'Enid\'s all-day breakfast institution. Rolling Café has been flipping stacks, scrambling eggs, and pouring strong coffee since 1987. The chrome stools and hand-written specials board are part of the charm — but it\'s the made-from-scratch biscuits that bring people back.',
    address: '622 S Van Buren St, Enid, OK 73703',
    lat: 36.3901,
    lng: -97.8756,
    hours: {
      monday:    '6:00 AM – 2:00 PM',
      tuesday:   '6:00 AM – 2:00 PM',
      wednesday: '6:00 AM – 2:00 PM',
      thursday:  '6:00 AM – 2:00 PM',
      friday:    '6:00 AM – 2:00 PM',
      saturday:  '6:00 AM – 3:00 PM',
      sunday:    '7:00 AM – 1:00 PM',
    },
    todayHours: '6:00 AM – 2:00 PM',
    isOpen: false,
    distance: '1.1 mi',
    priceRange: '$',
    tags: ['Breakfast', 'Diner', 'Biscuits', 'Classic', 'Cash Friendly'],
    heroGradient: 'linear-gradient(135deg, #1E3A5F 0%, #2D6A9F 60%, #56A0D3 100%)',
    socialLinks: {
      facebook: 'https://facebook.com/rollingcafeenid',
    },
    menuUrl: '#',
    isFeatured: false,
    recentlyAdded: true,
  },

  {
    id: 'mr-greek-house',
    name: 'Mr. Greek House',
    category: 'Greek · Mediterranean',
    emoji: '🫒',
    description:
      'Authentic Greek home cooking in the Oklahoma heartland. Mr. Greek House serves gyros, spanakopita, and roasted lamb alongside fresh tzatziki and imported olives. Owner Nikos Papadopoulos makes the phyllo by hand every morning — taste the difference.',
    address: '310 W Maple Ave, Enid, OK 73701',
    lat: 36.3965,
    lng: -97.8769,
    hours: {
      monday:    '11:00 AM – 9:00 PM',
      tuesday:   '11:00 AM – 9:00 PM',
      wednesday: '11:00 AM – 9:00 PM',
      thursday:  '11:00 AM – 9:00 PM',
      friday:    '11:00 AM – 10:00 PM',
      saturday:  '12:00 PM – 10:00 PM',
      sunday:    '12:00 PM – 8:00 PM',
    },
    todayHours: '11:00 AM – 9:00 PM',
    isOpen: true,
    distance: '0.4 mi',
    priceRange: '$$',
    tags: ['Greek', 'Mediterranean', 'Gyros', 'Dine In', 'Vegetarian Options'],
    heroGradient: 'linear-gradient(135deg, #00416A 0%, #00698C 60%, #00C9A7 100%)',
    socialLinks: {
      instagram: 'https://instagram.com/mrgreekhouse',
      facebook:  'https://facebook.com/mrgreekhouse',
    },
    menuUrl: '#',
    isFeatured: false,
    recentlyAdded: true,
  },
]

// ── Helpers ────────────────────────────────────────────────────────────────────

export function getBusinessById(id) {
  return businesses.find((b) => b.id === id) ?? null
}

export function getOpenBusinesses() {
  return businesses.filter((b) => b.isOpen)
}

export function getRecentlyAdded() {
  return businesses.filter((b) => b.recentlyAdded)
}

export function getFeatured() {
  return businesses.filter((b) => b.isFeatured)
}

export function getByCategory(category) {
  return businesses.filter((b) =>
    b.category.toLowerCase().includes(category.toLowerCase()) ||
    b.tags.some((t) => t.toLowerCase().includes(category.toLowerCase()))
  )
}

export const categories = [
  { id: 'food-trucks',      label: 'Food Trucks',     emoji: '🚚' },
  { id: 'coffee',           label: 'Coffee',          emoji: '☕' },
  { id: 'butchers',         label: 'Butchers',        emoji: '🥩' },
  { id: 'farmers-markets',  label: 'Farmers Markets', emoji: '🌽' },
  { id: 'pizza',            label: 'Pizza',           emoji: '🍕' },
  { id: 'shops',            label: 'Shops',           emoji: '🛍️' },
]

export const moodChips = [
  { id: 'open-now',    label: 'Open Now',    emoji: '🟢' },
  { id: 'new',         label: 'New',         emoji: '✨' },
  { id: 'near-you',    label: 'Near You',    emoji: '📍' },
  { id: 'local-favs',  label: 'Local Favs',  emoji: '❤️' },
  { id: 'road-trip',   label: 'Road Trip',   emoji: '🛣️' },
]
