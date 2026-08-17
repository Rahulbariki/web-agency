import type { Scene } from './demos'

export interface WeddingEvent {
  id: string
  name: string
  date: string
  time: string
  venue: string
  note: string
  icon: 'flower' | 'music' | 'rings' | 'sparkles'
  start: string
  end: string
}

export interface WeddingGalleryItem {
  scene: Scene
  caption: string
  ratio: 'tall' | 'wide' | 'square'
}

export interface WeddingPerson {
  name: string
  role: string
  note: string
  scene: Scene
}

export interface WeddingConfig {
  monogram: string
  names: string
  dateDisplay: string
  dateShort: string
  target: string
  venue: string
  venueAddress: string
  city: string
  hero: {
    kicker: string
    names: string[]
    tagline: string
    date: string
    place: string
  }
  story: {
    heading: string
    intro: string
    timeline: { year: string; title: string; text: string; scene: Scene }[]
  }
  events: WeddingEvent[]
  gallery: WeddingGalleryItem[]
  family: {
    heading: string
    sub: string
    bride: { title: string; people: WeddingPerson[] }
    groom: { title: string; people: WeddingPerson[] }
  }
  venueInfo: {
    heading: string
    sub: string
    mapNote: string
    parking: string[]
    stays: { name: string; note: string }[]
  }
  rsvp: {
    heading: string
    sub: string
    confirmBy: string
  }
  share: {
    title: string
    subtitle: string
    whatsappText: string
    link: string
  }
  music: { track: string; note: string }
  footer: {
    line1: string
    names: string
    date: string
    line2: string
  }
}

