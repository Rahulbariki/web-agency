export type Category =
  | 'Weddings'
  | 'Engagement'
  | 'Pre-Wedding'
  | 'Birthdays'
  | 'Baby & Family'
  | 'Corporate'
  | 'College'
  | 'Special Events'
  | 'Festivals'
  | 'Anniversary'
  | 'Housewarming'

export type Scene =
  | 'arch'
  | 'floral'
  | 'rings'
  | 'sunset'
  | 'confetti'
  | 'skyline'
  | 'aurora'
  | 'stars'
  | 'fireworks'
  | 'leaves'
  | 'balloon'
  | 'bokeh'
  | 'mountain'
  | 'citynight'
  | 'ticket'
  | 'sparkle'
  | 'wave'
  | 'monogram'
  | 'mandap'
  | 'garden'
  | 'beach'
  | 'stage'

export type DisplayPreset = 'editorial' | 'classic' | 'modern' | 'luxe'

export interface DemoTypography {
  display: DisplayPreset
  body: 'sans' | 'serif'
}

export interface DemoTheme {
  name: string
  scene: Scene
  /** 'dark' (cinematic) or 'light' (airy, editorial) */
  mode: 'dark' | 'light'
  c: {
    base: string
    a: string
    b: string
    accent: string
    text: string
  }
}

export interface HeroConfig {
  /** Visual image for the hero — defaults to the theme scene */
  image?: Scene
  overline?: string
  headline?: string
  subline?: string
}

export interface WelcomeConfig {
  heading: string
  message: string[]
  signoff: string
}

export interface RsvpConfig {
  confirmBy: string
  email: string
  phone: string
  prompt: string
  note?: string
}

export interface ContactConfig {
  email: string
  phone: string
  whatsapp: string
  note: string
  socials?: { label: string; url: string }[]
}

export interface SpecialFeature {
  icon: string
  title: string
  note: string
}

export interface FamilyMember {
  name: string
  relation: string
  note: string
  scene?: Scene
}

export interface GalleryItem {
  label: string
  scene: Scene
  caption: string
}

export interface ScheduleItem {
  time: string
  title: string
  note: string
}

export interface ExperienceDemo {
  id: string
  name: string
  category: Category
  style: string
  tagline: string
  description: string
  theme: DemoTheme
  typography: DemoTypography
  monogram: string
  heroKicker: string
  heroTitle: string
  heroSubtitle: string
  hero?: HeroConfig
  welcome: WelcomeConfig
  venue: string
  venueDetail: string
  countdownInDays: number
  guests: number
  story: string[]
  gallery: GalleryItem[]
  schedule: ScheduleItem[]
  track: string
  mood: string
  rsvp: RsvpConfig
  contact: ContactConfig
  specialFeatures: SpecialFeature[]
  family?: FamilyMember[]
  /** Rich card metadata */
  dateDisplay?: string
  timeDisplay?: string
  highlights?: string[]
}

