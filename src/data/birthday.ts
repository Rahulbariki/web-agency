import type { Scene } from './demos'

export interface BirthdayGalleryItem {
  scene: Scene
  caption: string
  ratio: 'tall' | 'wide' | 'square'
}

export interface BirthdayWish {
  name: string
  message: string
  id: number
}

export interface BirthdayMilestone {
  age: string
  title: string
  icon: string
  description: string
  scene: Scene
}

export interface BirthdayConfig {
  name: string
  age: string
  dateDisplay: string
  dateShort: string
  target: string
  venue: string
  venueAddress: string
  city: string
  tagline: string
  hero: {
    kicker: string
    headline: string
    tagline: string
    date: string
    place: string
  }
  opening: {
    stage1: string
    stage2: string
    stage3: string
    stage4: string
    stage5: string
    stage6: string
  }
  story: {
    heading: string
    intro: string
    timeline: { date: string; title: string; text: string; scene: Scene }[]
  }
  milestones: BirthdayMilestone[]
  party: {
    heading: string
    sub: string
    date: string
    time: string
    venue: string
    venueAddress: string
    dress: string
    dressNote: string
  }
  schedule: { time: string; title: string; icon: string }[]
  gallery: BirthdayGalleryItem[]
  parents: {
    heading: string
    sub: string
    mom: { name: string; role: string; note: string }
    dad: { name: string; role: string; note: string }
    message: string
  }
  wishes: {
    heading: string
    sub: string
    preloaded: BirthdayWish[]
  }
  rsvp: {
    heading: string
    sub: string
    confirmBy: string
  }
  cake: {
    wishText: string
    celebrationText: string
  }
  share: {
    title: string
    subtitle: string
    whatsappText: string
    link: string
  }
  music: { track: string; note: string }
  footer: {
    names: string
    tagline: string
    date: string
  }
}

