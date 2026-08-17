export type Category =
  | 'Weddings'
  | 'Engagement'
  | 'Pre-Wedding'
  | 'Birthdays'
  | 'Baby & Family'
  | 'Corporate'
  | 'College'
  | 'Special Events'

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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
]

export function getDemoById(id: string): ExperienceDemo | undefined {
  return DEMOS.find((demo) => demo.id === id)
}