export const CATEGORIES: Category[] = [
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

export const DEMOS: ExperienceDemo[] = [
  {
    id: 'aurelia-dev-amber-garden',
    name: 'Aurelia & Dev — A Garden in Amber',
    category: 'Weddings',
    style: 'Romantic Editorial',
    tagline: 'An intimate candlelit garden wedding photographed through golden amber light.',
    description:
      'Aurelia and Dev fell in love among her grandmother’s gardenias. Their website carries that same quiet warmth — amber light, hand-drawn florals and a guest book that feels like letters home.',
    theme: {
      name: 'Amber Hour',
      scene: 'arch',
      mode: 'dark',
      c: { base: '#171005', a: '#e8c47c', b: '#d9825c', accent: '#f3e3c0', text: '#f6efe2' },
    },
    typography: { display: 'editorial', body: 'sans' },
    monogram: 'A & D',
    heroKicker: 'We are getting married',
    heroTitle: 'A Garden in Amber',
    heroSubtitle: '08 · 14 · 2026 — The Glasshouse, Jaipur',
    hero: {
      overline: 'Together with their families',
      headline: 'A Garden in Amber',
      subline: 'Saturday, the fourteenth of August 2026',
    },
    welcome: {
      heading: 'Welcome, dearest family and friends',
      message: [
        'After two years of Sunday garden walks and pressed flowers, we are finally getting married — and there is no one we would rather have beside us than you.',
        'This little corner of the internet holds everything you need: the story, the plan, the directions, and a place to tell us you are coming. Please explore, and don’t forget to leave a note in our guest book.',
      ],
      signoff: 'With love, Aurelia & Dev',
    },
    venue: 'The Glasshouse',
    venueDetail: 'Avenue of Palms, Jaipur',
    countdownInDays: 120,
    guests: 180,
    story: [
      'They met on a rainy Tuesday at a street-side chai stall, sharing the last samosa. She insisted on splitting it. He insists that was the moment.',
      'Every Sunday since, they walked the gardens of the old fort — collecting pressed flowers, old postcards and the idea of a life that smells like rain and marigolds.',
      'Now, in the warm glow of family and jasmine light, they invite you to witness the story finally becoming a home.',
    ],
    gallery: [
      { label: 'The Proposal', scene: 'sunset', caption: 'He asked among the gardenias, just as she always dreamed.' },
      { label: 'The Rings', scene: 'rings', caption: 'Two heirlooms, one new beginning.' },
      { label: 'The Venue', scene: 'arch', caption: 'Candles, crystal and a hundred amber lights.' },
      { label: 'The Dance', scene: 'bokeh', caption: 'Under the open sky, to the song she hummed.' },
    ],
    schedule: [
      { time: '4:00 PM', title: 'Baraat & Welcome', note: 'Cocktails on the south lawn' },
      { time: '5:30 PM', title: 'The Ceremony', note: 'Under the amber arch — please arrive by 5:15' },
      { time: '7:00 PM', title: 'Dinner Is Served', note: 'A curated tasting menu' },
      { time: '8:30 PM', title: 'First Dance', note: 'The garden becomes a dance floor' },
    ],
    track: 'Amber — Anoushka Sharma',
    mood: 'warm, intimate, slow',
    rsvp: {
      confirmBy: 'Please confirm by Friday, 24 July 2026',
      email: 'aurelia.dev@wedding.in',
      phone: '+91 98765 41001',
      prompt: 'Will you celebrate with us?',
      note: 'The Glasshouse kitchen is small — kindly RSVP before the date above so the caterers can prepare for you.',
    },
    contact: {
      email: 'aurelia.dev@wedding.in',
      phone: '+91 98765 41001',
      whatsapp: '+91 98765 41001',
      note: 'For anything at all — directions, dietary needs, song requests — we are one message away.',
    },
    specialFeatures: [
      { icon: 'heart', title: 'Guest Book', note: 'Leave a message we’ll read on our first morning as a married couple.' },
      { icon: 'music', title: 'Live Song Requests', note: 'Request a song for the dance floor via the RSVP link.' },
      { icon: 'gift', title: 'Blessing Wall', note: 'Write a blessing — printed into our wedding album.' },
    ],
    family: [
      { name: 'Rajan & Meera Kapoor', relation: 'Parents of the bride', note: 'Hosting the weekend with all the warmth they’ve always shared.', scene: 'bokeh' },
      { name: 'Vikram & Sunita Dev', relation: 'Parents of the groom', note: 'The family that taught Dev how to make tea, laugh and stay late.', scene: 'leaves' },
      { name: 'Anjali', relation: 'Sister of the bride', note: 'Chief of ceremonies, holder of tissues, keeper of the playlist.', scene: 'floral' },
      { name: 'Kabir', relation: 'Brother of the groom', note: 'Running the whiskey bar and the speech that will embarrass Dev.', scene: 'sunset' },
    ],
    dateDisplay: '14 Aug 2026',
    timeDisplay: '4:00 PM onwards',
    highlights: ['Candlelit garden ceremony', 'Curated tasting menu', 'Live song requests'],
  },
  {
    id: 'meera-kabir-banyan',
    name: 'Meera & Kabir — Under the Banyan',
    category: 'Weddings',
    style: 'Vintage Botanical',
    tagline: 'A heritage wedding beneath a centuries-old banyan tree in the ancestral village.',
    description:
      'Under the sprawling banyan that has sheltered seven generations of Meera’s family, a love story completes its oldest chapter. Botanical greens, faded florals and the scent of attar and old poetry.',
    theme: {
      name: 'Heirloom Garden',
      scene: 'floral',
      mode: 'dark',
      c: { base: '#0f140e', a: '#8fae8a', b: '#c9b98a', accent: '#e3d5a8', text: '#f2ecdc' },
    },
    typography: { display: 'classic', body: 'serif' },
    monogram: 'M & K',
    heroKicker: 'Together with their families',
    heroTitle: 'Under the Banyan',
    heroSubtitle: '19 · 11 · 2026 — The Ancestral Haveli, Udaipur',
    hero: {
      overline: 'With joy and gratitude',
      headline: 'Under the Banyan',
      subline: 'Thursday, the nineteenth of November 2026',
    },
    welcome: {
      heading: 'A homecoming, and a wedding',
      message: [
        'For seven generations, the banyan in our courtyard has watched this family gather, grieve, dance and celebrate. This November, it will watch us marry.',
        'Our village, our haveli and our grandmother’s recipes are yours for the weekend. We would be honoured to share them with you.',
      ],
      signoff: 'With all our hearts, Meera & Kabir',
    },
    venue: 'The Ancestral Haveli',
    venueDetail: 'Village Siyol, Udaipur',
    countdownInDays: 185,
    guests: 320,
    story: [
      'Every summer of her childhood, Meera returned to the banyan tree with her grandmother. It was there she learned that roots and wings are the same thing.',
      'Kabir arrived in the village to document its vanishing crafts. He stayed for a wedding season — and never really left.',
      'They will exchange vows where her grandfather exchanged his, under a canopy older than the town itself.',
    ],
    gallery: [
      { label: 'The Old Tree', scene: 'leaves', caption: 'A canopy that has seen everything.' },
      { label: 'The Mehndi', scene: 'floral', caption: 'Henna patterns passed down by hand.' },
      { label: 'The Courtyard', scene: 'sunset', caption: 'Where the whole village will gather.' },
      { label: 'The Flame', scene: 'fireworks', caption: 'Agni as witness, under the stars.' },
    ],
    schedule: [
      { time: '9:00 AM', title: 'Haldi & Morning Rites', note: 'Yellow, laughter, turmeric' },
      { time: '12:30 PM', title: 'The Pheras', note: 'Under the banyan, seven vows' },
      { time: '3:00 PM', title: 'Feast at the Haveli', note: 'The family menu, unchanged since 1958' },
      { time: '6:30 PM', title: 'Reception & Gaanth', note: 'Dancing until the lanterns burn low' },
    ],
    track: 'Banyan — Heritage Ensemble',
    mood: 'rooted, generous, storybook',
    rsvp: {
      confirmBy: 'Please confirm by Saturday, 10 October 2026',
      email: 'meera.kabir@wedding.in',
      phone: '+91 98280 42002',
      prompt: 'Will you join us under the banyan?',
      note: 'The village guesthouses are limited — mention it in your RSVP if you need a place to stay.',
    },
    contact: {
      email: 'meera.kabir@wedding.in',
      phone: '+91 98280 42002',
      whatsapp: '+91 98280 42002',
      note: 'Reach the families directly for travel, stays or anything at all.',
    },
    specialFeatures: [
      { icon: 'flower', title: 'Heritage Menus', note: 'The full family menu, photographed and dated back to 1958.' },
      { icon: 'map', title: 'Village Guide', note: 'A walkthrough of the haveli, the banyan and the old school.' },
      { icon: 'book', title: 'Family Archive', note: 'Six generations of photographs, waiting to be explored.' },
    ],
    family: [
      { name: 'Rohan & Kavita Choudhary', relation: 'Parents of the bride', note: 'Guardians of the haveli, the banyan and every family recipe.' },
      { name: 'Arun & Lakshmi Bishnoi', relation: 'Parents of the groom', note: 'Visitors who became family at the very first wedding season.' },
      { name: 'Nandini', relation: 'Sister of the bride', note: 'The one who taught Meera to swing from the banyan’s lowest branch.' },
      { name: 'Yash', relation: 'Cousin of the groom', note: 'DJ, photographer and the family’s unofficial historian.' },
    ],
  },
  {
    id: 'sofia-liam-golden-hour',
    name: 'Sofia & Liam — Golden Hour',
    category: 'Weddings',
    style: 'Cinematic Film',
    tagline: 'A cliffside ceremony timed to the last perfect hour of sunlight.',
    description:
      'Film grain, warm halos and the ocean behind them. Sofia and Liam chose to marry exactly when the light turns to honey — their whole site is built around that single, perfect hour.',
    theme: {
      name: 'Golden Hour',
      scene: 'sunset',
      mode: 'light',
      c: { base: '#f7efe1', a: '#d98a52', b: '#c96a4f', accent: '#a8572f', text: '#2b2118' },
    },
    typography: { display: 'editorial', body: 'sans' },
    monogram: 'S & L',
    heroKicker: 'Save the date',
    heroTitle: 'Golden Hour',
    heroSubtitle: '22 · 05 · 2026 — Cliff Chapel, Santorini',
    hero: {
      overline: 'Sunset · 7:02 PM',
      headline: 'Golden Hour',
      subline: 'Friday, the twenty-second of May 2026',
    },
    welcome: {
      heading: 'Come for the golden hour',
      message: [
        'We fell in love at a crowded sunset in Oia, and we’ve been chasing that light ever since. So we built a wedding around it.',
        'Sixty of our favourite people, one island, and a ceremony that begins precisely as the sun begins to set. Bring light clothes, a light heart, and your camera — actually, leave the camera; we have two.',
      ],
      signoff: 'Yours in the golden light, Sofia & Liam',
    },
    venue: 'Cliff Chapel',
    venueDetail: 'Oia, Santorini',
    countdownInDays: 96,
    guests: 60,
    story: [
      'They photographed strangers for a living and finally — shyly — turned the camera on each other at a crowded sunset in Oia.',
      'Sofia kept every print. Liam kept the film negatives. Between them, the whole story was already developed.',
      'Sixty guests, one island, and a wedding that begins precisely as the sun begins to set.',
    ],
    gallery: [
      { label: 'Golden Hour', scene: 'sunset', caption: 'The light they built a wedding around.' },
      { label: 'The Cliffs', scene: 'mountain', caption: 'White walls, blue domes, endless blue.' },
      { label: 'The Aisle', scene: 'wave', caption: 'Aisle of petals facing the Aegean.' },
      { label: 'After Dark', scene: 'stars', caption: 'Dinner under a foreign sky.' },
    ],
    schedule: [
      { time: '6:15 PM', title: 'Guests Arrive', note: 'Champagne on the terrace' },
      { time: '7:02 PM', title: 'Golden Hour Ceremony', note: 'Sharp at sunset — film crews, no phones' },
      { time: '8:00 PM', title: 'Dinner in the Courtyard', note: 'Local seafood, Greek wine' },
      { time: '9:30 PM', title: 'Dancing to the Sea', note: 'Barefoot encouraged' },
    ],
    track: 'Honey — The Coast Strings',
    mood: 'sun-drenched, tender, fleeting',
    rsvp: {
      confirmBy: 'Please confirm by Friday, 1 May 2026',
      email: 'sofia.liam@wedding.com',
      phone: '+30 697 200 4001',
      prompt: 'Will you watch the sun set with us?',
      note: 'Boat transfers from Fira are arranged for all guests staying in town.',
    },
    contact: {
      email: 'sofia.liam@wedding.com',
      phone: '+30 697 200 4001',
      whatsapp: '+30 697 200 4001',
      note: 'Questions about boats, swims, or the dress code — just write.',
    },
    specialFeatures: [
      { icon: 'sun', title: 'Golden Hour Timer', note: 'A live countdown to the exact moment of sunset.' },
      { icon: 'camera', title: 'Film Roll', note: 'Share your photos — they’ll be developed into a shared film roll.' },
      { icon: 'heart', title: 'Vow Wall', note: 'Write a vow for us; we’ll read them on the terrace.' },
    ],
    family: [
      { name: 'Eleni & Nikos', relation: 'Parents of the bride', note: 'Owners of the little taverna where Sofia first waited tables.' },
      { name: 'Owen & Claire', relation: 'Parents of the groom', note: 'The couple who taught Liam to love the sea and the long way home.' },
      { name: 'Thea', relation: 'Sister of the bride', note: 'Florist, and the reason every table looks like a garden.' },
      { name: 'Max', relation: 'Brother of the groom', note: 'Chartering the boats that will carry everyone to the ceremony.' },
    ],
  
    dateDisplay: '22 May 2026',
    timeDisplay: '6:15 PM onwards',
    highlights: ['Cliffside sunset ceremony', 'Film crew photography', 'Barefoot dancing by the sea'],},
  {
    id: 'riya-aarav-forever-begins',
    name: 'Riya & Aarav — Forever Begins',
    category: 'Engagement',
    style: 'Contemporary Minimal',
    tagline: 'A city engagement told with clean type, bold geometry and a single red thread.',
    description:
      'Two young architects designed their engagement the way they design buildings — with restraint, honesty and one unforgettable accent. Every element on the site mirrors their minimal, modern love.',
    theme: {
      name: 'White Space',
      scene: 'rings',
      mode: 'dark',
      c: { base: '#0e0d12', a: '#d9ccb6', b: '#9a8fb0', accent: '#efe6d5', text: '#f5efe6' },
    },
    typography: { display: 'modern', body: 'sans' },
    monogram: 'R & A',
    heroKicker: 'She said yes',
    heroTitle: 'Forever Begins',
    heroSubtitle: '02 · 06 · 2026 — The Rooftop, Bombay',
    hero: {
      overline: 'The engagement',
      headline: 'FOREVER BEGINS',
      subline: '02 · 06 · 2026 · The Rooftop, Lower Parel',
    },
    welcome: {
      heading: 'You’re invited to the yes',
      message: [
        'A rooftop, forty of our favourite people, and a city glowing below. That’s the whole brief — no theme, no gimmicks, just good people and better light.',
        'Join us for the second (better rehearsed) yes, and the party that follows.',
      ],
      signoff: 'Riya & Aarav',
    },
    venue: 'Skyline Rooftop',
    venueDetail: 'Lower Parel, Mumbai',
    countdownInDays: 74,
    guests: 40,
    story: [
      'They met arguing over a floor plan at 2am. He still says she was wrong. She still says she was right. Both of them are.',
      'The proposal was a scaled wooden model of their future home, with the word "yes" carved into the front door.',
      'Now the blueprint is real — a rooftop, forty of their favourite people, and a city glowing below.',
    ],
    gallery: [
      { label: 'The Yes', scene: 'rings', caption: 'The ring that started a building.' },
      { label: 'The City', scene: 'skyline', caption: 'Their love is a Bombay skyline.' },
      { label: 'The Toast', scene: 'bokeh', caption: 'Champagne and confetti at dusk.' },
      { label: 'The Plans', scene: 'monogram', caption: 'Still sketching the future, together.' },
    ],
    schedule: [
      { time: '7:00 PM', title: 'Sundowners', note: 'Welcome drink at the edge of the sky' },
      { time: '8:15 PM', title: 'The Yes, Again', note: 'A toast and a story' },
      { time: '9:00 PM', title: 'Dinner', note: 'Four courses, one long table' },
      { time: '10:30 PM', title: 'Open Night', note: 'Music until the city sleeps' },
    ],
    track: 'Blueprint — The Analog Band',
    mood: 'sharp, modern, electric',
    rsvp: {
      confirmBy: 'Please confirm by Sunday, 17 May 2026',
      email: 'riya.aarav@wedding.in',
      phone: '+91 99870 43003',
      prompt: 'Will you raise a glass with us?',
      note: 'Rooftop access is via the Pearl Hotel lobby — valet parking available.',
    },
    contact: {
      email: 'riya.aarav@wedding.in',
      phone: '+91 99870 43003',
      whatsapp: '+91 99870 43003',
      note: 'For directions, dietary notes or the building password — we’re here.',
    },
    specialFeatures: [
      { icon: 'star', title: 'City Light Show', note: 'A schedule of when the skyline lights its buildings, timed to the toast.' },
      { icon: 'ticket', title: 'Digital Invite', note: 'A scannable QR invite - bring it, not a paper card.' },
      { icon: 'music', title: 'One Long Table', note: 'Seating by song choice - pick yours on the RSVP.' },
    ],
    family: [
      { name: 'Nalini & Raghav Sethi', relation: 'Parents of the bride', note: 'They met in architecture school, exactly like their daughter would.' },
      { name: 'Meera & Vijay Aarav', relation: 'Parents of the groom', note: 'Proof that a long marriage is a shared drawing, endlessly revised.' },
      { name: 'Ishaan', relation: 'Brother of the groom', note: 'Structural engineer. Runs the rooftop and the playlist.' },
    ],
  
    dateDisplay: '2 Jun 2026',
    timeDisplay: '7:00 PM onwards',
    highlights: ['Rooftop city views', 'Architect-designed proposal', 'One long dinner table'],},
  {
    id: 'nina-jose-proposal-night',
    name: 'Nina & José — The Proposal Night',
    category: 'Engagement',
    style: 'Midnight Elegance',
    tagline: 'A black-tie engagement where every photo glows like candlelight on velvet.',
    description:
      'José planned it for months: a secret night garden, a single spotlight, forty roses and one question. The website captures that midnight velvet atmosphere in every scroll.',
    theme: {
      name: 'Noir Velvet',
      scene: 'bokeh',
      mode: 'dark',
      c: { base: '#0d0b16', a: '#b8a6d8', b: '#e28ab0', accent: '#efe6ff', text: '#f1ecfa' },
    },
    typography: { display: 'luxe', body: 'sans' },
    monogram: 'N & J',
    heroKicker: 'They got engaged',
    heroTitle: 'The Proposal Night',
    heroSubtitle: '27 · 02 · 2026 — The Garden Noir, Goa',
    hero: {
      overline: 'A night garden, one spotlight',
      headline: 'The Proposal Night',
      subline: 'Friday, the twenty-seventh of February 2026',
    },
    welcome: {
      heading: 'Welcome to the secret garden',
      message: [
        'What happened at Garden Noir was always going to be a story for the twenty-four people we love most. Now you get the front-row version.',
        'This site holds the whole evening — the plan, the place, the playlist, and a place to tell us you’re coming.',
      ],
      signoff: 'With love, Nina & José',
    },
    venue: 'Garden Noir',
    venueDetail: 'Assagao, Goa',
    countdownInDays: 58,
    guests: 24,
    story: [
      'Nina had said she never wanted a public proposal. So José built her one no one else would ever see.',
      'One table, forty roses, their song, and a ring that had been hiding in his passport for six months.',
      'The morning after, they called the twenty-four people they love most. This site is that phone call, in digital form.',
    ],
    gallery: [
      { label: 'The Question', scene: 'rings', caption: 'One spotlight, one ring.' },
      { label: 'The Roses', scene: 'floral', caption: 'Forty roses for forty years.' },
      { label: 'The Night', scene: 'stars', caption: 'Goa after dark holds secrets well.' },
      { label: 'The Morning', scene: 'sunset', caption: 'When it all became real.' },
    ],
    schedule: [
      { time: '8:00 PM', title: 'Midnight Garden Opens', note: 'Arrive in black tie' },
      { time: '8:45 PM', title: 'The Story', note: 'How the night was planned' },
      { time: '9:30 PM', title: 'Dinner Under Candles', note: 'A tasting menu by candlelight' },
      { time: '11:00 PM', title: 'Dance on Velvet', note: 'Until the moon sets' },
    ],
    track: 'Velvet Hours — Luma Quartet',
    mood: 'nocturnal, private, cinematic',
    rsvp: {
      confirmBy: 'Please confirm by Sunday, 15 February 2026',
      email: 'nina.jose@wedding.com',
      phone: '+91 98300 44004',
      prompt: 'Will you join the midnight garden?',
      note: 'Black tie. The garden is outdoors — velvet and candles will do the warming.',
    },
    contact: {
      email: 'nina.jose@wedding.com',
      phone: '+91 98300 44004',
      whatsapp: '+91 98300 44004',
      note: 'For the exact villa location and driver instructions, drop us a line.',
    },
    specialFeatures: [
      { icon: 'moon', title: 'Midnight Playlist', note: 'The songs of the evening, streaming on the site.' },
      { icon: 'camera', title: 'No-Phone Night', note: 'A photo booth with the film crew does the remembering.' },
      { icon: 'heart', title: 'The Story, Told', note: 'Read how forty roses became one question.' },
    ],
  
    dateDisplay: '27 Feb 2026',
    timeDisplay: '8:00 PM onwards',
    highlights: ['Midnight garden setting', 'No-phone photography night', 'Candlelit tasting menu'],},
  {
    id: 'story-before-twin-suns',
    name: 'The Story Before — Twin Suns',
    category: 'Pre-Wedding',
    style: 'Dreamlike Film',
    tagline: 'A pre-wedding shoot experience set in desert dunes under aurora skies.',
    description:
      'Before the wedding comes the promise. This pre-wedding website follows the couple through two days of shooting in a surreal desert — a visual novel guests can scroll through like a film.',
    theme: {
      name: 'Aurora Dunes',
      scene: 'aurora',
      mode: 'dark',
      c: { base: '#0b1218', a: '#7fd4c2', b: '#a78bc0', accent: '#e8f4e8', text: '#eef6f0' },
    },
    typography: { display: 'luxe', body: 'sans' },
    monogram: 'A · S',
    heroKicker: 'A pre-wedding story',
    heroTitle: 'Twin Suns',
    heroSubtitle: 'The Journey · Shot over two golden days',
    hero: {
      overline: 'The journey',
      headline: 'Twin Suns',
      subline: 'A visual journal, shot over two golden days',
    },
    welcome: {
      heading: 'Before the "I do" — the in-between',
      message: [
        'This is the part of the story that usually lives in a scrapbook: the drive-in, the campfire, the frames that almost didn’t make the cut.',
        'We wanted you to walk through it the way we lived it — frame by frame, first light to last light.',
      ],
      signoff: 'Ana & Sid',
    },
    venue: 'The Salt Desert',
    venueDetail: 'Kutch, Gujarat',
    countdownInDays: 40,
    guests: 12,
    story: [
      'No stranger to drama, the couple wanted a shoot that felt less like posing and more like wandering — dunes, wind, and a borrowed vintage truck.',
      'The aurora appears nowhere near Kutch. It is painted here the way memory paints things: brighter, stranger, truer.',
      'Scroll through the frames exactly as they were captured — first light to last.',
    ],
    gallery: [
      { label: 'Frame 01', scene: 'aurora', caption: 'First light over the salt.' },
      { label: 'Frame 02', scene: 'mountain', caption: 'The dunes at noon.' },
      { label: 'Frame 03', scene: 'sunset', caption: 'Two shadows, one line.' },
      { label: 'Frame 04', scene: 'stars', caption: 'The night they almost missed.' },
    ],
    schedule: [
      { time: 'Day 1', title: 'The Drive In', note: 'Truck, sand, and silence' },
      { time: 'Day 2', title: 'The Shooting', note: 'From first light to last light' },
      { time: 'Night', title: 'The Campfire', note: 'The frames that didn’t make the cut' },
      { time: 'Day 3', title: 'The Reveal', note: 'Editing begins on the drive home' },
    ],
    track: 'Dune Hymn — Fables of the Field',
    mood: 'cinematic, surreal, wandering',
    rsvp: {
      confirmBy: 'Just a hello — no RSVP needed',
      email: 'hello@storybefore.in',
      phone: '+91 90040 45005',
      prompt: 'Leave a word for the couple',
      note: 'This journal is a gift to the wedding guests — no formal RSVP. But do leave a message.',
    },
    contact: {
      email: 'hello@storybefore.in',
      phone: '+91 90040 45005',
      whatsapp: '+91 90040 45005',
      note: 'For the full-length film and prints, write to the studio.',
    },
    specialFeatures: [
      { icon: 'video', title: 'The Film', note: 'A five-minute film of the shoot, premiering on the wedding day.' },
      { icon: 'camera', title: 'All Frames', note: 'Every single frame, downloadable in a private gallery.' },
      { icon: 'leaf', title: 'The Location', note: 'A guide to the salt desert, for anyone who wants to wander.' },
    ],
  
    dateDisplay: 'Visual Journal',
    timeDisplay: 'Two golden days',
    highlights: ['Desert dune locations', 'Aurora-painted skies', 'Vintage truck shoot'],},
  {
    id: 'anna-marco-two-landscapes',
    name: 'Anna & Marco — Two Landscapes',
    category: 'Pre-Wedding',
    style: 'Editorial Story',
    tagline: 'A pre-wedding journal crossing two countries in one visual narrative.',
    description:
      'She is from the mountains, he is from the sea. Their pre-wedding website is a photo journal of two landscapes learning to hold hands.',
    theme: {
      name: 'Mountain & Tide',
      scene: 'mountain',
      mode: 'dark',
      c: { base: '#101416', a: '#c9b18a', b: '#8f9fb0', accent: '#ece2cf', text: '#f2eee6' },
    },
    typography: { display: 'classic', body: 'serif' },
    monogram: 'A · M',
    heroKicker: 'A journey in two parts',
    heroTitle: 'Two Landscapes',
    heroSubtitle: 'Where she was raised · Where he learned to swim',
    hero: {
      overline: 'A journey in two parts',
      headline: 'Two Landscapes',
      subline: 'The Alps to the Adriatic, in seven days',
    },
    welcome: {
      heading: 'Two worlds, one horizon',
      message: [
        'Anna grew up above the clouds; Marco below the waves. Somewhere between a mountain village and a seaside cove, they found their middle.',
        'This journal follows them across seven days and both of their homes, and we would love for you to walk beside them.',
      ],
      signoff: 'Anna & Marco',
    },
    venue: 'The Alps to the Adriatic',
    venueDetail: 'Northern Italy',
    countdownInDays: 66,
    guests: 8,
    story: [
      'Anna grew up above the clouds; Marco below the waves. They met in the middle — at a train station — and never stopped moving toward each other.',
      'This journal follows them from the highest village she knows to the cove where he first heard the sea.',
      'Every photograph is a bridge between the two worlds that made them.',
    ],
    gallery: [
      { label: 'The High Village', scene: 'mountain', caption: 'Above the clouds, where she grew up.' },
      { label: 'The Crossing', scene: 'sunset', caption: 'The train ride between their worlds.' },
      { label: 'The Sea', scene: 'wave', caption: 'The cove where he learned to swim.' },
      { label: 'The Meeting', scene: 'rings', caption: 'Two landscapes, one horizon.' },
    ],
    schedule: [
      { time: 'Day 1', title: 'Above the Clouds', note: 'The village where she was raised' },
      { time: 'Day 3', title: 'The Crossing', note: 'A day on the rails between homes' },
      { time: 'Day 5', title: 'Below the Waves', note: 'The cove where he learned to swim' },
      { time: 'Day 7', title: 'The Horizon', note: 'Where the two landscapes meet' },
    ],
    track: 'Between Two Homes — Eolo',
    mood: 'wandering, elemental, honest',
    rsvp: {
      confirmBy: 'Open journal — just sign',
      email: 'anna.marco@wedding.it',
      phone: '+39 339 102 4506',
      prompt: 'Sign the travel journal',
      note: 'No RSVP for the journal itself — but the wedding invites come separately, and we’d love you there.',
    },
    contact: {
      email: 'anna.marco@wedding.it',
      phone: '+39 339 102 4506',
      whatsapp: '+39 339 102 4506',
      note: 'For prints, the travel notes, or a recipe — write to us.',
    },
    specialFeatures: [
      { icon: 'map', title: 'The Route', note: 'An interactive map of the seven-day journey.' },
      { icon: 'book', title: 'Travel Notes', note: 'Field notes and train timetables from both trips.' },
      { icon: 'camera', title: 'The Negatives', note: 'Unedited frames, shown side by side.' },
    ],
  
    dateDisplay: '7 Days',
    timeDisplay: 'First light to last',
    highlights: ['Two Italian landscapes', 'Train journey between homes', 'Seven-day photo journal'],},
  {
    id: 'aria-turns-sixteen',
    name: 'Aria Turns Sixteen',
    category: 'Birthdays',
    style: 'Festive Modern',
    tagline: 'A confetti-soaked sweet sixteen with its own neon glow and photo booth wall.',
    description:
      'Sixteen candles, infinite energy. Aria’s birthday website is a burst of confetti, polaroids and a digital guest wall where friends leave messages before the party even starts.',
    theme: {
      name: 'Neon Fête',
      scene: 'confetti',
      mode: 'dark',
      c: { base: '#150d12', a: '#f2a0b8', b: '#c9a0f2', accent: '#ffe9f0', text: '#ffe9f0' },
    },
    typography: { display: 'modern', body: 'sans' },
    monogram: 'A·16',
    heroKicker: 'You’re invited',
    heroTitle: 'Aria Turns Sixteen',
    heroSubtitle: '09 · 04 · 2026 — Studio One, Pune',
    hero: {
      overline: 'Sweet sixteen',
      headline: 'ARIA TURNS SIXTEEN',
      subline: '09 · 04 · 2026 · Studio One, Pune',
    },
    welcome: {
      heading: 'Guess what? Sixteen!',
      message: [
        'I’ve planned a hundred parties for other people — this one is all mine, and I want my people there.',
        'Neon sign, confetti cannon every hour, and a photo booth that prints on the spot. Come as you are; the lights will do the rest.',
      ],
      signoff: 'See you there — Aria',
    },
    venue: 'Studio One',
    venueDetail: 'Koregaon Park, Pune',
    countdownInDays: 46,
    guests: 150,
    story: [
      'Aria is the friend who plans everyone else’s surprises. This year, forty of her closest people planned hers.',
      'There will be a neon sign, a confetti cannon every hour, and a wall where every guest is already leaving their best wishes.',
      'Come in your most joyful outfit. Leave your phone in your pocket — the photo booth has it covered.',
    ],
    gallery: [
      { label: 'The Cake', scene: 'confetti', caption: 'Sixteen candles, one impossible wish.' },
      { label: 'The Booth', scene: 'bokeh', caption: 'Polaroids for every guest.' },
      { label: 'The Wall', scene: 'stars', caption: 'Messages that stay long after.' },
      { label: 'The Lights', scene: 'citynight', caption: 'Studio One, all lit up.' },
    ],
    schedule: [
      { time: '6:00 PM', title: 'Doors & Photo Booth', note: 'Arrive camera-ready' },
      { time: '7:30 PM', title: 'The Cake Moment', note: 'Confetti cannon #1' },
      { time: '9:00 PM', title: 'Dance Hour', note: 'DJ sets until the lights blur' },
      { time: '10:30 PM', title: 'Goodbye Wall', note: 'Sign the wall before you go' },
    ],
    track: 'Sixteen — Neon Hearts',
    mood: 'electric, joyful, loud',
    rsvp: {
      confirmBy: 'Please confirm by Sunday, 29 March 2026',
      email: 'aria.16@parties.in',
      phone: '+91 90990 46007',
      prompt: 'Are you coming to party?',
      note: 'Permission slips are the parents’ problem — just mark yourself in.',
    },
    contact: {
      email: 'aria.16@parties.in',
      phone: '+91 90990 46007',
      whatsapp: '+91 90990 46007',
      note: 'Text for the secret entrance, the dress code, or the playlist request link.',
    },
    specialFeatures: [
      { icon: 'music', title: 'Request the DJ', note: 'Drop your song into the queue before the party.' },
      { icon: 'camera', title: 'Live Photo Wall', note: 'Every booth print appears on the site live.' },
      { icon: 'sparkles', title: 'Dress Code', note: 'Neon and glitter encouraged — no exceptions.' },
    ],
  
    dateDisplay: '9 Apr 2026',
    timeDisplay: '6:00 PM onwards',
    highlights: ['Confetti cannons hourly', 'Live photo booth wall', 'DJ until the lights blur'],},
  {
    id: 'grandpas-eightieth',
    name: 'Grandpa’s 80th — A Century of Love',
    category: 'Birthdays',
    style: 'Nostalgic Classic',
    tagline: 'Eight decades, one marigold-gold evening, and the whole family on the dance floor.',
    description:
      'Vijay Uncle has told the same jokes since 1986. This website tells them properly — with every decade of photographs, every cousin’s tribute and one very large cake.',
    theme: {
      name: 'Marigold Memory',
      scene: 'fireworks',
      mode: 'dark',
      c: { base: '#100a12', a: '#e8c968', b: '#c9687a', accent: '#f7ecc8', text: '#f8f0dc' },
    },
    typography: { display: 'classic', body: 'serif' },
    monogram: '80',
    heroKicker: 'A family celebration',
    heroTitle: 'A Century of Love',
    heroSubtitle: '05 · 10 · 2026 — The Club Gardens, Delhi',
    hero: {
      overline: 'Vijay Uncle turns eighty',
      headline: 'A Century of Love',
      subline: 'Monday, the fifth of October 2026',
    },
    welcome: {
      heading: 'Eighty years, and counting',
      message: [
        'Our father, our grandfather, our joke-machine — turns eighty this October, and the whole family is coming home for it.',
        'We’ve gathered eight decades of photographs into a digital family album, and we’d love you to add your own before the big night.',
      ],
      signoff: 'The whole family, with love',
    },
    venue: 'The Club Gardens',
    venueDetail: 'Golf Links, New Delhi',
    countdownInDays: 84,
    guests: 200,
    story: [
      'He was born under a kerosene lamp, ran his first business at nineteen, and has been the centre of every family argument since.',
      'The family has collected photographs from all eight decades — school, weddings, first cars, first grandchildren, and that one terrible holiday haircut.',
      'You’re invited to add your own picture to the digital family album before the big night.',
    ],
    gallery: [
      { label: '1950s', scene: 'sunset', caption: 'The first photograph, sepia and smiling.' },
      { label: '1970s', scene: 'leaves', caption: 'The wedding, the moustache, the legend.' },
      { label: '1990s', scene: 'confetti', caption: 'The years of Sunday cricket.' },
      { label: 'Now', scene: 'fireworks', caption: 'Eighty candles, and counting.' },
    ],
    schedule: [
      { time: '6:30 PM', title: 'Marigold Welcome', note: 'Chai, kachori, nostalgia' },
      { time: '7:30 PM', title: 'The Slideshow', note: 'Eight decades in twenty minutes' },
      { time: '8:30 PM', title: 'Cake & Tribute', note: 'Prepare tissues' },
      { time: '9:00 PM', title: 'Dance Floor Opens', note: 'The aunties take over' },
    ],
    track: 'Old Gold — The Family Band',
    mood: 'warm, funny, beloved',
    rsvp: {
      confirmBy: 'Please confirm by Sunday, 20 September 2026',
      email: 'vijay.80@family.in',
      phone: '+91 98110 47008',
      prompt: 'Will you join the celebration?',
      note: 'If you’re a cousin with a tribute video, send it with your RSVP.',
    },
    contact: {
      email: 'vijay.80@family.in',
      phone: '+91 98110 47008',
      whatsapp: '+91 98110 47008',
      note: 'For the digital album link, surprise coordination or seating — get in touch.',
    },
    specialFeatures: [
      { icon: 'camera', title: 'Family Album', note: 'Add your photograph to eight decades of family history.' },
      { icon: 'book', title: 'Tribute Wall', note: 'A message for Vijay Uncle, read aloud at the cake moment.' },
      { icon: 'music', title: 'The Aunties’ Setlist', note: 'The dance-floor hits, announced in advance.' },
    ],
  
    dateDisplay: '5 Oct 2026',
    timeDisplay: '6:30 PM onwards',
    highlights: ['Eight decades slideshow', 'Family tribute videos', 'Marigold decorations'],},
  {
    id: 'welcome-little-nova',
    name: 'Welcome, Little Nova',
    category: 'Baby & Family',
    style: 'Soft Pastel',
    tagline: 'A gentle digital announcement for the newest, tiniest member of the family.',
    description:
      'She arrived at 3:14am, weighing exactly one watermelon. This soft pastel website is the family’s way of introducing Nova to everyone who already loves her.',
    theme: {
      name: 'Cloud Nursery',
      scene: 'balloon',
      mode: 'dark',
      c: { base: '#120f17', a: '#f2c9cf', b: '#c9d9f2', accent: '#fff0f2', text: '#fff0f4' },
    },
    typography: { display: 'classic', body: 'sans' },
    monogram: 'N',
    heroKicker: 'She’s here',
    heroTitle: 'Welcome, Little Nova',
    heroSubtitle: 'Born 03 · 03 · 2026 · 3:14 AM',
    hero: {
      overline: 'Born 03.03.2026 · 3:14 AM',
      headline: 'Welcome, Little Nova',
      subline: 'One watermelon, and already the boss of the house',
    },
    welcome: {
      heading: 'An introduction, from her very tired parents',
      message: [
        'On the third of March, at three-fourteen in the morning, the smallest person in the family checked in. She weighed exactly one watermelon and has since taken over the house.',
        'This little page is her first announcement — a soft hello to everyone who already loves her.',
      ],
      signoff: 'Sleep-deprived but smitten, Mum & Dad',
    },
    venue: 'Home Sweet Home',
    venueDetail: 'Bengaluru',
    countdownInDays: 30,
    guests: 0,
    story: [
      'Nova means new. That was the whole naming debate — she arrived and the name simply announced itself.',
      'Her first week has been a blur of midnight feeds, three older cousins, and a grandmother who calls her by five different names.',
      'Leave her a message in the nursery book. She can’t read yet, but her parents will read them all to her, one day.',
    ],
    gallery: [
      { label: 'The Arrival', scene: 'balloon', caption: 'Tiny fingers, enormous yawns.' },
      { label: 'The Nursery', scene: 'bokeh', caption: 'A room that has waited nine months.' },
      { label: 'The First Week', scene: 'stars', caption: 'Milestones in double digits.' },
      { label: 'The Family', scene: 'leaves', caption: 'Everyone already in love.' },
    ],
    schedule: [
      { time: 'Now', title: 'The Announcement', note: 'Spread the word gently' },
      { time: 'This Month', title: 'Visits Welcome', note: 'Call ahead — she naps famously' },
      { time: 'Soon', title: 'The Naming Day', note: 'A small ceremony, details to follow' },
    ],
    track: 'Lullaby No. 3 — Celeste',
    mood: 'soft, dreamy, brand-new',
    rsvp: {
      confirmBy: 'Just a hello — no RSVP',
      email: 'hello.nova@family.in',
      phone: '+91 99010 48009',
      prompt: 'Write to Nova',
      note: 'No formality here — leave a message in her nursery book instead.',
    },
    contact: {
      email: 'hello.nova@family.in',
      phone: '+91 99010 48009',
      whatsapp: '+91 99010 48009',
      note: 'For visits, the naming-day details, or gifted copies of Goodnight Moon.',
    },
    specialFeatures: [
      { icon: 'book', title: 'Nursery Book', note: 'A guestbook she’ll read when she can read.' },
      { icon: 'camera', title: 'Milestone Wall', note: 'Every first, photographed and pinned.' },
      { icon: 'heart', title: 'The Name', note: 'Why Nova — the story, in one card.' },
    ],
    family: [
      { name: 'Aarav & Kavya', relation: 'Mum & Dad', note: 'The sleep-deprived, endlessly smitten humans behind this website.' },
      { name: 'Dadi', relation: 'Great-grandmother', note: 'She calls Nova by five names. All of them loving.' },
      { name: 'Rishi', relation: 'Uncle', note: 'The photographer — every milestone is his doing.' },
    ],
  
    dateDisplay: 'Born 3 Mar 2026',
    timeDisplay: '3:14 AM',
    highlights: ['Digital nursery book', 'Milestone photo wall', 'The naming ceremony'],},
  {
    id: 'mehra-family-reunion',
    name: 'The Mehras — Family Reunion',
    category: 'Baby & Family',
    style: 'Warm Heritage',
    tagline: 'Four generations under one roof, one website, and one enormous thali.',
    description:
      'Every few years the Mehra family gathers from four continents. This website is the campfire — the schedule, the archive of old photos, and the recipe book everyone argues about.',
    theme: {
      name: 'Old Home',
      scene: 'leaves',
      mode: 'dark',
      c: { base: '#120f0a', a: '#c9b07a', b: '#a98f6a', accent: '#efe0c2', text: '#f4ecda' },
    },
    typography: { display: 'classic', body: 'serif' },
    monogram: 'M',
    heroKicker: 'All are invited',
    heroTitle: 'The Mehras Reunite',
    heroSubtitle: '12 · 12 · 2026 — The Family Farm, Punjab',
    hero: {
      overline: 'The 11th family reunion',
      headline: 'The Mehras Reunite',
      subline: 'Four generations · Three continents · One thali',
    },
    welcome: {
      heading: 'The farm is calling',
      message: [
        'Since 1971, every five years, the Mehra family finds its way home to the farm. This December is the eleventh time, and the youngest generation has built the website.',
        'Bring a story, an old photograph and an appetite. The thali will do the rest.',
      ],
      signoff: 'All the Mehras, everywhere',
    },
    venue: 'The Family Farm',
    venueDetail: 'Near Ludhiana, Punjab',
    countdownInDays: 210,
    guests: 260,
    story: [
      'The family farm has hosted a reunion every five years since 1971. The farmhouse walls are covered in the signatures of everyone who has ever visited.',
      'This year, the younger generation built the website — with a digital guest book to match the one on the walls.',
      'Four generations. Three continents. One very large thali.',
    ],
    gallery: [
      { label: 'The Farmhouse', scene: 'leaves', caption: 'Same walls, more signatures.' },
      { label: '1971', scene: 'sunset', caption: 'The first reunion photograph.' },
      { label: 'The Thali', scene: 'floral', caption: 'The menu nobody agrees on.' },
      { label: 'The Field', scene: 'skyline', caption: 'Where the grandchildren run now.' },
    ],
    schedule: [
      { time: 'Dec 10', title: 'Arrivals', note: 'The airport runs on Mehra time' },
      { time: 'Dec 12', title: 'The Big Day', note: 'Games, thali, and the photo wall' },
      { time: 'Dec 13', title: 'Memory Walk', note: 'The village and the old school' },
      { time: 'Dec 14', title: 'Goodbyes', note: 'Until the next five years' },
    ],
    track: 'Family Recipe — The Farm Band',
    mood: 'belonging, loud, generational',
    rsvp: {
      confirmBy: 'Please confirm by Sunday, 15 November 2026',
      email: 'reunion@mehrafamily.in',
      phone: '+91 99200 49010',
      prompt: 'Will you come home?',
      note: 'Tell us how many from your branch — and your thali preference.',
    },
    contact: {
      email: 'reunion@mehrafamily.in',
      phone: '+91 99200 49010',
      whatsapp: '+91 99200 49010',
      note: 'The reunion committee — three cousins and a very loud aunt — answers all queries.',
    },
    specialFeatures: [
      { icon: 'camera', title: 'The Photo Wall', note: 'Add a new picture to the 1971 wall.' },
      { icon: 'book', title: 'Recipe Book', note: 'The thali recipes, with the family arguments included.' },
      { icon: 'map', title: 'Family Tree', note: 'Four generations, mapped and current.' },
    ],
  
    dateDisplay: '12 Dec 2026',
    timeDisplay: 'All day',
    highlights: ['Four generations gathering', 'Recipe book arguments', 'The enormous family thali'],},
  {
    id: 'vertex-summit-2026',
    name: 'Vertex Annual Summit',
    category: 'Corporate',
    style: 'Sleek Corporate',
    tagline: 'A three-day industry summit with keynotes, tracks and a rooftop after-dark.',
    description:
      'Vertex brings together a thousand builders to plot the next decade of their industry. The event site handles schedules, networking and the inevitable after-party — all in one clean, fast experience.',
    theme: {
      name: 'Glass & Graphite',
      scene: 'skyline',
      mode: 'dark',
      c: { base: '#0a0d12', a: '#7fa8d9', b: '#5f7fa0', accent: '#dfeaf5', text: '#e9f1fa' },
    },
    typography: { display: 'modern', body: 'sans' },
    monogram: 'V·26',
    heroKicker: 'The industry event of the year',
    heroTitle: 'Vertex Summit 2026',
    heroSubtitle: '14 – 16 · 08 · 2026 · Jio World, Mumbai',
    hero: {
      overline: '14 – 16 AUGUST 2026 · MUMBAI',
      headline: 'VERTEX SUMMIT 2026',
      subline: 'Three days. One hundred sessions. The decade ahead.',
    },
    welcome: {
      heading: 'Welcome, builders',
      message: [
        'Vertex is three days built for the people building the next decade of our industry — forty speakers, a hundred sessions, and the rooftop night that became legend.',
        'Use this site as your compass: build your day, catch the talks, find your people, and don’t miss the after-dark.',
      ],
      signoff: 'The Vertex Team',
    },
    venue: 'Jio World Convention Centre',
    venueDetail: 'BKC, Mumbai',
    countdownInDays: 102,
    guests: 1200,
    story: [
      'Three days, forty speakers, one hundred sessions and a city that never quite sleeps.',
      'The site is built for speed — real-time schedule, speaker notes, networking cards and a rooftop night that has become the summit’s true tradition.',
      'Whether you join in person or stream from the other side of the world, everything lives here.',
    ],
    gallery: [
      { label: 'The Keynote Hall', scene: 'skyline', caption: 'A thousand seats facing the future.' },
      { label: 'The Tracks', scene: 'bokeh', caption: 'Breakouts across three floors.' },
      { label: 'The Expo', scene: 'citynight', caption: 'Where the products come alive.' },
      { label: 'The Rooftop', scene: 'stars', caption: 'The summit, after dark.' },
    ],
    schedule: [
      { time: 'Day 1', title: 'Opening Keynote', note: '10:00 AM — the agenda for the decade' },
      { time: 'Day 2', title: 'Deep-Dive Tracks', note: '12 tracks, pick your path' },
      { time: 'Day 3', title: 'Demo Stage & Wrap', note: 'Showcase, then the summit notes' },
      { time: 'Night 3', title: 'The Rooftop', note: 'Networking, neon, and noise' },
    ],
    track: 'Build — Vertex House Band',
    mood: 'ambitious, sharp, forward',
    rsvp: {
      confirmBy: 'Registration closes Friday, 7 August 2026',
      email: 'tickets@vertexsummit.io',
      phone: '+91 99310 50011',
      prompt: 'Register for the summit',
      note: 'All badges are digital — the QR arrives with your confirmation.',
    },
    contact: {
      email: 'team@vertexsummit.io',
      phone: '+91 99310 50011',
      whatsapp: '+91 99310 50011',
      note: 'Press passes, speaker queries and lost badges — the desk is live.',
    },
    specialFeatures: [
      { icon: 'star', title: 'Build Your Day', note: 'A personal schedule planner across all 100 sessions.' },
      { icon: 'wifi', title: 'Networking Cards', note: 'Digital cards to trade, saved automatically.' },
      { icon: 'ticket', title: 'Digital Badge', note: 'One QR for entry, tracks and the rooftop.' },
    ],
  
    dateDisplay: '14-16 Aug 2026',
    timeDisplay: '10:00 AM onwards',
    highlights: ['100+ sessions across 3 days', 'Networking card exchange', 'Rooftop after-dark party'],},
  {
    id: 'nova-launch-night',
    name: 'Nova Launch Night',
    category: 'Corporate',
    style: 'High-Tech Glow',
    tagline: 'A product launch that turned a warehouse into a constellation.',
    description:
      'Nova’s launch wasn’t a keynote — it was an experience. Lasers, live demos, an immersive reveal, and a website that built the hype and handled all 800 RSVPs.',
    theme: {
      name: 'Constellation',
      scene: 'citynight',
      mode: 'dark',
      c: { base: '#070810', a: '#8b7fe8', b: '#4cc2d9', accent: '#e3e0ff', text: '#ece9ff' },
    },
    typography: { display: 'modern', body: 'sans' },
    monogram: '▲',
    heroKicker: 'The product reveal',
    heroTitle: 'Nova Launch Night',
    heroSubtitle: '20 · 09 · 2026 · The Foundry, Bengaluru',
    hero: {
      overline: '20.09.2026 · THE FOUNDRY, BENGALURU',
      headline: 'NOVA LAUNCH NIGHT',
      subline: 'One warehouse. Four zones. A constellation of 800.',
    },
    welcome: {
      heading: 'You are the constellation',
      message: [
        'Two years of prototypes, compressed into one hundred and twenty minutes on a warehouse floor. You’re the reason the lights came on.',
        'Walk the four zones — the constellation, the demo hall, the reveal dome, and the after-glow bar. Your badge tracks your journey; your name is already up in lights.',
      ],
      signoff: 'The Nova Team',
    },
    venue: 'The Foundry',
    venueDetail: 'Whitefield, Bengaluru',
    countdownInDays: 113,
    guests: 800,
    story: [
      'Two years of prototypes collapsed into one hundred and twenty minutes on a warehouse floor.',
      'Guests moved through four zones — the constellation walk, the live demo hall, the reveal dome, and the after-glow bar.',
      'This site is the whole journey, from the countdown to the last after-movie frame.',
    ],
    gallery: [
      { label: 'The Constellation', scene: 'citynight', caption: 'Eight hundred names in light.' },
      { label: 'The Reveal', scene: 'aurora', caption: 'The dome, one second before.' },
      { label: 'The Demos', scene: 'bokeh', caption: 'Products that spoke for themselves.' },
      { label: 'After Glow', scene: 'fireworks', caption: 'The bar stayed open late.' },
    ],
    schedule: [
      { time: '7:00 PM', title: 'Doors & Constellation', note: 'Walk the light, find your name' },
      { time: '8:30 PM', title: 'The Reveal', note: 'The dome goes dark' },
      { time: '9:15 PM', title: 'Live Demos', note: 'Three stages, three zones' },
      { time: '10:30 PM', title: 'After Glow', note: 'The launch becomes a party' },
    ],
    track: 'Ignition — Synth District',
    mood: 'futuristic, bold, electric',
    rsvp: {
      confirmBy: 'RSVP closes Monday, 14 September 2026',
      email: 'rsvp@nova.launch',
      phone: '+91 99420 51012',
      prompt: 'Secure your constellation badge',
      note: 'Badges are limited to 800 — the light show is built around your names.',
    },
    contact: {
      email: 'press@nova.launch',
      phone: '+91 99420 51012',
      whatsapp: '+91 99420 51012',
      note: 'For press, partnerships or lost badges — the night desk is live.',
    },
    specialFeatures: [
      { icon: 'ticket', title: 'Constellation Badge', note: 'Your name, projected into the light walk.' },
      { icon: 'video', title: 'The After-Movie', note: 'A recap film, premiered within 24 hours.' },
      { icon: 'sparkles', title: 'Zone Map', note: 'Live wait-times for each of the four zones.' },
    ],
  
    dateDisplay: '20 Sep 2026',
    timeDisplay: '7:00 PM onwards',
    highlights: ['Immersive laser reveal', 'Live demo stages', 'Constellation light walk'],},
  {
    id: 'freshers-soiree',
    name: 'Freshers’ Soirée',
    category: 'College',
    style: 'Playful Campus',
    tagline: 'The annual first-year bash — lights, new faces and a night nobody forgets.',
    description:
      'The freshers’ soirée is where university legends begin. This playful site carries the theme, the dress code, the line-up and a guest wall already buzzing with names.',
    theme: {
      name: 'Campus Neon',
      scene: 'stars',
      mode: 'dark',
      c: { base: '#0e0d17', a: '#e8a0c9', b: '#7fa8d9', accent: '#f4e6ff', text: '#f2ecfb' },
    },
    typography: { display: 'modern', body: 'sans' },
    monogram: 'FS·26',
    heroKicker: 'Class of 2026',
    heroTitle: 'Freshers’ Soirée',
    heroSubtitle: '25 · 08 · 2026 · The Quad, SXC',
    hero: {
      overline: 'THE CLASS OF 2026',
      headline: 'FRESHERS’ SOIRÉE',
      subline: '25.08.2026 · The Quad, SXC · Dress like a dream',
    },
    welcome: {
      heading: 'Your first legend starts here',
      message: [
        'Every senior remembers their soirée — who they danced with, who fell in the fountain, and which song closed the night. Now it’s your turn.',
        'This year’s theme is neon constellations. The dress code is whatever you’d wear to a dream. Bring your batch; leave your inhibitions with the coats.',
      ],
      signoff: 'The Student Council',
    },
    venue: 'The University Quad',
    venueDetail: 'St. Xavier’s, Bombay',
    countdownInDays: 100,
    guests: 600,
    story: [
      'Every first year remembers their soirée — who they danced with, who fell in the fountain, and which song closed the night.',
      'This year’s theme is "neon constellations" and the dress code is strictly what you’d wear to a dream.',
      'Bring your batch. Leave your inhibitions with the coats.',
    ],
    gallery: [
      { label: 'The Quad', scene: 'stars', caption: 'Under lights that reach the sky.' },
      { label: 'The Stage', scene: 'citynight', caption: 'The line-up, live.' },
      { label: 'The Fountain', scene: 'wave', caption: 'A tradition since 2004.' },
      { label: 'The Last Song', scene: 'confetti', caption: 'Always a slow one. Always.' },
    ],
    schedule: [
      { time: '6:00 PM', title: 'Gates Open', note: 'Varsity ID required' },
      { time: '7:00 PM', title: 'The Floor Warms', note: 'Campus DJs open the night' },
      { time: '9:30 PM', title: 'The Main Act', note: 'The night’s headliner' },
      { time: '11:45 PM', title: 'The Last Song', note: 'Bring your people close' },
    ],
    track: 'Constellations — Fresher Radio',
    mood: 'young, loud, unforgettable',
    rsvp: {
      confirmBy: 'Confirm by Sunday, 23 August 2026',
      email: 'soiree@studentcouncil.in',
      phone: '+91 99530 52013',
      prompt: 'Are you in?',
      note: 'Entry is free for freshers — the QR confirmation is your pass.',
    },
    contact: {
      email: 'soiree@studentcouncil.in',
      phone: '+91 99530 52013',
      whatsapp: '+91 99530 52013',
      note: 'Lost passes, ride shares and fountain-related questions — the desk is open.',
    },
    specialFeatures: [
      { icon: 'music', title: 'Set Requests', note: 'Vote for the night’s headliner songs.' },
      { icon: 'camera', title: 'Soirée Wall', note: 'Live polaroids from the booth, all night.' },
      { icon: 'star', title: 'Dress Code', note: 'Neon constellations — check the lookbook.' },
    ],
  
    dateDisplay: '25 Aug 2026',
    timeDisplay: '6:00 PM onwards',
    highlights: ['Neon constellation theme', 'Live photo booth', 'Campus DJ sets'],},
  {
    id: 'techfest-2026',
    name: 'TechFest 2026',
    category: 'College',
    style: 'Youthful Bold',
    tagline: 'A three-day campus festival of robots, hacks and all-night laser tag.',
    description:
      'TechFest is the college festival that grew up. Three days of competitions, concerts and chaos — this site keeps 2,000 students coordinated, hyped and informed.',
    theme: {
      name: 'Arcade Bloom',
      scene: 'ticket',
      mode: 'dark',
      c: { base: '#0d0f0a', a: '#b3e07a', b: '#7ad9c2', accent: '#f2ffe0', text: '#f0f7e6' },
    },
    typography: { display: 'modern', body: 'sans' },
    monogram: 'TF',
    heroKicker: 'Campus, amplified',
    heroTitle: 'TechFest 2026',
    heroSubtitle: '09 – 11 · 10 · 2026 · Main Campus, Delhi',
    hero: {
      overline: '09 – 11 OCT 2026 · MAIN CAMPUS',
      headline: 'TECHFEST 2026',
      subline: 'Robots. Code. Debate. Art. Laser tag at midnight.',
    },
    welcome: {
      heading: 'The fest that grew up',
      message: [
        'What began in one classroom in 1998 now takes over the whole campus for three days every autumn. This year, we’re going louder.',
        'Your ticket page lives here — every event, every venue, every 3am revision of the plan. Bookmark it.',
      ],
      signoff: 'The TechFest Committee',
    },
    venue: 'Main Campus Grounds',
    venueDetail: 'DU North Campus, Delhi',
    countdownInDays: 128,
    guests: 2000,
    story: [
      'Started in a single classroom in 1998, TechFest now takes over the entire campus for three days every autumn.',
      'Robots, code, debate, art, food trucks and a midnight laser-tag league that has its own folklore.',
      'Your ticket page lives here — every event, every venue, every 3am revision of the plan.',
    ],
    gallery: [
      { label: 'The Main Stage', scene: 'ticket', caption: 'The ticket that opens everything.' },
      { label: 'The Arena', scene: 'fireworks', caption: 'Where the robots fight.' },
      { label: 'The Hackzone', scene: 'citynight', caption: 'Sixty hours, no sleep.' },
      { label: 'The Food Lane', scene: 'confetti', caption: 'The real competition.' },
    ],
    schedule: [
      { time: 'Day 1', title: 'Open Mic & Fest Launch', note: 'The flag goes up' },
      { time: 'Day 2', title: 'Robo-Wars & Finals', note: 'The arena takes centre stage' },
      { time: 'Day 3', title: 'The Concert', note: 'Headliners close the fest' },
      { time: 'All Nights', title: 'Laser Tag League', note: 'Midnight bracket, campus legend' },
    ],
    track: 'Voltage — Fest DJs',
    mood: 'high-voltage, scrappy, legendary',
    rsvp: {
      confirmBy: 'Early-bird passes end Sunday, 4 October 2026',
      email: 'passes@techfest.in',
      phone: '+91 99640 53014',
      prompt: 'Get your fest pass',
      note: 'Passes cover all three days and the midnight bracket. Bring your own controllers.',
    },
    contact: {
      email: 'fest@techfest.in',
      phone: '+91 99640 53014',
      whatsapp: '+91 99640 53014',
      note: 'Sponsors, venues and the lost-and-found of three thousand phone chargers.',
    },
    specialFeatures: [
      { icon: 'ticket', title: 'Fest Pass', note: 'One pass, three days, the midnight bracket.' },
      { icon: 'map', title: 'Campus Map', note: 'Every venue, food lane and water refill point.' },
      { icon: 'wifi', title: 'Live Scores', note: 'Robo-wars and hack results, updated live.' },
    ],
  
    dateDisplay: '9-11 Oct 2026',
    timeDisplay: 'All three days',
    highlights: ['Robo-wars arena', '60-hour hackathon', 'Midnight laser tag league'],},
  {
    id: 'gala-for-good',
    name: 'Gala for Good',
    category: 'Special Events',
    style: 'Luxe Philanthropy',
    tagline: 'A black-tie gala where every ticket plants a hundred trees.',
    description:
      'An elegant evening of auctions, orchestra and generosity. Every element of the gala’s website — from the gold foil to the impact counter — exists to turn beauty into good.',
    theme: {
      name: 'Gold Leaf',
      scene: 'sparkle',
      mode: 'dark',
      c: { base: '#0c0a12', a: '#e8c9a0', b: '#ab8ec0', accent: '#f7ecd8', text: '#f8f2e6' },
    },
    typography: { display: 'luxe', body: 'sans' },
    monogram: 'G·26',
    heroKicker: 'An evening that gives back',
    heroTitle: 'Gala for Good',
    heroSubtitle: '07 · 11 · 2026 · The Grand Ballroom, Delhi',
    hero: {
      overline: 'An evening that gives back',
      headline: 'Gala for Good',
      subline: 'Saturday, the seventh of November 2026',
    },
    welcome: {
      heading: 'Beauty with a purpose',
      message: [
        'Eleven schools, a hundred thousand trees, and one dinner table that started it all. The Gala is where generosity puts on its best evening wear.',
        'Every ticket plants a hundred trees. Every paddle builds a classroom. We’re honoured to have you at the table.',
      ],
      signoff: 'The Gala Committee',
    },
    venue: 'The Grand Ballroom',
    venueDetail: 'The Imperial, New Delhi',
    countdownInDays: 141,
    guests: 300,
    story: [
      'Started by three friends with one dinner table, the Gala has since funded eleven schools and a hundred thousand trees.',
      'This year’s auction includes once-in-a-lifetime lots — dinner with a chef in the Himalayas, a week on a Mediterranean sailboat.',
      'Every ticket plants a hundred trees. Every paddle builds a classroom.',
    ],
    gallery: [
      { label: 'The Ballroom', scene: 'sparkle', caption: 'Crystal, candlelight, and hope.' },
      { label: 'The Auction', scene: 'monogram', caption: 'Lots that change lives.' },
      { label: 'The Orchestra', scene: 'bokeh', caption: 'The score of the evening.' },
      { label: 'The Impact', scene: 'leaves', caption: 'A hundred thousand trees and counting.' },
    ],
    schedule: [
      { time: '7:00 PM', title: 'Champagne & Strings', note: 'The evening begins' },
      { time: '8:00 PM', title: 'Dinner & Keynote', note: 'The impact, in numbers' },
      { time: '9:15 PM', title: 'The Auction', note: 'Raise your paddle high' },
      { time: '10:30 PM', title: 'Dance for Good', note: 'The last notes of the night' },
    ],
    track: 'Valse Pour Tous — The Civic Orchestra',
    mood: 'generous, luminous, refined',
    rsvp: {
      confirmBy: 'Tables close Friday, 23 October 2026',
      email: 'rsvp@galaforgood.org',
      phone: '+91 99750 54015',
      prompt: 'Reserve your place at the table',
      note: 'Table of ten available. Proceeds fund the schools and the forests.',
    },
    contact: {
      email: 'hello@galaforgood.org',
      phone: '+91 99750 54015',
      whatsapp: '+91 99750 54015',
      note: 'For auction lots, table bookings or press — the committee is at your service.',
    },
    specialFeatures: [
      { icon: 'heart', title: 'The Impact Meter', note: 'A live counter of trees and classrooms funded.' },
      { icon: 'sparkles', title: 'The Lots', note: 'Preview every auction lot, with reserves.' },
      { icon: 'music', title: 'The Score', note: 'The evening’s programme, piece by piece.' },
    ],
  
    dateDisplay: '7 Nov 2026',
    timeDisplay: '7:00 PM onwards',
    highlights: ['Every ticket plants 100 trees', 'Auction for schools', 'Live orchestra performance'],},
  {
    id: 'new-years-constellation',
    name: 'New Year’s — Under a Constellation',
    category: 'Special Events',
    style: 'Glittering Celebration',
    tagline: 'An open-air NYE beneath fireworks, mirrored skies and a midnight toast.',
    description:
      'The city’s most sought-after New Year celebration, on a rooftop under a canopy of mirrors and stars. The site is pure anticipation — countdown, dress code, and the midnight moment.',
    theme: {
      name: 'Mirrored Sky',
      scene: 'fireworks',
      mode: 'dark',
      c: { base: '#0a0c14', a: '#d9a0c9', b: '#7fd4e8', accent: '#fff0fb', text: '#f2ecfa' },
    },
    typography: { display: 'luxe', body: 'sans' },
    monogram: '26',
    heroKicker: 'The year, celebrated',
    heroTitle: 'Under a Constellation',
    heroSubtitle: '31 · 12 · 2026 · The Sky Deck, Bombay',
    hero: {
      overline: '31 DEC 2026 · THE SKY DECK',
      headline: 'Under a Constellation',
      subline: 'Midnight above the bay, under a mirrored sky',
    },
    welcome: {
      heading: 'The last toast of the year',
      message: [
        'For one night each year, the Sky Deck turns its glass floor into a mirror of the sky. You are invited to stand at the edge of both.',
        'Twelve courses, one tradition — no phones between 11:58 and 12:02 — and the whole bay lighting up at midnight.',
      ],
      signoff: 'The Sky Deck Team',
    },
    venue: 'The Sky Deck',
    venueDetail: 'Worli Sea Face, Mumbai',
    countdownInDays: 190,
    guests: 500,
    story: [
      'Two floors above the bay, the Sky Deck turns its glass floor into a mirror of the sky for one night each year.',
      'The menu is twelve courses. The tradition is that nobody checks their phone between 11:58 and 12:02.',
      'Dress in silver or starlight. The rooftop will do the rest.',
    ],
    gallery: [
      { label: 'The Deck', scene: 'citynight', caption: 'Glass floor, mirrored sky.' },
      { label: 'The Fireworks', scene: 'fireworks', caption: 'The whole bay, lit.' },
      { label: 'The Toast', scene: 'bokeh', caption: 'Midnight, in one glass.' },
      { label: 'The Afterglow', scene: 'stars', caption: 'The city sleeps, slowly.' },
    ],
    schedule: [
      { time: '9:00 PM', title: 'Deck Opens', note: 'Twelve courses begin' },
      { time: '11:30 PM', title: 'The Countdown', note: 'Sky deck fills the edge' },
      { time: '12:00 AM', title: 'Fireworks & Toast', note: 'No phones, promise' },
      { time: '12:30 AM', title: 'Into the New Year', note: 'Dancing until sunrise' },
    ],
    track: 'First Light — The Rooftop Orchestra',
    mood: 'starry, celebratory, electric',
    rsvp: {
      confirmBy: 'Reservations close Tuesday, 29 December 2026',
      email: 'nye@skydeck.in',
      phone: '+91 99860 55016',
      prompt: 'Reserve your midnight',
      note: 'The twelve-course menu is fixed; the dress code is silver or starlight.',
    },
    contact: {
      email: 'nye@skydeck.in',
      phone: '+91 99860 55016',
      whatsapp: '+91 99860 55016',
      note: 'Tables, dietary menus, and valet — the deck desk answers all.',
    },
    specialFeatures: [
      { icon: 'star', title: 'Midnight Countdown', note: 'A private clock, synced to the fireworks.' },
      { icon: 'music', title: 'The Setlist', note: 'The twelve-course soundtrack, revealed early.' },
      { icon: 'camera', title: 'The Mirror Wall', note: 'Your night, projected back at you.' },
    ],
  
    dateDisplay: '31 Dec 2026',
    timeDisplay: '9:00 PM onwards',
    highlights: ['Mirrored sky deck', 'Twelve-course dinner', 'No phones at midnight'],},
  {
    id: 'art-of-you-exhibition',
    name: 'The Art of You — Exhibition',
    category: 'Special Events',
    style: 'Gallery Minimal',
    tagline: 'A one-night exhibition where the guests become the gallery.',
    description:
      'Forty artists, one night, and every attendee immortalised in a live portrait session. The exhibition site is a digital white cube — quiet, precise, beautiful.',
    theme: {
      name: 'White Cube',
      scene: 'monogram',
      mode: 'light',
      c: { base: '#f5f1e8', a: '#1f1b15', b: '#c9a968', accent: '#8a6d45', text: '#16130e' },
    },
    typography: { display: 'editorial', body: 'serif' },
    monogram: 'A·U',
    heroKicker: 'One night only',
    heroTitle: 'The Art of You',
    heroSubtitle: '18 · 06 · 2026 · The White Warehouse, Goa',
    hero: {
      overline: 'One night only · 18.06.2026',
      headline: 'The Art of You',
      subline: 'Forty artists. One hundred and twenty guests. You, on the wall.',
    },
    welcome: {
      heading: 'Welcome to the white cube',
      message: [
        'Forty artists will work across an empty warehouse, painting, sketching and sculpting the guests in front of them. At midnight, the warehouse reopens as an exhibition — and you are the artwork.',
        'Only one hundred and twenty of you will be here. Every guest leaves with their own portrait, framed.',
      ],
      signoff: 'The Curators',
    },
    venue: 'The White Warehouse',
    venueDetail: 'Assagao, Goa',
    countdownInDays: 88,
    guests: 120,
    story: [
      'Forty artists set up across an empty warehouse and work live — painting, sketching, sculpting the guests in front of them.',
      'At midnight, the gallery reopens as the exhibition: you are the artwork.',
      'Tickets are limited to one hundred and twenty. Each guest leaves with their own portrait.',
    ],
    gallery: [
      { label: 'The Wall', scene: 'monogram', caption: 'Where the night begins.' },
      { label: 'The Artists', scene: 'bokeh', caption: 'Forty hands, one night.' },
      { label: 'The Room', scene: 'sparkle', caption: 'The warehouse becomes a gallery.' },
      { label: 'The Result', scene: 'sunset', caption: 'Every guest, immortalised.' },
    ],
    schedule: [
      { time: '6:00 PM', title: 'First Stroke', note: 'The artists begin' },
      { time: '8:00 PM', title: 'Wine & Wander', note: 'Walk the living gallery' },
      { time: '11:00 PM', title: 'Midnight Hang', note: 'The works go on the walls' },
      { time: '12:00 AM', title: 'The Opening', note: 'You are the exhibition' },
    ],
    track: 'Studio Silence — Chamber Works',
    mood: 'quiet, precise, unforgettable',
    rsvp: {
      confirmBy: 'Tickets sell out — reserve by 11 June 2026',
      email: 'tickets@artofyou.art',
      phone: '+91 99970 56017',
      prompt: 'Reserve your portrait',
      note: 'One hundred and twenty tickets, no more. Your portrait is included.',
    },
    contact: {
      email: 'curators@artofyou.art',
      phone: '+91 99970 56017',
      whatsapp: '+91 99970 56017',
      note: 'For artist press, framing or extra tickets — write to the curators.',
    },
    specialFeatures: [
      { icon: 'palette', title: 'The Artists', note: 'Meet all forty, with their mediums and signatures.' },
      { icon: 'ticket', title: 'The Invite', note: 'A collectible digital ticket, numbered to 120.' },
      { icon: 'camera', title: 'Midnight Hang', note: 'The moment the warehouse becomes a gallery.' },
    ],
  
    dateDisplay: '18 Jun 2026',
    timeDisplay: '6:00 PM onwards',
    highlights: ['40 live portrait artists', 'Guests become the gallery', 'Framed portrait to take home'],},
  {
    id: 'birthday',
    name: "Aarav's 1st Birthday Celebration",
    category: 'Birthdays',
    style: 'Playful Premium',
    tagline: 'One year. A million memories. — A premium first birthday celebration.',
    description:
      'A joyful, premium birthday experience for Aarav\'s first birthday. Playful animations, a story timeline, interactive cake moment, and everything a real event website needs.',
    theme: {
      name: 'Birthday Sunshine',
      scene: 'confetti',
      mode: 'light',
      c: { base: '#fdf8f0', a: '#e8735a', b: '#5ba4cf', accent: '#f5c842', text: '#1a2744' },
    },
    typography: { display: 'editorial', body: 'sans' },
    monogram: 'A·1',
    heroKicker: "It's a birthday celebration",
    heroTitle: 'Aarav Turns ONE',
    heroSubtitle: '18 · 10 · 2026 — Hyderabad',
    hero: {
      overline: '18 OCTOBER 2026 · HYDERABAD',
      headline: 'AARAV',
      subline: 'One year. A million memories.',
    },
    welcome: {
      heading: 'Welcome to the celebration',
      message: [
        "Our little prince Aarav is turning ONE, and we want you to be part of this magical milestone.",
        "It's been a year of firsts — first smile, first laugh, first step — and now, the biggest celebration yet.",
      ],
      signoff: 'With love, Ananya & Rahul',
    },
    venue: 'The Grand Celebration Hall',
    venueDetail: 'Jubilee Hills, Hyderabad',
    countdownInDays: 72,
    guests: 150,
    story: [
      'From his very first cry to his very first step, every moment with Aarav has been a gift.',
      "Here's to the year that changed everything — and the lifetime of adventures still to come.",
    ],
    gallery: [
      { label: 'The Arrival', scene: 'balloon', caption: 'The day Aarav arrived.' },
      { label: 'First Smile', scene: 'bokeh', caption: 'Those tiny fingers.' },
      { label: 'First Bath', scene: 'sparkle', caption: 'First bath, first splashes.' },
      { label: 'Nap Time', scene: 'floral', caption: 'Nap time with Ellie.' },
      { label: 'Golden Hour', scene: 'sunset', caption: 'Golden hour with mamma.' },
      { label: 'First Adventure', scene: 'leaves', caption: 'First park adventure.' },
      { label: 'Birthday Boy', scene: 'confetti', caption: 'The birthday boy!' },
      { label: 'Stargazing', scene: 'stars', caption: 'Stargazing with papa.' },
      { label: 'Family', scene: 'arch', caption: 'Family portrait day.' },
      { label: 'Monogram', scene: 'monogram', caption: "Aarav's monogram." },
      { label: 'Splashing', scene: 'wave', caption: 'Splashing in the tub.' },
      { label: 'Hyderabad', scene: 'citynight', caption: 'Hyderabad with Aarav.' },
    ],
    schedule: [
      { time: '5:00 PM', title: 'Welcome', note: 'Arrive and celebrate' },
      { time: '5:30 PM', title: 'Games & Fun', note: 'For kids and adults' },
      { time: '6:30 PM', title: 'Cake Cutting', note: 'The main event' },
      { time: '7:00 PM', title: 'Dinner', note: 'A feast for everyone' },
      { time: '8:00 PM', title: 'Goodbyes & Memories', note: 'Until next time' },
    ],
    track: 'Little Stars — Birthday Melody',
    mood: 'joyful, playful, warm',
    rsvp: {
      confirmBy: 'Please confirm by Sunday, 5 October 2026',
      email: 'aarav.birthday@family.in',
      phone: '+91 98765 54321',
      prompt: 'Will you join the party?',
      note: 'Let us know you are coming — the more, the merrier!',
    },
    contact: {
      email: 'aarav.birthday@family.in',
      phone: '+91 98765 54321',
      whatsapp: '+91 98765 54321',
      note: 'For directions, dietary needs, or gift ideas — reach out anytime.',
    },
    specialFeatures: [
      { icon: 'cake', title: 'Make a Wish', note: 'An interactive cake moment — blow out the candle with us.' },
      { icon: 'heart', title: 'Birthday Wishes', note: 'Leave Aarav a wish that he will treasure forever.' },
      { icon: 'camera', title: 'Photo Gallery', note: 'Fifty-two weeks of joy, captured in one place.' },
    ],
    family: [
      { name: 'Ananya', relation: 'Mom', note: 'The one who sings lullabies at 3am and still plans the perfect party.', scene: 'bokeh' },
      { name: 'Rahul', relation: 'Dad', note: 'The one who built the crib and still tears up at every milestone.', scene: 'sunset' },
      { name: 'Dadi', relation: 'Grandmother', note: 'The one whose recipes make every day feel like home.', scene: 'leaves' },
      { name: 'Nani', relation: 'Grandmother', note: 'The one who always has a story and a sweet ready.', scene: 'floral' },
    ],
  
    dateDisplay: '18 Oct 2026',
    timeDisplay: '5:00 PM onwards',
    highlights: ['Interactive cake moment', 'Guest birthday wishes', 'One year of memories'],},
  {
    id: 'wedding',
    name: 'Rahul & Priya — A Royal Celebration',
    category: 'Weddings',
    style: 'Timeless Luxury',
    tagline: 'A royal wedding invitation in ivory, burgundy and gold — 12 December 2026, Hyderabad.',
    description:
      'A cinematic invitation for Rahul & Priya — an opening monogram, our story, four days of celebration, a living gallery, and an RSVP that feels like a handwritten reply.',
    theme: {
      name: 'Royal Champagne',
      scene: 'arch',
      mode: 'light',
      c: { base: '#f7f1e7', a: '#b28a5a', b: '#6d2136', accent: '#c9a06b', text: '#2b2622' },
    },
    typography: { display: 'editorial', body: 'sans' },
    monogram: 'R & P',
    heroKicker: 'Together with their families',
    heroTitle: 'A Royal Celebration',
    heroSubtitle: '12 · 12 · 2026 — Taj Convention Hall, Hyderabad',
    hero: {
      overline: '12 · 12 · 2026 · HYDERABAD',
      headline: 'Rahul & Priya',
      subline: 'Two hearts. One beautiful beginning.',
    },
    welcome: {
      heading: 'Welcome to our wedding',
      message: [
        'After years of inside jokes, long drives through Hyderabad and one rooftop that started it all — we are getting married.',
        'This little corner of the internet holds everything you need: our story, the plan, the venue, and a place to tell us you are coming.',
      ],
      signoff: 'With love, Rahul & Priya',
    },
    venue: 'Taj Convention Hall',
    venueDetail: 'Financial District, Hyderabad',
    countdownInDays: 116,
    guests: 500,
    story: [
      'They met at a wedding in Chennai, where Rahul insisted Priya had stolen the last gulab jamun. She insists it was the best decision she ever made.',
      'Long drives, late-night chai, and a thousand shared playlists later, home stopped being a place — it became each other.',
      'On the twelfth of December, in the presence of their families, forever finally begins.',
    ],
    gallery: [
      { label: 'Golden Hour', scene: 'sunset', caption: 'Golden hour, golden us.' },
      { label: 'Candid', scene: 'bokeh', caption: 'Candid laughter, the good kind.' },
      { label: 'The Decor', scene: 'floral', caption: 'The decor that became a garden.' },
      { label: 'The Rings', scene: 'rings', caption: 'Two rings, one promise.' },
      { label: 'The Mandap', scene: 'arch', caption: 'Under the mandap, surrounded by love.' },
      { label: 'The Sangeet', scene: 'balloon', caption: 'Sangeet night, pure joy.' },
      { label: 'The Welcome', scene: 'sparkle', caption: 'The welcome night.' },
      { label: 'The Yes', scene: 'stars', caption: 'The night she said yes.' },
      { label: 'Hyderabad', scene: 'citynight', caption: 'Hyderabad at dusk.' },
      { label: 'The Monogram', scene: 'monogram', caption: 'Our monogram.' },
      { label: 'The Firsts', scene: 'mountain', caption: 'Our first adventure.' },
      { label: 'The Family', scene: 'leaves', caption: 'Everyone already in love.' },
    ],
    schedule: [
      { time: '5:00 PM', title: 'Mehendi', note: '10 Dec · The Garden Courtyard' },
      { time: '7:00 PM', title: 'Sangeet', note: '11 Dec · Grand Ballroom' },
      { time: '9:30 AM', title: 'Wedding', note: '12 Dec · Taj Convention Hall' },
      { time: '7:00 PM', title: 'Reception', note: '12 Dec · Taj Convention Hall' },
    ],
    track: 'Golden Hour — Studio Raga',
    mood: 'royal, warm, timeless',
    rsvp: {
      confirmBy: 'Please confirm by Sunday, 22 November 2026',
      email: 'rsvp@rahulpriya.wedding',
      phone: '+91 98765 43210',
      prompt: 'Will you celebrate with us?',
      note: 'Kindly confirm by the date above so our chefs can prepare for you.',
    },
    contact: {
      email: 'rsvp@rahulpriya.wedding',
      phone: '+91 98765 43210',
      whatsapp: '+91 98765 43210',
      note: 'For anything at all — directions, dietary needs, song requests — we are one message away.',
    },
    specialFeatures: [
      { icon: 'music', title: 'The Playlist', note: 'Golden Hour — an instrumental track that plays while you browse.' },
      { icon: 'ticket', title: 'QR Invite', note: 'Scan the code to save the invitation on your phone.' },
      { icon: 'heart', title: 'Blessing Wall', note: 'Leave a blessing — read aloud at the reception.' },
    ],
    family: [
      { name: 'Suresh & Lakshmi Rao', relation: 'Parents of the bride', note: 'Hosting the celebrations with all the warmth of their home in Hyderabad.', scene: 'bokeh' },
      { name: 'Venkatesh & Padma Sharma', relation: 'Parents of the groom', note: 'The family that taught Rahul how to make chai, laugh and stay late.', scene: 'leaves' },
      { name: 'Ananya', relation: 'Sister of the bride', note: 'Chief of ceremonies, keeper of the playlist.', scene: 'floral' },
      { name: 'Rohan', relation: 'Brother of the groom', note: 'Running the sangeet and the speech that will embarrass Rahul.', scene: 'sunset' },
    ],
  },
  {
    id: 'golden-anniversary',
    name: 'Thomas & Margaret — Golden Anniversary',
    category: 'Anniversary',
    style: 'Timeless Elegance',
    tagline: 'Celebrating fifty years of love, laughter and a lifetime of cherished memories.',
    description:
      'Thomas and Margaret\'s golden anniversary is a celebration of five decades of devotion — warm candlelight, handwritten letters and a story that proves love only deepens with time.',
    theme: {
      name: 'Golden Legacy',
      scene: 'sparkle',
      mode: 'dark',
      c: { base: '#2C1810', a: '#FFD700', b: '#B8860B', accent: '#FFF8DC', text: '#FFF5EE' },
    },
    typography: { display: 'classic', body: 'serif' },
    monogram: 'T & M',
    heroKicker: 'Celebrating fifty years',
    heroTitle: 'Golden Anniversary',
    heroSubtitle: '15 · 11 · 2026 · The Grand Ballroom, London',
    hero: {
      overline: 'Together with their family',
      headline: 'Fifty Golden Years',
      subline: 'Saturday, the fifteenth of November 2026',
    },
    welcome: {
      heading: 'Fifty years and still dancing',
      message: [
        'Half a century ago, Thomas and Margaret promised each other forever — and they have kept that promise with grace, humour and more than a few dance floors.',
        'Join us for an evening of candlelight, stories and the kind of celebration only fifty years of love can inspire.',
      ],
      signoff: 'With love, the Thomas & Margaret family',
    },
    venue: 'The Grand Ballroom',
    venueDetail: 'Kensington, London',
    countdownInDays: 115,
    guests: 120,
    story: [
      'They met at a village dance in 1976 — she wore blue, he wore a borrowed suit. He claims it was love at first sight; she says it took at least three dances.',
      'Their first home was a two-room flat above a chemist shop, with a window that looked out onto the town square. Margaret hung curtains on a Tuesday; Thomas built a bookshelf on a Saturday — and somehow, piece by piece, they built a life.',
      'Fifty years, four children and twelve grandchildren later, their love story is the bedrock of our family. Every Christmas, every birthday, every quiet Sunday lunch — it all traces back to that first dance.',
      'Through triumphs and heartaches, relocations and retirements, they held each other\'s hands with the kind of steadiness that only comes from truly knowing another person.',
      'Now, surrounded by candlelight and everyone they hold dear, we celebrate the promise that started it all — and the lifetime of promises that followed.',
    ],
    gallery: [
      { label: 'The Beginning', scene: 'sunset', caption: 'The dance where it all started.' },
      { label: 'The Rings', scene: 'rings', caption: 'Two rings, five decades.' },
      { label: 'The Family', scene: 'leaves', caption: 'Four generations under one roof.' },
      { label: 'The Dance', scene: 'bokeh', caption: 'Still dancing after all these years.' },
      { label: 'The Arch', scene: 'arch', caption: 'The entrance draped in gold for the evening.' },
      { label: 'The Celebration', scene: 'fireworks', caption: 'Fifty years — and the sky lights up.' },
    ],
    schedule: [
      { time: '3:00 PM', title: 'Afternoon Tea', note: 'Scones,Victoria sponge and decades of family stories shared over fine china — the perfect warm-up for the evening ahead.' },
      { time: '5:00 PM', title: 'Renewal of Vows', note: 'A brief, beautiful ceremony in the candlelit alcove — the same words they spoke in 1976, renewed with half a century of meaning.' },
      { time: '7:00 PM', title: 'Golden Dinner', note: 'A five-course celebration featuring Thomas\'s favourite roast and Margaret\'s legendary sticky toffee pudding — accompanied by heartfelt toasts from the children.' },
      { time: '9:00 PM', title: 'First Dance — Again', note: 'The song they danced to in 1976 fills the ballroom once more — and fifty years melt away in a single waltz.' },
    ],
    track: 'Golden Years — The King\'s Singers',
    mood: 'warm, nostalgic, joyful',
    rsvp: {
      confirmBy: 'Please confirm by Saturday, 1 November 2026',
      email: 'golden.anniversary@family.in',
      phone: '+44 7700 900123',
      prompt: 'Will you celebrate with us?',
      note: 'Kindly RSVP before the date above so we can arrange seating.',
    },
    contact: {
      email: 'golden.anniversary@family.in',
      phone: '+44 7700 900123',
      whatsapp: '+44 7700 900123',
      note: 'For directions, dietary needs or anything at all — reach out anytime.',
    },
    specialFeatures: [
      { icon: 'heart', title: 'Guest Book', note: 'Leave a message Thomas and Margaret will read on their anniversary morning — a keepsake they will treasure for the next fifty years.' },
      { icon: 'camera', title: 'Memory Wall', note: 'Fifty years of photos — add yours to the collection and watch their story unfold on the projection wall.' },
      { icon: 'music', title: 'Dedicate a Song', note: 'Request the song that reminds you of love — it might just be played during the golden waltz.' },
      { icon: 'gift', title: 'Time Capsule', note: 'Write a letter to Thomas and Margaret to be opened on their sixtieth anniversary — sealed with love tonight.' },
    ],
    family: [
      { name: 'James & Sarah', relation: 'Son & Daughter-in-law', note: 'Hosting the celebrations with all the love they know — the ones who secretly coordinated every detail.', scene: 'bokeh' },
      { name: 'Emily & David', relation: 'Daughter & Son-in-law', note: 'The ones who flew in from Sydney with a scrapbook of fifty years of family holidays.', scene: 'floral' },
      { name: 'Oliver', relation: 'Grandson', note: 'The eldest grandchild, giving the anniversary toast — the one who inherited Grandad\'s gift for storytelling.', scene: 'sunset' },
      { name: 'Charlotte', relation: 'Granddaughter', note: 'Singing the song Grandma always hums in the kitchen — the one that makes everyone stop and listen.', scene: 'leaves' },
    ],
    dateDisplay: '15 Nov 2026',
    timeDisplay: '3:00 PM onwards',
    highlights: ['Renewal of vows ceremony', 'Fifty-year memory wall', 'Golden dinner for 120'],
  },

  {
    id: 'griha-pravesh',
    name: 'Kapoor Family — Griha Pravesh',
    category: 'Housewarming',
    style: 'Traditional Warmth',
    tagline: 'A new home filled with blessings, laughter and the sweet scent of tradition.',
    description:
      'The Kapoor family invites you to celebrate their new beginning — a home blessed by tradition, warmed by family and ready to welcome a lifetime of memories.',
    theme: {
      name: 'Sacred Threshold',
      scene: 'monogram',
      mode: 'dark',
      c: { base: '#5C1A1A', a: '#E8A87C', b: '#C4754B', accent: '#FFE4CC', text: '#FFF5EE' },
    },
    typography: { display: 'classic', body: 'serif' },
    monogram: 'K',
    heroKicker: 'A new beginning',
    heroTitle: 'Griha Pravesh',
    heroSubtitle: '22 · 10 · 2026 · 14 Green Avenue, New Delhi',
    hero: {
      overline: 'With blessings from the divine',
      headline: 'Welcome Home',
      subline: 'Wednesday, the twenty-second of October 2026',
    },
    welcome: {
      heading: 'Come bless our new home',
      message: [
        'After months of planning, painting and one very patient contractor, the Kapoor family is finally home — and the house is not complete without you.',
        'Join us for the griha pravesh puja, a meal made from Maa\'s recipes, and the first of many evenings in our new living room.',
      ],
      signoff: 'With warmth, the Kapoor family',
    },
    venue: '14 Green Avenue',
    venueDetail: 'Vasant Kunj, New Delhi',
    countdownInDays: 92,
    guests: 80,
    story: [
      'The Kapoors spent two years searching for the perfect home — and found it on a quiet street with a banyan tree at the corner and a garden that caught the morning sun just right.',
      'Rajesh sketched the floor plan on the back of a napkin during a Sunday brunch; Sunita chose every tile, every curtain, every light fixture with the kind of care only a home deserves.',
      'Every brick was chosen with care, every room designed for the laughter that will fill it — from the open kitchen where Maa will roll rotis to the terrace where Dadaji will read his morning paper.',
      'There were days of dust, delay and one very stubborn contractor, but the Kapoors never wavered — because a home is not built in a day; it is built with patience.',
      'This griha pravesh is not just a housewarming — it is the beginning of a thousand family dinners, a hundred festival mornings and the first of many evenings under their own roof.',
    ],
    gallery: [
      { label: 'The Blueprint', scene: 'monogram', caption: 'Where it all began — on paper.' },
      { label: 'The Puja', scene: 'sparkle', caption: 'Blessings for the threshold.' },
      { label: 'The Kitchen', scene: 'bokeh', caption: 'Where Maa\'s recipes will live.' },
      { label: 'The Garden', scene: 'leaves', caption: 'Room to grow, room to breathe.' },
      { label: 'The Mandap', scene: 'mandap', caption: 'The sacred space where the puja unfolds.' },
      { label: 'The Entrance', scene: 'arch', caption: 'Flowers and rangoli welcoming every guest.' },
    ],
    schedule: [
      { time: '9:00 AM', title: 'Griha Pravesh Puja', note: 'The priest arrives at 8:30 — please be seated by 9 for the sacred invocation that blesses every room and threshold of the new home.' },
      { time: '11:00 AM', title: 'Kalash Sthapana', note: 'The sacred water ceremony — the symbolic heart of the griha pravesh, where prosperity and peace are invoked for the family.' },
      { time: '1:00 PM', title: 'Family Lunch', note: 'Maa\'s full thali — no shortcuts — featuring recipes passed down through three generations, served on brass plates with love.' },
      { time: '4:00 PM', title: 'Open House', note: 'Tour the home at your own pace, share a mithai and add your blessings to the wall — every corner has a story waiting to be told.' },
    ],
    track: 'Ganesh Vandana — Anuradha Paudwal',
    mood: 'devotional, joyful, communal',
    rsvp: {
      confirmBy: 'Please confirm by Friday, 9 October 2026',
      email: 'kapoor.grihapravesh@family.in',
      phone: '+91 98100 55678',
      prompt: 'Will you bless our new home?',
      note: 'The puja area is indoors — comfortable seating is arranged for all.',
    },
    contact: {
      email: 'kapoor.grihapravesh@family.in',
      phone: '+91 98100 55678',
      whatsapp: '+91 98100 55678',
      note: 'For directions, parking or anything at all — the Kapoors are one message away.',
    },
    specialFeatures: [
      { icon: 'home', title: 'Home Blessing', note: 'Add your blessing to our threshold wall — a mosaic of good wishes that will greet the Kapoors every morning.' },
      { icon: 'book', title: 'Recipe Collection', note: 'Maa\'s favourite recipes — shared with love. Take one home and keep the tradition alive in your own kitchen.' },
      { icon: 'music', title: 'Prasad Playlist', note: 'Devotional songs curated for the morning puja — let the sacred melodies set the tone for the day.' },
      { icon: 'gift', title: 'Griha Pravesh Kit', note: 'A curated kit with rice, coins, incense and a handwritten blessing card — for guests who wish to perform their own small ritual at home.' },
    ],
    family: [
      { name: 'Rajesh & Sunita Kapoor', relation: 'Hosts', note: 'The couple who built this home with love, patience and a thousand cups of chai during construction.', scene: 'bokeh' },
      { name: 'Arjun Kapoor', relation: 'Son', note: 'The architect of the extension Maa always wanted — the one who turned napkin sketches into blueprints.', scene: 'leaves' },
      { name: 'Nisha Kapoor', relation: 'Daughter', note: 'The one who chose every tile, every colour, every lamp — and every plant in the garden.', scene: 'floral' },
      { name: 'Dadaji', relation: 'Grandfather', note: 'The eldest member, blessing the threshold first — as he has done for every home in the family.', scene: 'sunset' },
    ],
    dateDisplay: '22 Oct 2026',
    timeDisplay: '9:00 AM onwards',
    highlights: ['Griha Pravesh puja ceremony', 'Family thali lunch', 'Open house tour'],
  },

  {
    id: 'baby-shower',
    name: 'Riya & Arjun — Baby Shower',
    category: 'Baby & Family',
    style: 'Soft Whimsy',
    tagline: 'A celebration of tiny kicks, big dreams and the little one on the way.',
    description:
      'Riya and Arjun are welcoming their first child — and the whole family is gathering to shower the baby with love, blessings and a few too many tiny shoes.',
    theme: {
      name: 'Blush & Wonder',
      scene: 'balloon',
      mode: 'light',
      c: { base: '#FFF5EE', a: '#FFB6C1', b: '#FF69B4', accent: '#FFD1DC', text: '#4A2040' },
    },
    typography: { display: 'editorial', body: 'sans' },
    monogram: 'R & A',
    heroKicker: 'A little one is on the way',
    heroTitle: 'Baby Shower',
    heroSubtitle: '05 · 09 · 2026 · The Garden Lounge, Pune',
    hero: {
      overline: 'Riya & Arjun are expecting',
      headline: 'A Little Miracle',
      subline: 'Friday, the fifth of September 2026',
    },
    welcome: {
      heading: 'Shower the little one with love',
      message: [
        'Our tiny miracle is on the way — and we cannot imagine welcoming them without the people who have loved us the most.',
        'Join us for an afternoon of flowers, wishes and far too many pairs of baby socks.',
      ],
      signoff: 'With love, Riya & Arjun',
    },
    venue: 'The Garden Lounge',
    venueDetail: 'Koregaon Park, Pune',
    countdownInDays: 68,
    guests: 50,
    story: [
      'They met at a college reunion, bonded over bad chai and a shared love of old Hindi films. Riya laughed at his terrible jokes; Arjun pretended to understand her film references.',
      'Three years of apartments, playlists and one very spoilt cat later — they are adding a tiny human to the mix. The nursery is painted, the crib is assembled (with only minor arguments about the instructions).',
      'The first scan arrived on a rainy afternoon — and when they heard the heartbeat, everything else went quiet. That tiny sound became the loudest joy they have ever known.',
      'The baby shower is their way of saying: we have no idea what we are doing, but we are doing it together — and we want the people who love us most to be part of the beginning.',
      'So come for the flowers, stay for the cake, and leave a wish for the little one who is already so deeply loved.',
    ],
    gallery: [
      { label: 'The Scan', scene: 'balloon', caption: 'The first photo — already perfect.' },
      { label: 'The Bump', scene: 'bokeh', caption: 'Tiny kicks and big dreams.' },
      { label: 'The Nursery', scene: 'floral', caption: 'A room painted with hope.' },
      { label: 'The Party', scene: 'confetti', caption: 'The day everyone celebrated together.' },
      { label: 'The Wish Tree', scene: 'sparkle', caption: 'Hanging wishes for the little one.' },
      { label: 'The Garden', scene: 'garden', caption: 'Where mocktails flow and laughter echoes.' },
    ],
    schedule: [
      { time: '11:00 AM', title: 'Guests Arrive', note: 'Flowers, signature mocktails and mingling in the garden — find your name tag and settle in.' },
      { time: '12:00 PM', title: 'Blessing Ceremony', note: 'A traditional godh bharai — the family fills Riya\'s lap with gifts, blessings and the kind of love that wraps around a child before they are born.' },
      { time: '1:00 PM', title: 'Lunch & Cake', note: 'A garden brunch for the mama-to-be — Riya\'s favourites, from pani puri to the three-tier pastel cake.' },
      { time: '3:00 PM', title: 'Games & Wishes', note: 'Baby bingo, prediction cards, the "how big is the bump" challenge and lots of laughter — plus wish cards for the little one.' },
    ],
    track: 'Tujhe Dekha To — Lata Mangeshkar',
    mood: 'tender, joyful, floral',
    rsvp: {
      confirmBy: 'Please confirm by Saturday, 22 August 2026',
      email: 'riya.arjun@family.in',
      phone: '+91 98230 77890',
      prompt: 'Will you shower the little one with love?',
      note: 'The garden lounge is wheelchair-accessible — let us know if you need anything.',
    },
    contact: {
      email: 'riya.arjun@family.in',
      phone: '+91 98230 77890',
      whatsapp: '+91 98230 77890',
      note: 'For directions, dietary needs or gift ideas — reach out anytime.',
    },
    specialFeatures: [
      { icon: 'gift', title: 'Wish Tree', note: 'Write a wish for the baby — hung on our little tree and kept in a keepsake box for when they are older.' },
      { icon: 'heart', title: 'Baby Wishes', note: 'Predict the birth date, weight, first word and more — the closest guess wins a prize on delivery day.' },
      { icon: 'camera', title: 'Photo Booth', note: 'Tiny props, oversized booties, mini hats and the kind of smiles that only a baby shower can bring.' },
      { icon: 'music', title: 'Lullaby Playlist', note: 'Curated by Riya and Arjun — the songs they will sing to the little one at 3 AM. Add your own suggestion.' },
    ],
    family: [
      { name: 'Priya & Mohan Mehta', relation: 'Parents of the bride', note: 'The grandparents-to-be, already shopping for tiny shoes.', scene: 'bokeh' },
      { name: 'Vikram & Anjali Arjun', relation: 'Parents of the groom', note: 'Hosting with joy and a nursery full of surprises.', scene: 'floral' },
      { name: 'Nandini', relation: 'Sister of the bride', note: 'Chief organiser, cake decorator and keeper of the playlist.', scene: 'sunset' },
      { name: 'Kabir', relation: 'Brother of the groom', note: 'Building the crib and the speech that will make everyone cry.', scene: 'leaves' },
    ],
    dateDisplay: '5 Sep 2026',
    timeDisplay: '11:00 AM onwards',
    highlights: ['Godh bharai ceremony', 'Baby bingo games', 'Wish tree for the little one'],
  },

  {
    id: 'product-launch',
    name: 'Innovatech X1 Launch',
    category: 'Corporate',
    style: 'Futuristic Precision',
    tagline: 'The unveiling of a product that redefines what is possible.',
    description:
      'Innovatech pulls back the curtain on the X1 - a product three years in the making, revealed on a stage built for impact. Live demos, immersive zones and a keynote that sets the tone for the next decade.',
    theme: {
      name: 'Deep Horizon',
      scene: 'skyline',
      mode: 'dark',
      c: { base: '#0A1628', a: '#00B4D8', b: '#0077B6', accent: '#CAF0F8', text: '#E8F4FD' },
    },
    typography: { display: 'modern', body: 'sans' },
    monogram: 'X1',
    heroKicker: 'The future, revealed',
    heroTitle: 'Innovatech X1',
    heroSubtitle: '18 . 11 . 2026 . The Arena, Bengaluru',
    hero: {
      overline: '18 NOVEMBER 2026 . THE ARENA, BENGALURU',
      headline: 'INNOVATECH X1',
      subline: 'One product. Four zones. A thousand witnesses.',
    },
    welcome: {
      heading: 'The wait is over',
      message: [
        'Three years of engineering, two hundred engineers and one product that changes everything - the X1 is here, and we are revealing it on a stage built for impact.',
        'Join us for live demos, immersive experience zones and a keynote that will redefine what you thought was possible.',
      ],
      signoff: 'The Innovatech Team',
    },
    venue: 'The Arena',
    venueDetail: 'Whitefield, Bengaluru',
    countdownInDays: 118,
    guests: 800,
    story: [
      'Three years ago, a team of two hundred engineers set out to build something that did not exist yet — a product that would make people stop, look and rethink what technology could do.',
      'There were whiteboard sessions that lasted until dawn, prototypes that failed spectacularly and one breakthrough moment in a Bengaluru lab when the X1 prototype ran its first perfect cycle.',
      'The X1 is the result — a product designed to make the impossible feel inevitable. Every curve, every line of code, every micro-interaction was crafted with obsessive precision.',
      'This launch is not just an event; it is a statement about where technology is headed — and the team that dared to build it.',
      'Tonight, on a stage built for impact, the curtain rises. The future does not wait — and neither do we.',
    ],
    gallery: [
      { label: 'The Stage', scene: 'skyline', caption: 'A stage built for a reveal.' },
      { label: 'The Product', scene: 'citynight', caption: 'X1 in full light.' },
      { label: 'The Demo Zone', scene: 'bokeh', caption: 'Hands-on with the future.' },
      { label: 'The Crowd', scene: 'stars', caption: 'A thousand witnesses, one moment.' },
      { label: 'The Reveal', scene: 'fireworks', caption: 'The curtain drops and the X1 appears.' },
      { label: 'The After-Party', scene: 'aurora', caption: 'When the celebrations glow into the night.' },
    ],
    schedule: [
      { time: '10:00 AM', title: 'Doors Open', note: 'Registration, welcome coffee and a first look at the immersive experience zones — get your digital badge and explore.' },
      { time: '11:00 AM', title: 'Keynote', note: 'The X1 reveal on the main stage — a keynote that sets the tone for the next decade, delivered by the founding team.' },
      { time: '1:00 PM', title: 'Lunch and Demos', note: 'Four experience zones, each showcasing a different X1 capability — from AI processing to seamless integration. Lunch is served across all zones.' },
      { time: '3:30 PM', title: 'Hands-On Lab', note: 'Try the X1 yourself — guided by engineers, no scripts, no filters. Just raw, unfiltered product interaction.' },
    ],
    track: 'Horizon - Innovatech Studio',
    mood: 'bold, electric, forward',
    rsvp: {
      confirmBy: 'Registration closes Friday, 6 November 2026',
      email: 'launch@innovatech.io',
      phone: '+91 80 4567 8901',
      prompt: 'Register for the launch',
      note: 'All badges are digital - the QR arrives with your confirmation.',
    },
    contact: {
      email: 'launch@innovatech.io',
      phone: '+91 80 4567 8901',
      whatsapp: '+91 80 4567 8901',
      note: 'Press passes, partner queries and accessibility requests - the desk is live.',
    },
    specialFeatures: [
      { icon: 'rocket', title: 'Live Reveal', note: 'Watch the X1 unveiled in real time on the main stage — the moment three years of engineering becomes one unforgettable reveal.' },
      { icon: 'zap', title: 'Experience Zones', note: 'Four hands-on zones to explore every feature — from AI processing to seamless cross-device integration.' },
      { icon: 'ticket', title: 'Digital Badge', note: 'One QR for entry, labs, the after-party and exclusive post-event content — your all-access pass to the future.' },
      { icon: 'users', title: 'Founder\'s Circle', note: 'An exclusive Q&A with the founding team after the keynote — limited to the first fifty registrants.' },
    ],
    family: [
      { name: 'Priya Nair', relation: 'Founder & CEO', note: 'The visionary who greenlit the X1 project three years ago — tonight she hands the stage to the team she built.', scene: 'skyline' },
      { name: 'Vikram Desai', relation: 'Chief Technology Officer', note: 'The engineer behind the breakthrough — the one who turned "impossible" into "inevitable."', scene: 'citynight' },
      { name: 'Ananya Sharma', relation: 'Head of Design', note: 'The eye behind every curve, every pixel, every interaction — the X1 looks like it does because of her.', scene: 'bokeh' },
    ],
    dateDisplay: '18 Nov 2026',
    timeDisplay: '10:00 AM onwards',
    highlights: ['Live product reveal', 'Four experience zones', 'Hands-on lab access'],
  },

  {
    id: 'college-fest',
    name: 'Nexus 2026',
    category: 'College',
    style: 'Electric Campus',
    tagline: 'Three days of music, madness and memories that last beyond graduation.',
    description:
      'Nexus is the college festival that becomes the story you tell for years. Bands, battles, art installations and a main stage that turns the campus into a city of its own.',
    theme: {
      name: 'Ultraviolet',
      scene: 'wave',
      mode: 'dark',
      c: { base: '#1A0A2E', a: '#9B59B6', b: '#8E44AD', accent: '#E8DAEF', text: '#F4ECF7' },
    },
    typography: { display: 'modern', body: 'sans' },
    monogram: 'NX',
    heroKicker: 'The fest is back',
    heroTitle: 'Nexus 2026',
    heroSubtitle: '20 - 22 . 11 . 2026 . Main Grounds, Delhi University',
    hero: {
      overline: '20 - 22 NOVEMBER 2026 . DELHI UNIVERSITY',
      headline: 'NEXUS 2026',
      subline: 'Music. Art. Code. Chaos. Three days that own the night.',
    },
    welcome: {
      heading: 'The campus becomes a world',
      message: [
        'Every year, Nexus turns the university into something larger than itself - a festival of sound, light and the kind of energy that only happens when three thousand students stop sleeping at the same time.',
        'This year is bigger, louder and more unhinged. The lineup is set, the stages are built, and the only thing missing is you.',
      ],
      signoff: 'The Nexus Core Team',
    },
    venue: 'Main Grounds',
    venueDetail: 'Delhi University, North Campus',
    countdownInDays: 120,
    guests: 3000,
    story: [
      'Nexus started in 2008 as a single-stage concert in the cafeteria. It outgrew the cafeteria, then the auditorium, then the campus itself — and this year, it takes over the entire north campus.',
      'Three days, five stages, thirty-two bands and a thousand acts of spontaneous creativity — from live murals to midnight poetry slams to that one guy who always shows up with a sitar.',
      'The core team has been planning since March — sleepless nights, endless chai runs and the kind of chaos that somehow always comes together on opening night.',
      'Every year, Nexus becomes the story you tell for years — the night your favourite band played under the stars, the moment the art installation caught fire (metaphorically), the friend you made in the crowd.',
      'This is not just a fest. It is the three days the campus comes alive — and the rest of the year is just the wait.',
    ],
    gallery: [
      { label: 'Main Stage', scene: 'wave', caption: 'Where the headline acts take over.' },
      { label: 'Art Alley', scene: 'floral', caption: 'Live murals, installations and chaos.' },
      { label: 'The Arena', scene: 'citynight', caption: 'Battle of the bands, round by round.' },
      { label: 'Nexus After Dark', scene: 'stars', caption: 'When the campus glows purple.' },
      { label: 'The Food Court', scene: 'balloon', caption: 'Chaos, chai and chole bhature at 2 AM.' },
      { label: 'The Encore', scene: 'fireworks', caption: 'Night three — the one that echoes forever.' },
    ],
    schedule: [
      { time: '4:00 PM', title: 'Nexus Opens', note: 'Art walks, food trucks and the first beat — the campus transforms and the energy is instant.' },
      { time: '7:00 PM', title: 'Main Stage', note: 'Opening act and the crowd roar — thirty-two acts across three nights, starting with the one that sets the bar.' },
      { time: '10:00 PM', title: 'Nexus After Dark', note: 'DJ sets under purple lights — the campus becomes a dance floor and sleep becomes optional.' },
      { time: '11:59 PM', title: 'The Last Encore', note: 'Night three, the one that echoes — the final act, the final crowd, the moment everyone knows they were part of something.' },
    ],
    track: 'Purple Rain - Nexus Collective',
    mood: 'electric, youthful, relentless',
    rsvp: {
      confirmBy: 'Register by Sunday, 15 November 2026',
      email: 'nexus@dufests.in',
      phone: '+91 99530 62013',
      prompt: 'Get your Nexus pass',
      note: 'Day passes and full-fest passes available. Student ID required.',
    },
    contact: {
      email: 'nexus@dufests.in',
      phone: '+91 99530 62013',
      whatsapp: '+91 99530 62013',
      note: 'Band registrations, stall queries, lost phones - the help desk never sleeps.',
    },
    specialFeatures: [
      { icon: 'music', title: 'Band Registration', note: 'Register your band for the battle of the bands — five slots left, first come first served.' },
      { icon: 'palette', title: 'Art Alley', note: 'Live mural painting, open to all artists — bring your spray cans and your bravest ideas.' },
      { icon: 'ticket', title: 'Digital Pass', note: 'One QR for all three days and all five stages — your all-access key to the best weekend of the year.' },
      { icon: 'sparkles', title: 'Nexus Merch', note: 'Limited-edition festival tees, pins and stickers — designed by students, worn by everyone.' },
    ],
    family: [
      { name: 'Prof. Meera Iyer', relation: 'Faculty Advisor', note: 'The professor who fights for the festival budget every year — and wins. Nexus exists because she believes in it.', scene: 'wave' },
      { name: 'Rohan Malhotra', relation: 'Student Organizer', note: 'The core team lead who has not slept since March — but will dance on night three regardless.', scene: 'stars' },
      { name: 'Sanya Kapoor', relation: 'Cultural Secretary', note: 'The one who booked all thirty-two bands, negotiated every sponsor and still has time to paint a mural.', scene: 'floral' },
    ],
    dateDisplay: '20-22 Nov 2026',
    timeDisplay: '4:00 PM onwards',
    highlights: ['Five stages across three days', 'Battle of the bands', 'Nexus after dark DJ sets'],
  },


  {
    id: 'awards-night',
    name: 'Annual Excellence Awards',
    category: 'Corporate',
    style: 'Black-Tie Glamour',
    tagline: 'A night of recognition, inspiration and the people who made the year extraordinary.',
    description:
      'The Annual Excellence Awards is an evening dedicated to the individuals and teams whose dedication, creativity and resilience defined the year \u2014 celebrated under crystal chandeliers with the kind of elegance only a true milestone deserves.',
    theme: {
      name: 'Midnight Gold',
      scene: 'stage',
      mode: 'dark',
      c: { base: '#0D0D0D', a: '#FFD700', b: '#B8860B', accent: '#FFF8DC', text: '#FFF5EE' },
    },
    typography: { display: 'luxe', body: 'serif' },
    monogram: 'EA',
    heroKicker: 'Celebrating excellence',
    heroTitle: 'Annual Excellence Awards',
    heroSubtitle: '12 \u00b7 12 \u00b7 2026 \u00b7 The Grand Ballroom, Mumbai',
    hero: {
      overline: '12 DECEMBER 2026 \u00b7 THE GRAND BALLROOM, MUMBAI',
      headline: 'EXCELLENCE AWARDS 2026',
      subline: 'One night. A hundred stories. A thousand reasons to celebrate.',
    },
    welcome: {
      heading: 'The best of the best',
      message: [
        'Tonight is about the people who went above and beyond \u2014 the ones who turned challenges into triumphs and made the impossible look effortless.',
        'Raise a glass to every nominee, every winner and every team that made this year one for the books.',
      ],
      signoff: 'The Excellence Committee',
    },
    venue: 'The Grand Ballroom',
    venueDetail: 'Nariman Point, Mumbai',
    countdownInDays: 142,
    guests: 400,
    story: [
      'The Excellence Awards began in 2018 as a small dinner for ten awardees \u2014 a private affair with folding chairs and a rented projector. Now it fills a ballroom with four hundred guests, crystal chandeliers and a stage built for legends.',
      'Every nomination tells a story of late nights, bold decisions and the kind of teamwork that changes an industry. Behind every trophy is a person who stayed after everyone else went home, who picked up the phone at midnight, who refused to accept second best.',
      'This year, the competition was fiercer than ever \u2014 over three hundred nominations poured in from every department, every region, every corner of the organisation. The judges spent weeks reading every story, every testimonial, every quiet act of brilliance that often goes unnoticed.',
      'Tonight we honour the best \u2014 and remind everyone in this room that excellence is not a moment, it is a habit. It is the choice you make on the days when no one is watching, the standard you hold when it would be easier to let it slide.',
      'Under these chandeliers, surrounded by the people who made the year extraordinary, we celebrate not just the winners but the spirit that drives every person in this room \u2014 the belief that what we do matters, and that doing it well is worth every sleepless night.',
    ],
    gallery: [
      { label: 'The Red Carpet', scene: 'stage', caption: 'Where the evening begins \u2014 sequins, smiles and the first flash of the night.' },
      { label: 'The Awards', scene: 'sparkle', caption: 'The moment the names are read and the room holds its breath.' },
      { label: 'The Crowd', scene: 'bokeh', caption: 'Four hundred guests, one standing ovation that shakes the walls.' },
      { label: 'The After-Party', scene: 'citynight', caption: 'When the ceremony melts into celebration under Mumbai\'s skyline.' },
      { label: 'The Stage', scene: 'aurora', caption: 'A stage bathed in light, waiting for the next legend to step forward.' },
      { label: 'The Toast', scene: 'fireworks', caption: 'Glasses raised, futures bright \u2014 the final toast of the night.' },
    ],
    schedule: [
      { time: '6:00 PM', title: 'Red Carpet & Cocktails', note: 'Arrivals on the crimson carpet, champagne canapes and the first toast under the chandeliers \u2014 the evening sets its tone before the doors even open.' },
      { time: '7:30 PM', title: 'Opening Ceremony', note: 'Welcome address by the CEO, the highlight reel of the year\'s greatest moments and the first surge of emotion as the room watches the journey unfold on screen.' },
      { time: '8:00 PM', title: 'Awards Presentation', note: 'Twenty categories, twenty standing ovations \u2014 each winner announced with a story that reminds everyone why excellence matters and what it costs to achieve it.' },
      { time: '10:00 PM', title: 'Dinner & Celebration', note: 'A five-course gala dinner with live jazz, followed by an after-party where the formalities dissolve and the real celebration begins \u2014 dancing, laughter and the kind of joy that only comes from being recognised by your peers.' },
    ],
    track: 'Golden Hour \u2014 The Silk Road Ensemble',
    mood: 'elegant, inspiring, celebratory',
    rsvp: {
      confirmBy: 'Please confirm by Monday, 28 November 2026',
      email: 'awards@excellence.in',
      phone: '+91 22 4567 8901',
      prompt: 'Will you join us for the evening?',
      note: 'Black-tie attire. Dietary requirements noted at registration.',
    },
    contact: {
      email: 'awards@excellence.in',
      phone: '+91 22 4567 8901',
      whatsapp: '+91 22 4567 8901',
      note: 'Sponsorship queries, media passes and VIP requests \u2014 the team is standing by.',
    },
    specialFeatures: [
      { icon: 'trophy', title: 'Live Voting', note: 'Cast your vote for the People\'s Choice Award in real time \u2014 watch the results shift on the big screen as the night unfolds.' },
      { icon: 'camera', title: 'Red Carpet Gallery', note: 'Professional photos delivered to your inbox the next morning, beautifully edited and ready to share with the world.' },
      { icon: 'music', title: 'Dedicate a Song', note: 'Request the song that defines your year \u2014 it might just be played as the winner walks to the stage.' },
      { icon: 'gift', title: 'Keepsake Programme', note: 'A leather-bound programme with every nominee\'s story, every winner\'s journey and a personal note from the CEO \u2014 a memento of a night you will not forget.' },
    ],
    dateDisplay: '12 Dec 2026',
    timeDisplay: '6:00 PM onwards',
    highlights: ['Red carpet arrivals', 'Twenty award categories', 'Five-course gala dinner'],
  },

  {
    id: 'naming-ceremony',
    name: 'Little Aarav \u2014 Naming Ceremony',
    category: 'Baby & Family',
    style: 'Sacred Simplicity',
    tagline: 'A name chosen with love, a blessing shared with family.',
    description:
      'The Naming Ceremony for Little Aarav is a sacred gathering where tradition meets tenderness \u2014 a family coming together to give a name that will carry a lifetime of love, blessings and the kind of warmth only a newborn can inspire.',
    theme: {
      name: 'Starlight Blessings',
      scene: 'stars',
      mode: 'light',
      c: { base: '#FFF8E7', a: '#D4A843', b: '#C49A3C', accent: '#FFE8B5', text: '#3D2B1F' },
    },
    typography: { display: 'classic', body: 'serif' },
    monogram: 'A',
    heroKicker: 'A name is born',
    heroTitle: 'Little Aarav',
    heroSubtitle: '28 \u00b7 09 \u00b7 2026 \u00b7 The Sharma Residence, Jaipur',
    hero: {
      overline: 'The Sharma family invites you',
      headline: 'Aarav',
      subline: 'Sunday, the twenty-eighth of September 2026',
    },
    welcome: {
      heading: 'Welcome little star',
      message: [
        'A name is the first gift a child receives \u2014 and Aarav\'s name was chosen with the same care his parents bring to everything they do.',
        'Join us for a morning of blessings, sweetmeats and the kind of joy only a newborn can bring.',
      ],
      signoff: 'With love, the Sharma family',
    },
    venue: 'The Sharma Residence',
    venueDetail: 'Civil Lines, Jaipur',
    countdownInDays: 88,
    guests: 60,
    story: [
      'Aarav arrived on a rainy Tuesday morning, quiet and perfect, with ten fingers and ten toes and the kind of stillness that makes a room fall silent. The whole family knew his name before the doctor finished wrapping him \u2014 it had been decided months ago, whispered over late-night chai and folded tiny clothes.',
      'The naming ceremony is a tradition three generations deep \u2014 the same pandit who named Aarav\'s father will bless him today, reading from the same sacred texts his grandfather once held. The thread that connects three generations of Sharmas runs through this moment like a golden ribbon.',
      'His grandmother has been preparing for weeks \u2014 grinding sandalwood, stringing marigolds, rehearsing the lullabies she sang to his father. She says Aarav\'s eyes are exactly the same \u2014 wide, dark and full of a wisdom that belongs to someone much older.',
      'This is not just a ceremony; it is the moment Aarav becomes part of a story that started long before he arrived. His name means peace \u2014 and the peace he has already brought into this home is immeasurable.',
      'So come for the blessings, stay for the sweets and leave knowing that a little boy named Aarav now carries your love with him, always.',
    ],
    gallery: [
      { label: 'The Arrival', scene: 'stars', caption: 'The night the family grew by one \u2014 and the stars seemed closer.' },
      { label: 'The Puja', scene: 'sparkle', caption: 'Blessings for a name that will last forever, spoken in the same sacred cadence for three generations.' },
      { label: 'The Family', scene: 'bokeh', caption: 'Three generations under one roof, united by a tiny bundle of joy.' },
      { label: 'The Celebration', scene: 'floral', caption: 'Marigold garlands, sandalwood paste and the sweet scent of tradition filling every corner.' },
      { label: 'The Blessing', scene: 'mandap', caption: 'The sacred space where the pandit reads the ancient words that give Aarav his name.' },
      { label: 'The Grandparents', scene: 'sunset', caption: 'Dadi and Dadaji, holding the grandson they have been waiting for.' },
    ],
    schedule: [
      { time: '10:00 AM', title: 'Guests Arrive', note: 'Welcome drinks of saffron milk and rose sherbet, family greetings and the warm hum of anticipation as the house fills with love and the scent of fresh marigolds.' },
      { time: '11:00 AM', title: 'Naming Puja', note: 'The sacred ceremony with the pandit \u2014 ancient mantras echo through the home as Aarav is formally given his name, blessed with turmeric and wrapped in his grandfather\'s shawl.' },
      { time: '12:30 PM', title: 'Aarav\'s First Meal', note: 'The traditional honey and ghee ritual, guided by Dadi\'s steady hands \u2014 a moment of such tenderness that even the pandit pauses to smile.' },
      { time: '1:00 PM', title: 'Family Lunch', note: 'A feast made with love and tradition \u2014 Dadi\'s signature dal, Maa\'s biryani and the legendary gulab jamun that every guest has been requesting since last Diwali.' },
    ],
    track: 'Vaishnav Jan To \u2014 Lata Mangeshkar',
    mood: 'devotional, tender, joyful',
    rsvp: {
      confirmBy: 'Please confirm by Saturday, 12 September 2026',
      email: 'sharma.aarav@family.in',
      phone: '+91 141 2345 678',
      prompt: 'Will you bless our little one?',
      note: 'The ceremony is indoors \u2014 comfortable seating for all guests.',
    },
    contact: {
      email: 'sharma.aarav@family.in',
      phone: '+91 141 2345 678',
      whatsapp: '+91 141 2345 678',
      note: 'For directions, dietary needs or anything at all \u2014 the Sharmas are one message away.',
    },
    specialFeatures: [
      { icon: 'star', title: 'Blessing Cards', note: 'Write a blessing for Aarav \u2014 collected in a keepsake book that will grow with him, page by page, year by year.' },
      { icon: 'gift', title: 'Gift Registry', note: 'A curated list for the little one\'s first year \u2014 from his first teddy to his first storybook, chosen with care.' },
      { icon: 'camera', title: 'Photo Booth', note: 'Traditional props, timeless memories \u2014 tiny turbans, marigold garlands and the kind of smiles only a naming ceremony can inspire.' },
      { icon: 'book', title: 'Name Story Card', note: 'A beautifully calligraphed card explaining the meaning and origin of Aarav\'s name \u2014 a keepsake for his first scrapbook.' },
    ],
    family: [
      { name: 'Vikram & Priya Sharma', relation: 'Parents', note: 'The ones who chose the name Aarav \u2014 after three weeks of debate, two notebooks of options and one very long car ride.', scene: 'stars' },
      { name: 'Dadaji & Dadi', relation: 'Grandparents', note: 'The eldest members of the family, blessing Aarav with the same mantras they spoke over Vikram thirty years ago.', scene: 'sunset' },
      { name: 'Ananya Sharma', relation: 'Aunt', note: 'The one who flew in from Pune at midnight to be here \u2014 carrying a hand-knitted blanket and the biggest smile in the room.', scene: 'floral' },
      { name: 'Rohan Sharma', relation: 'Uncle', note: 'The official photographer, unofficial comedian and the one who will remind Aarav of this day for the rest of his life.', scene: 'bokeh' },
    ],
    dateDisplay: '28 Sep 2026',
    timeDisplay: '10:00 AM onwards',
    highlights: ['Traditional naming puja', 'Family feast', 'Blessing card keepsake'],
  },

  {
    id: 'kids-birthday',
    name: 'Meera 7th Birthday',
    category: 'Birthdays',
    style: 'Rainbow Wonderland',
    tagline: 'Seven years of sparkles, giggles and a little girl who lights up every room.',
    description:
      'Meera is turning seven, and the party is as bright and joyful as she is \u2014 balloons, confetti, a magic show and a cake that will make every child in the room gasp. This is the birthday party where the only rule is to have fun.',
    theme: {
      name: 'Sunshine Confetti',
      scene: 'balloon',
      mode: 'light',
      c: { base: '#FFFACD', a: '#FF6B6B', b: '#FF8E53', accent: '#FFE0B2', text: '#3D2B1F' },
    },
    typography: { display: 'editorial', body: 'sans' },
    monogram: 'M',
    heroKicker: 'She is turning seven',
    heroTitle: 'Meera\'s Birthday',
    heroSubtitle: '15 \u00b7 10 \u00b7 2026 \u00b7 Rainbow Hall, Bengaluru',
    hero: {
      overline: 'You are invited to',
      headline: 'Meera Turns 7!',
      subline: 'Saturday, the fifteenth of October 2026',
    },
    welcome: {
      heading: 'Let the party begin',
      message: [
        'Seven years ago, a little girl with the biggest smile came into the world \u2014 and now she is ready to celebrate with every friend, cousin and neighbour who makes her heart sing.',
        'Balloons, cake, a magic show and far too much sugar \u2014 it is going to be the best day ever.',
      ],
      signoff: 'Love, Amma & Papa',
    },
    venue: 'Rainbow Hall',
    venueDetail: 'Indiranagar, Bengaluru',
    countdownInDays: 74,
    guests: 40,
    story: [
      'Meera arrived on a Thursday morning, took one look at the world and smiled \u2014 and she has not stopped smiling since. She came into the world during a thunderstorm, and her mother always says the rain was the universe\'s way of celebrating.',
      'She loves painting, chasing butterflies and singing songs she makes up on the spot \u2014 her latest composition is called "The Caterpillar Who Wanted to Fly" and it has seventeen verses, each one more dramatic than the last.',
      'Her kindergarten teacher says Meera is the kind of child who makes other children braver \u2014 she is the first to hold someone\'s hand, the first to share her crayons, the first to say "you can do it" when someone wants to give up.',
      'This party is as colourful as she is \u2014 every balloon, every streamer, every slice of cake is a celebration of the joy she brings into every room she enters. The theme is rainbow, because Meera says she wants "all the colours at once."',
      'Seven years of glitter, giggle and grace \u2014 and this party is just the beginning. Come for the magic show, stay for the cake, and leave with a piece of Meera\'s joy tucked in your heart.',
    ],
    gallery: [
      { label: 'The Cake', scene: 'balloon', caption: 'Seven layers of rainbow magic \u2014 one for every year of Meera\'s smile.' },
      { label: 'The Magic Show', scene: 'confetti', caption: 'The moment the rabbit appeared and every child forgot how to blink.' },
      { label: 'The Dance Floor', scene: 'bokeh', caption: 'When every kid became a superstar and the music made the room shake.' },
      { label: 'The Party Favors', scene: 'sparkle', caption: 'A bag of joy to take home \u2014 stickers, sweets and a tiny rainbow.' },
      { label: 'The Art Corner', scene: 'floral', caption: 'Finger paints, glitter glue and the masterpieces that covered every wall.' },
      { label: 'The Balloon Drop', scene: 'garden', caption: 'The moment five hundred balloons fell from the ceiling and Meera\'s laugh echoed through the hall.' },
    ],
    schedule: [
      { time: '4:00 PM', title: 'Doors Open', note: 'Welcome drinks shaped like rainbows, balloon animals twisted into every animal imaginable and the sound of Meera\'s favourite playlist filling the room with joy.' },
      { time: '4:30 PM', title: 'Magic Show', note: 'The amazing Rajiv and his disappearing rabbit \u2014 a show so spectacular that even the parents forgot to check their phones for a full thirty minutes.' },
      { time: '5:30 PM', title: 'Cake Cutting', note: 'The seven-layer rainbow cake arrives with sparklers blazing and seventy voices singing "Happy Birthday" so loudly the neighbours could hear.' },
      { time: '6:00 PM', title: 'Free Play & Dance', note: 'Music thumping, confetti flying, the photo booth buzzing and the kind of beautiful chaos that only happens when forty children are given unlimited sugar and a dance floor.' },
    ],
    track: 'Happy Birthday \u2014 Meera\'s Playlist',
    mood: 'colorful, joyful, energetic',
    rsvp: {
      confirmBy: 'Please confirm by Saturday, 1 October 2026',
      email: 'meera.bday@family.in',
      phone: '+91 80 1234 5678',
      prompt: 'Will you party with Meera?',
      note: 'Allergy-friendly options available \u2014 let us know about dietary needs.',
    },
    contact: {
      email: 'meera.bday@family.in',
      phone: '+91 80 1234 5678',
      whatsapp: '+91 80 1234 5678',
      note: 'For directions, parking or gift ideas \u2014 Amma is just a message away.',
    },
    specialFeatures: [
      { icon: 'wand', title: 'Magic Show', note: 'The amazing Rajiv with tricks for every kid \u2014 and a few that left even the adults speechless.' },
      { icon: 'palette', title: 'Art Corner', note: 'Paint, draw and create your own masterpiece \u2014 every child takes home a frame-worthy keepsake.' },
      { icon: 'camera', title: 'Photo Booth', note: 'Rainbow props, silly faces, memories forever \u2014 and a polaroid for every guest to pin on their fridge.' },
      { icon: 'music', title: 'Meera\'s Playlist', note: 'The songs Meera picked herself, from "Happy" to "Shake It Off" \u2014 every track chosen because it makes her dance.' },
    ],
    family: [
      { name: 'Priya & Arjun', relation: 'Parents', note: 'The ones who decorated the hall at 6 AM, baked the cake at midnight and still had the energy to dance with forty children.', scene: 'balloon' },
      { name: 'Rajiv the Magician', relation: 'Entertainer', note: 'The man who made a rabbit disappear and fifty children believe in magic \u2014 he returns every year because Meera insists.', scene: 'confetti' },
      { name: 'Nandini Aunty', relation: 'Party Planner', note: 'The mastermind behind every balloon, every streamer and every perfectly timed game \u2014 she turned Meera\'s rainbow dream into a reality.', scene: 'bokeh' },
      { name: 'Tia', relation: 'Best Friend', note: 'The one who arrived first and left last \u2014 Meera\'s partner in crime, colouring and all things glitter.', scene: 'sparkle' },
    ],
    dateDisplay: '15 Oct 2026',
    timeDisplay: '4:00 PM onwards',
    highlights: ['Magic show for kids', 'Seven-layer rainbow cake', 'Art corner and photo booth'],
  },

  {
    id: 'farewell-party',
    name: 'Farewell Soiree',
    category: 'Special Events',
    style: 'Golden Hour Warmth',
    tagline: 'A toast to the ones who are leaving, the memories they made and the chapters yet to come.',
    description:
      'The Farewell Soiree is an evening of gratitude, laughter and the kind of warmth only a sunset can inspire \u2014 honouring the people who made every moment count before they step into their next great adventure.',
    theme: {
      name: 'Amber Farewell',
      scene: 'sunset',
      mode: 'dark',
      c: { base: '#2C1810', a: '#E67E22', b: '#D35400', accent: '#FDEBD0', text: '#FFF5EE' },
    },
    typography: { display: 'classic', body: 'serif' },
    monogram: 'FS',
    heroKicker: 'Until we meet again',
    heroTitle: 'Farewell Soiree',
    heroSubtitle: '08 \u00b7 11 \u00b7 2026 \u00b7 The Terrace Lounge, Delhi',
    hero: {
      overline: '08 NOVEMBER 2026 \u00b7 THE TERRACE LOUNGE, DELHI',
      headline: 'FAREWELL SOIREE',
      subline: 'One evening. A hundred memories. A thousand wishes.',
    },
    welcome: {
      heading: 'Goodbye is not forever',
      message: [
        'Tonight we say farewell to the people who made our office feel like home, our deadlines feel like adventures and our coffee breaks feel like therapy.',
        'Raise a glass to the ones who are leaving \u2014 and to the friendships that no departure can erase.',
      ],
      signoff: 'With love, the team',
    },
    venue: 'The Terrace Lounge',
    venueDetail: 'Connaught Place, Delhi',
    countdownInDays: 108,
    guests: 80,
    story: [
      'These colleagues did not just share desks \u2014 they shared dreams, deadlines and an unhealthy addiction to the office chai. They survived quarterly reviews, midnight deploys, one disastrous team outing in the rain and the kind of bonding that only happens when you are all staring at the same spreadsheet at 2 AM.',
      'Every farewell is a reminder that the best teams are the ones that make leaving feel impossible. When Arjun announced he was moving to London, the room went quiet for exactly three seconds before someone said "we are throwing the best farewell this office has ever seen."',
      'Arjun joined as a junior analyst five years ago and left as the person everyone turned to when the project was on fire, the client was furious and the deadline was yesterday. He made hard things look easy and made everyone around him believe they could do the same.',
      'Tonight we honour the journey, the laughter and the promise that this is not goodbye \u2014 it is see you soon. The terrace is set, the sunset is golden and the playlist is exactly the kind of emotional that makes everyone pretend they are not crying.',
      'Raise a glass to the ones who are leaving \u2014 and to the friendships that no departure can erase, no ocean can widen and no distance can diminish.',
    ],
    gallery: [
      { label: 'The Sunset', scene: 'sunset', caption: 'The golden hour that set the mood \u2014 amber light spilling across the terrace like a final embrace.' },
      { label: 'The Toast', scene: 'bokeh', caption: 'When everyone raised their glass and the room went beautifully, heartbreakingly quiet.' },
      { label: 'The Memories', scene: 'floral', caption: 'A wall of moments from the journey \u2014 every photo a chapter, every smile a story.' },
      { label: 'The Farewell', scene: 'stars', caption: 'The last hug before the next chapter \u2014 tight, long and full of everything words cannot say.' },
      { label: 'The Group Photo', scene: 'leaves', caption: 'The entire team, squeezed together, laughing through the tears.' },
      { label: 'The Dance', scene: 'citynight', caption: 'When the speeches ended and the dance floor became the only therapy anyone needed.' },
    ],
    schedule: [
      { time: '5:00 PM', title: 'Sunset Cocktails', note: 'Welcome drinks on the terrace as the sun dips behind the skyline \u2014 signature cocktails named after Arjun\'s most legendary inside jokes, served with canapes and the first wave of nostalgia.' },
      { time: '6:30 PM', title: 'Memory Lane', note: 'A slideshow of the best moments from five years together \u2014 the late nights, the team outings, the project launches and the quiet victories that no one else will ever know about.' },
      { time: '7:30 PM', title: 'Speeches & Toasts', note: 'The words that will make everyone cry \u2014 starting with the manager\'s tribute, followed by the team\'s surprise video and ending with Arjun\'s farewell speech that he has been pretending he does not need to prepare.' },
      { time: '8:30 PM', title: 'Dinner & Dance', note: 'A feast of Arjun\'s favourite dishes, followed by a dance floor where the music is loud, the tears are real and the memories are being made in real time.' },
    ],
    track: 'Counting Stars \u2014 OneRepublic',
    mood: 'nostalgic, warm, celebratory',
    rsvp: {
      confirmBy: 'Please confirm by Tuesday, 25 October 2026',
      email: 'farewell@team.in',
      phone: '+91 11 4567 8901',
      prompt: 'Will you join the farewell?',
      note: 'Dress code: smart casual with a touch of gold.',
    },
    contact: {
      email: 'farewell@team.in',
      phone: '+91 11 4567 8901',
      whatsapp: '+91 11 4567 8901',
      note: 'For directions, dietary needs or to share a memory \u2014 reach out anytime.',
    },
    specialFeatures: [
      { icon: 'wine', title: 'Toast Wall', note: 'Record a video toast for the farewell gallery \u2014 the ones Arjun will watch on his first lonely evening in London.' },
      { icon: 'camera', title: 'Memory Lane', note: 'A wall of photos from the journey together \u2014 every snap a reminder of why this team was different.' },
      { icon: 'music', title: 'Farewell Playlist', note: 'Request the song that says it all \u2014 the one that will play as Arjun walks out the door for the last time.' },
      { icon: 'gift', title: 'Time Capsule Letter', note: 'Write a letter to Arjun to be opened on his first anniversary in London \u2014 sealed with love and delivered by post.' },
    ],
    family: [
      { name: 'Arjun Mehta', relation: 'The Departing Colleague', note: 'Five years of brilliance, one promotion to London and a farewell speech he has been rehearsing in the shower for a week.', scene: 'sunset' },
      { name: 'Vikram Joshi', relation: 'Manager', note: 'The one who hired Arjun as a junior, promoted him twice and is now giving the farewell speech he swore he would never cry during.', scene: 'bokeh' },
      { name: 'Neha Kapoor', relation: 'Team Lead', note: 'The organiser of this entire evening \u2014 she booked the terrace, curated the playlist and handpicked every photo on the memory wall.', scene: 'floral' },
      { name: 'Rohan & Team', relation: 'The Colleagues', note: 'The ones who survived every deadline together, who know the colour of Arjun\'s coffee and the sound of his laugh from three floors away.', scene: 'stars' },
    ],
    dateDisplay: '8 Nov 2026',
    timeDisplay: '5:00 PM onwards',
    highlights: ['Sunset cocktail hour', 'Memory lane slideshow', 'Farewell speeches and dinner'],
  },

  {
    id: 'cocktail-soiree',
    name: 'The Green Hour',
    category: 'Special Events',
    style: 'Emerald Noir',
    tagline: 'An evening of craft cocktails, conversation and the art of the perfect pour.',
    description:
      'The Green Hour is a cocktail soiree where mixology meets atmosphere \u2014 a night of handcrafted drinks, deep conversations and the kind of intimate glamour that only a dimly lit bar can provide.',
    theme: {
      name: 'Emerald Hour',
      scene: 'bokeh',
      mode: 'dark',
      c: { base: '#0A1F1A', a: '#50C878', b: '#2E8B57', accent: '#E8F5E9', text: '#F1F8E9' },
    },
    typography: { display: 'modern', body: 'sans' },
    monogram: 'GH',
    heroKicker: 'Pour something extraordinary',
    heroTitle: 'The Green Hour',
    heroSubtitle: '21 \u00b7 11 \u00b7 2026 \u00b7 The Botanical Bar, Mumbai',
    hero: {
      overline: '21 NOVEMBER 2026 \u00b7 THE BOTANICAL BAR, MUMBAI',
      headline: 'THE GREEN HOUR',
      subline: 'One night. Fifty cocktails. A hundred conversations.',
    },
    welcome: {
      heading: 'Welcome to the green hour',
      message: [
        'Every great evening starts with a great drink \u2014 and tonight, the Botanical Bar is pouring fifty handcrafted cocktails in a room designed for the kind of conversations that only happen after the second glass.',
        'Pull up a chair, order something bold and let the night unfold.',
      ],
      signoff: 'The Botanical Bar Team',
    },
    venue: 'The Botanical Bar',
    venueDetail: 'Bandra West, Mumbai',
    countdownInDays: 131,
    guests: 120,
    story: [
      'The Green Hour started as a whisper among Mumbai\'s cocktail enthusiasts \u2014 a promise of a night where the drinks are as thoughtful as the conversation, where the ice is hand-carved and the garnishes are grown on the rooftop garden above the bar.',
      'Fifty cocktails, each designed by a different mixologist, each telling a different story in a different glass. From the Botanical Spritz infused with garden thyme to the Midnight Mule served in a copper vessel, every pour is a performance.',
      'The Botanical Bar itself is a character \u2014 hidden behind an unmarked door on Bandra\'s busiest lane, with emerald walls, velvet seating and a bar counter made from reclaimed teak that has absorbed a hundred years of Mumbai\'s nightlife.',
      'This is not just a soiree; it is a masterclass in the art of the perfect pour. The mixologists are artists, the ingredients are their palette and the evening is their canvas \u2014 and tonight, they are painting with gin, smoke and starlight.',
      'So pull up a chair, order something bold and let the night unfold \u2014 because the best conversations happen over the second glass, and the best memories are made when the ice begins to melt.',
    ],
    gallery: [
      { label: 'The Bar', scene: 'bokeh', caption: 'Fifty bottles, fifty stories \u2014 each one glowing like a promise behind the counter.' },
      { label: 'The Pour', scene: 'sparkle', caption: 'The moment the cocktail comes alive \u2014 liquid gold cascading over hand-carved ice.' },
      { label: 'The Room', scene: 'stars', caption: 'Dim lights, deep conversations \u2014 the kind of hush that only a truly beautiful room can hold.' },
      { label: 'The Toast', scene: 'floral', caption: 'When everyone raised their glass and the room shimmered with emerald light.' },
      { label: 'The Garden', scene: 'garden', caption: 'The rooftop herb garden where tonight\'s garnishes were picked at sunset.' },
      { label: 'The Jazz Corner', scene: 'wave', caption: 'The quartet in the corner, playing the kind of music that makes you forget what time it is.' },
    ],
    schedule: [
      { time: '7:00 PM', title: 'Doors Open', note: 'A welcome cocktail of garden thyme and elderflower, paired with truffle-laced canapes \u2014 the first sip sets the tone for the entire evening.' },
      { time: '7:30 PM', title: 'Mixology Session', note: 'A live cocktail demonstration by the Head Mixologist, revealing the secrets behind three of tonight\'s signature pours \u2014 and the stories that inspired them.' },
      { time: '8:30 PM', title: 'The Green Hour', note: 'Fifty cocktails, open bar, every glass a different adventure \u2014 from the smoky Old Fashioned to the floral Empress Gin Fizz, each one designed to surprise.' },
      { time: '10:00 PM', title: 'The After-Glow', note: 'Live jazz by the Botanical Quartet, late-night pours of rare single malts and the kind of conversations that only happen when the room is dim and the company is perfect.' },
    ],
    track: 'Green Velvet \u2014 The Botanical Sessions',
    mood: 'intimate, sophisticated, vibrant',
    rsvp: {
      confirmBy: 'Please confirm by Monday, 9 November 2026',
      email: 'reservations@botanicalbar.in',
      phone: '+91 22 5678 9012',
      prompt: 'Reserve your seat at the bar',
      note: 'Smart casual attire. The bar is standing-room only after 9 PM.',
    },
    contact: {
      email: 'reservations@botanicalbar.in',
      phone: '+91 22 5678 9012',
      whatsapp: '+91 22 5678 9012',
      note: 'For cocktail menus, private bookings or queries \u2014 the bar team is on call.',
    },
    specialFeatures: [
      { icon: 'glass', title: 'Cocktail Menu', note: 'Fifty handcrafted cocktails, each with a story \u2014 from the first sip to the last, every glass is a different chapter.' },
      { icon: 'music', title: 'Live Jazz', note: 'The Botanical Quartet, all night long \u2014 the kind of music that makes the ice clink in rhythm.' },
      { icon: 'camera', title: 'Polaroid Corner', note: 'Instant photos, instant memories \u2014 each one developed in green-tinted ink, each one a keeper.' },
      { icon: 'book', title: 'Cocktail Recipe Card', note: 'Take home a beautifully illustrated recipe card for your favourite pour \u2014 so you can recreate the magic on a quiet Tuesday night.' },
    ],
    dateDisplay: '21 Nov 2026',
    timeDisplay: '7:00 PM onwards',
    highlights: ['Fifty craft cocktails', 'Live mixology demo', 'Late-night jazz session'],
  },

]

export function getDemoById(id: string): ExperienceDemo | undefined {
  return DEMOS.find((demo) => demo.id === id)
}