export const BIRTHDAY: BirthdayConfig = {
  name: 'AARAV',
  age: 'ONE',
  dateDisplay: '18 October 2026',
  dateShort: '18 · 10 · 2026',
  target: '2026-10-18T17:00:00',
  venue: 'The Grand Celebration Hall',
  venueAddress: 'Road No. 36, Jubilee Hills, Hyderabad, Telangana 500033',
  city: 'Hyderabad',
  tagline: 'One year. A million memories.',
  hero: {
    kicker: "It's a birthday celebration",
    headline: 'AARAV',
    tagline: 'One year. A million memories.',
    date: '18 October 2026',
    place: 'Hyderabad',
  },
  opening: {
    stage1: 'Once upon a time...',
    stage2: '18 October 2025',
    stage3: 'A little boy named Aarav arrived.',
    stage4: 'A year later...',
    stage5: 'AARAV',
    stage6: 'Turns ONE!',
  },
  story: {
    heading: 'One year of Aarav.',
    intro:
      'From his very first cry to his very first step, every moment with Aarav has been a gift. Here is a look back at the most beautiful year of our lives.',
    timeline: [
      {
        date: '18 Oct 2025',
        title: 'Hello, world.',
        text: 'Aarav arrived on a bright October morning, weighing 3.2 kg, with a full head of hair and the loudest cry in the hospital. The world got a little brighter that day.',
        scene: 'balloon',
      },
      {
        date: '2 Months',
        title: 'First smiles.',
        text: 'At two months, Aarav discovered smiling. Not just the reflex kind — the real, gummy, whole-face kind that melts every heart in the room.',
        scene: 'bokeh',
      },
      {
        date: '5 Months',
        title: 'First giggles.',
        text: 'His laughter filled every corner of the house. Peek-a-boo became the official family sport, and Aarav was the undefeated champion.',
        scene: 'sparkle',
      },
      {
        date: '8 Months',
        title: 'First adventures.',
        text: 'Crawling at lightning speed, Aarav explored every corner. The living room became a jungle, the kitchen a cave, and every object a treasure.',
        scene: 'leaves',
      },
      {
        date: '12 Months',
        title: 'And now... ONE!',
        text: 'Standing tall, clapping hands, saying "mama" and "papa" — our little boy is officially ONE. And this is just the beginning.',
        scene: 'confetti',
      },
    ],
  },
  milestones: [
    {
      age: '2 Months',
      title: 'First Smile',
      icon: 'smile',
      description: 'That first real, gummy smile that made every sleepless night worth it.',
      scene: 'bokeh',
    },
    {
      age: '5 Months',
      title: 'First Laugh',
      icon: 'laugh',
      description: 'Peek-a-boo champion. His giggles could light up the darkest room.',
      scene: 'sparkle',
    },
    {
      age: '8 Months',
      title: 'First Step',
      icon: 'footprints',
      description: 'Three wobbly steps to mamma, then a tumble into the softest landing.',
      scene: 'sunset',
    },
    {
      age: '4 Months',
      title: 'First Toy',
      icon: 'toy',
      description: 'A stuffed elephant named Ellie. Still his favourite nap companion.',
      scene: 'floral',
    },
    {
      age: '10 Months',
      title: 'First Adventure',
      icon: 'compass',
      description: 'His first trip to the park. Sand, swings, and a look of pure wonder.',
      scene: 'leaves',
    },
    {
      age: '12 Months',
      title: 'First Birthday',
      icon: 'cake',
      description: 'The biggest celebration for the smallest superstar. ONE year of joy.',
      scene: 'confetti',
    },
  ],
  party: {
    heading: 'Come celebrate with us.',
    sub: 'Join us for an evening of joy, laughter and a whole lot of cake.',
    date: '18 October 2026',
    time: '5:00 PM onwards',
    venue: 'The Grand Celebration Hall',
    venueAddress: 'Road No. 36, Jubilee Hills, Hyderabad',
    dress: 'Smart Casuals',
    dressNote: 'Light, comfortable and party-ready. Pastels encouraged!',
  },
  schedule: [
    { time: '5:00 PM', title: 'Welcome', icon: 'sparkles' },
    { time: '5:30 PM', title: 'Games & Fun', icon: 'party' },
    { time: '6:30 PM', title: 'Cake Cutting', icon: 'cake' },
    { time: '7:00 PM', title: 'Dinner', icon: 'utensils' },
    { time: '8:00 PM', title: 'Goodbyes & Memories', icon: 'heart' },
  ],
  gallery: [
    { scene: 'balloon', caption: 'The day Aarav arrived.', ratio: 'tall' },
    { scene: 'bokeh', caption: 'Those tiny fingers.', ratio: 'square' },
    { scene: 'sparkle', caption: 'First bath, first splashes.', ratio: 'wide' },
    { scene: 'floral', caption: 'Nap time with Ellie.', ratio: 'square' },
    { scene: 'sunset', caption: 'Golden hour with mamma.', ratio: 'tall' },
    { scene: 'leaves', caption: 'First park adventure.', ratio: 'wide' },
    { scene: 'confetti', caption: 'The birthday boy!', ratio: 'square' },
    { scene: 'stars', caption: 'Stargazing with papa.', ratio: 'tall' },
    { scene: 'arch', caption: 'Family portrait day.', ratio: 'wide' },
    { scene: 'monogram', caption: "Aarav's monogram.", ratio: 'square' },
    { scene: 'wave', caption: 'Splashing in the tub.', ratio: 'tall' },
    { scene: 'citynight', caption: 'Hyderabad with Aarav.', ratio: 'square' },
    { scene: 'mountain', caption: 'First road trip.', ratio: 'wide' },
    { scene: 'rings', caption: 'Mamma & Papa together.', ratio: 'square' },
    { scene: 'aurora', caption: 'Dreaming big.', ratio: 'tall' },
  ],
  parents: {
    heading: 'Hosted with lots of love by',
    sub: 'Our little world revolves around this tiny human, and we are so grateful to share this milestone with you.',
    mom: {
      name: 'Ananya',
      role: 'MOM',
      note: 'The one who sings lullabies at 3am and still has the energy to plan the perfect party.',
    },
    dad: {
      name: 'Rahul',
      role: 'DAD',
      note: 'The one who built the crib, assembled every toy, and still tears up at every milestone.',
    },
    message:
      "We can't believe our little one is already ONE! Come make this milestone even more special with us.",
  },
  wishes: {
    heading: 'Leave Aarav a birthday wish.',
    sub: "Your words will become part of Aarav's memory book.",
    preloaded: [
      { id: 1, name: 'Aunt Meera', message: 'Happy 1st birthday, little superstar! The world is so lucky to have you.' },
      { id: 2, name: 'Uncle Vikram', message: 'Keep smiling and exploring, Aarav! Your laughter is the best sound ever.' },
      { id: 3, name: 'Cousin Priya', message: "To the tiniest member of our family with the biggest heart — happy birthday!" },
      { id: 4, name: 'Grandma & Grandpa', message: 'Our little angel turns ONE! You have given us a year full of pure joy.' },
      { id: 5, name: 'Neighbor Sharma Ji', message: 'What a beautiful boy! Wishing Aarav a lifetime of happiness and good health.' },
      { id: 6, name: 'Dr. Patel', message: 'From your first check-up to your first birthday — what a journey! Happy birthday, Aarav.' },
    ],
  },
  rsvp: {
    heading: 'Will you join the party?',
    sub: 'Your presence is the greatest gift. Let us know if you can make it!',
    confirmBy: 'Please confirm by 5 October 2026',
  },
  cake: {
    wishText: 'Make a wish, Aarav!',
    celebrationText: 'Happy 1st Birthday!',
  },
  share: {
    title: 'Share the Birthday Experience',
    subtitle: "Scan to open Aarav's birthday invitation.",
    whatsappText:
      "You're invited to celebrate Aarav's 1st Birthday!\n\n18 October 2026\nHyderabad\n\nCome celebrate this special milestone with us!",
    link: '/demo/birthday',
  },
  music: {
    track: 'Little Stars — Birthday Melody',
    note: 'A cheerful tune for a cheerful boy.',
  },
  footer: {
    names: "AARAV'S 1ST BIRTHDAY",
    tagline: 'One year. A million memories.',
    date: '18 · 10 · 2026',
  },
}