export const WEDDING: WeddingConfig = {
  monogram: 'R & P',
  names: 'Rahul & Priya',
  dateDisplay: '12 December 2026',
  dateShort: '12 · 12 · 2026',
  target: '2026-12-12T09:30:00',
  venue: 'Taj Convention Hall',
  venueAddress: 'Road No. 1, Financial District, Hyderabad, Telangana 500032',
  city: 'Hyderabad',
  hero: {
    kicker: 'Together with their families',
    names: ['Rahul', 'Priya'],
    tagline: 'Two hearts. One beautiful beginning.',
    date: '12 · 12 · 2026',
    place: 'Hyderabad',
  },
  story: {
    heading: 'Our Story',
    intro:
      'Some stories begin with a moment. Ours began with a conversation, grew through countless drives and chais, and became a journey we never want to end.',
    timeline: [
      {
        year: '2019',
        title: 'We met.',
        text: 'A chance conversation at a friend’s wedding in Chennai turned into a phone call that lasted all night.',
        scene: 'bokeh',
      },
      {
        year: '2021',
        title: 'We became inseparable.',
        text: 'Long drives through Hyderabad, late dinners and a thousand shared playlists later, home stopped being a place.',
        scene: 'sunset',
      },
      {
        year: '2024',
        title: 'We knew.',
        text: 'On a quiet rooftop under a sky full of stars, Priya said yes.',
        scene: 'stars',
      },
      {
        year: '2026',
        title: 'Forever begins.',
        text: 'On the twelfth of December, our families come together and forever finally begins.',
        scene: 'arch',
      },
    ],
  },
  events: [
    {
      id: 'mehendi',
      name: 'Mehendi',
      date: '10 December 2026',
      time: '5:00 PM',
      venue: 'The Garden Courtyard',
      note: 'An evening of colours, music, laughter and family — henna for the hands, chaos for the rest.',
      icon: 'flower',
      start: '2026-12-10T17:00:00',
      end: '2026-12-10T22:00:00',
    },
    {
      id: 'sangeet',
      name: 'Sangeet',
      date: '11 December 2026',
      time: '7:00 PM',
      venue: 'Grand Ballroom',
      note: 'An unforgettable night of music and celebration. The families are rehearsed; be kind.',
      icon: 'music',
      start: '2026-12-11T19:00:00',
      end: '2026-12-11T23:59:00',
    },
    {
      id: 'wedding',
      name: 'Wedding',
      date: '12 December 2026',
      time: '9:30 AM',
      venue: 'Taj Convention Hall',
      note: 'The moment we’ve been waiting for. The ceremony begins sharp at 9:30 — please arrive by 9:00.',
      icon: 'rings',
      start: '2026-12-12T09:30:00',
      end: '2026-12-12T13:00:00',
    },
    {
      id: 'reception',
      name: 'Reception',
      date: '12 December 2026',
      time: '7:00 PM',
      venue: 'Taj Convention Hall',
      note: 'Join us as we celebrate together — dinner, dancing and the first toast as a married couple.',
      icon: 'sparkles',
      start: '2026-12-12T19:00:00',
      end: '2026-12-12T23:59:00',
    },
  ],
  gallery: [
    { scene: 'sunset', caption: 'Golden hour, golden us.', ratio: 'tall' },
    { scene: 'bokeh', caption: 'Candid laughter — the good kind.', ratio: 'square' },
    { scene: 'floral', caption: 'The decor that became a garden.', ratio: 'wide' },
    { scene: 'rings', caption: 'Two rings, one promise.', ratio: 'square' },
    { scene: 'arch', caption: 'Under the mandap, surrounded by love.', ratio: 'wide' },
    { scene: 'balloon', caption: 'Sangeet night, pure joy.', ratio: 'tall' },
    { scene: 'sparkle', caption: 'The welcome night.', ratio: 'square' },
    { scene: 'stars', caption: 'The night she said yes.', ratio: 'wide' },
    { scene: 'citynight', caption: 'Hyderabad at dusk.', ratio: 'square' },
    { scene: 'monogram', caption: 'Our monogram.', ratio: 'tall' },
    { scene: 'mountain', caption: 'Our first adventure.', ratio: 'wide' },
    { scene: 'leaves', caption: 'Everyone already in love.', ratio: 'square' },
  ],
  family: {
    heading: 'With the blessings of our families',
    sub: 'Our families have grown together through this journey, and we cannot wait to celebrate with all of them.',
    bride: {
      title: 'The Bride’s Family',
      people: [
        { name: 'Suresh & Lakshmi Rao', role: 'Parents of the bride', note: 'Hosting the celebrations with all the warmth of their home in Hyderabad.', scene: 'bokeh' },
        { name: 'Ananya Rao', role: 'Sister of the bride', note: 'Chief of ceremonies, holder of tissues, keeper of the playlist.', scene: 'floral' },
        { name: 'Meera Rao', role: 'Grandmother of the bride', note: 'The one whose recipes made every festival feel like home.', scene: 'leaves' },
      ],
    },
    groom: {
      title: 'The Groom’s Family',
      people: [
        { name: 'Venkatesh & Padma Sharma', role: 'Parents of the groom', note: 'The family that taught Rahul how to make chai, laugh and stay late.', scene: 'sunset' },
        { name: 'Rohan Sharma', role: 'Brother of the groom', note: 'Running the sangeet and the speech that will embarrass Rahul.', scene: 'stars' },
        { name: 'Sita Sharma', role: 'Grandmother of the groom', note: 'Still the best dancer in the family, and she knows it.', scene: 'bokeh' },
      ],
    },
  },
  venueInfo: {
    heading: 'The Venue',
    sub: 'Taj Convention Hall sits at the heart of Hyderabad’s Financial District — grand, easy to reach, and waiting for you.',
    mapNote: 'Directions are pre-filled — just open Maps.',
    parking: [
      'Valet parking available at the main entrance from 9:00 AM.',
      'Self-parking in the covered lot behind the hall.',
      'A dedicated drop-off lane for elderly guests at the south gate.',
    ],
    stays: [
      { name: 'Taj Falaknuma Palace', note: 'Heritage stay, 15 minutes away' },
      { name: 'The Trident, Cybercity', note: '5 minutes from the venue' },
      { name: 'ITC Kohenur, HITEC City', note: '10 minutes away' },
    ],
  },
  rsvp: {
    heading: 'We’d love to celebrate with you',
    sub: 'Your presence is the greatest gift — kindly let us know you’re coming.',
    confirmBy: 'Please confirm by Sunday, 22 November 2026',
  },
  share: {
    title: 'Share the invitation',
    subtitle: 'Scan to open Rahul & Priya’s wedding experience.',
    whatsappText:
      "You're invited to the wedding of Rahul & Priya ❤️\n\n12 December 2026 · Hyderabad\n\nWe'd love to celebrate with you — open the invitation:",
    link: '/demo/wedding',
  },
  music: {
    track: 'Golden Hour — Studio Raga',
    note: 'An instrumental track, written for the evening of the 12th.',
  },
  footer: {
    line1: 'With love,',
    names: 'Rahul & Priya',
    date: '12 • 12 • 2026',
    line2: 'Forever starts here.',
  },
}
