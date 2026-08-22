import type { Category } from './demos'

export const NAV_LINKS = [
  { label: 'Demos', href: '#experiences' },
  { label: 'Categories', href: '#categories' },
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#about' },
]

export const FILTER_CATEGORIES: (Category | 'All')[] = [
  'All',
  'Weddings',
  'Engagement',
  'Pre-Wedding',
  'Birthdays',
  'Baby & Family',
  'Corporate',
  'College',
  'Special Events',
  'Festivals',
  'Anniversary',
  'Housewarming',
]

export const TRUST_CATEGORIES = [
  'Weddings',
  'Engagements',
  'Birthdays',
  'Baby Ceremonies',
  'Anniversaries',
  'Housewarmings',
  'College Events',
  'Corporate Events',
  'Traditional Ceremonies',
]

export interface ProcessStep {
  number: string
  title: string
  description: string
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Choose an Experience',
    description:
      'Browse the gallery and pick a direction that feels like you — a mood, a style, a story. Every experience is only a starting point.',
  },
  {
    number: '02',
    title: 'Share Your Details',
    description:
      'Send us your date, venue, photos and the little things that matter. A short conversation with our studio team shapes the rest.',
  },
  {
    number: '03',
    title: 'We Customize Your Website',
    description:
      'We craft your colours, typography, story, countdown and guest journey into a living, breathing digital experience.',
  },
  {
    number: '04',
    title: 'Share It With Your Guests',
    description:
      'Go live with a beautiful link your guests will love. Invite, collect RSVPs, and let the story travel.',
  },
]

export interface Feature {
  title: string
  description: string
}

export const FEATURES: Feature[] = [
  {
    title: 'Countdown',
    description: 'A living countdown that turns every visit into anticipation.',
  },
  {
    title: 'Event Schedule',
    description: 'Full itineraries with times, venues and what-to-bring guidance.',
  },
  {
    title: 'Photo Gallery',
    description: 'Cinematic photo galleries your guests can wander through.',
  },
  {
    title: 'RSVP',
    description: 'Elegant RSVP forms and a digital guestbook your guests will want to write in.',
  },
  {
    title: 'Venue & Directions',
    description: 'Maps and directions so no guest ever gets lost on the way.',
  },
  {
    title: 'Music',
    description: 'An optional soundtrack that sets the tone from the very first second.',
  },
  {
    title: 'Video',
    description: 'Trailers, sangeet reels and highlight films woven into the experience.',
  },
  {
    title: 'QR Code',
    description: 'A scannable QR kit for invitations, cards and keepsakes.',
  },
  {
    title: 'WhatsApp Sharing',
    description: 'One tap and the invitation travels beautifully through WhatsApp.',
  },
  {
    title: 'Multiple Events',
    description: 'Mehndi, sangeet, pheras, reception — one website, every chapter.',
  },
  {
    title: 'Mobile Optimization',
    description: 'Every experience is designed for the phone in your guest’s hand.',
  },
  {
    title: 'Custom URL',
    description: 'A short, personal link your family will remember.',
  },
]

export interface PricingPlan {
  name: string
  price: string
  cadence: string
  tagline: string
  features: string[]
  highlight?: boolean
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'Starter',
    price: '₹299',
    cadence: 'per event',
    tagline: 'A beautiful, shareable website for one intimate celebration.',
    features: [
      'Premium template',
      'Event details & story',
      'Photo gallery',
      'Live countdown',
      'Venue & maps',
      'Shareable link',
    ],
  },
  {
    name: 'Signature',
    price: '₹799',
    cadence: 'per event',
    tagline: 'Our most-loved experience — cinematic, layered and alive.',
    features: [
      'Everything in Starter',
      'Multiple events (mehndi · sangeet · pheras)',
      'RSVP & guestbook',
      'Background music',
      'Video gallery',
      'QR code invite kit',
      'Advanced customization',
    ],
    highlight: true,
  },
  {
    name: 'Bespoke',
    price: '₹1,999',
    cadence: 'from, custom design',
    tagline: 'For weddings and flagship events that deserve their own world.',
    features: [
      'Custom design, from scratch',
      'Custom domain & branding',
      'Advanced animations',
      'AI-assisted content',
      'Personal studio support',
    ],
  },
]

export interface AboutStat {
  value: string
  label: string
}

export const ABOUT_STATS: AboutStat[] = [
  { value: '240+', label: 'Event websites crafted' },
  { value: '8', label: 'Categories of celebrations' },
  { value: '4.9★', label: 'Average guest rating' },
  { value: '48h', label: 'Average first draft' },
]

export const FOOTER_CATEGORIES: Category[] = [
  'Weddings',
  'Engagement',
  'Pre-Wedding',
  'Birthdays',
  'Baby & Family',
  'Corporate',
  'College',
  'Special Events',
  'Festivals',
  'Anniversary',
  'Housewarming',
]
