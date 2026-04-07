export type Performer = {
  name: string;
  image: string;
  description: string;
};

export type TicketTier = {
  name: string;
  price: string;
  details: string;
  featured?: boolean;
};

export type FAQ = {
  question: string;
  answer: string;
};

export const performers: Performer[] = [
  {
    name: 'Amina Hale',
    image:
      'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80',
    description: 'Acoustic folk vocalist with songs on healing, memory, and belonging.'
  },
  {
    name: 'Jonah Rivers',
    image:
      'https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?auto=format&fit=crop&w=900&q=80',
    description: 'Fingerstyle guitarist creating intimate instrumentals for still moments.'
  },
  {
    name: 'Nora & Elm',
    image:
      'https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=900&q=80',
    description: 'A candlelit piano and cello duo blending gentle originals and classics.'
  }
];

export const ticketTiers: TicketTier[] = [
  {
    name: 'Supporter Pass',
    price: '$25',
    details: 'Single viewer access + thank-you email.'
  },
  {
    name: 'Patron Pass',
    price: '$60',
    details: 'Viewer access + digital program + supporter wall mention.',
    featured: true
  },
  {
    name: 'Sponsor Pass',
    price: '$150',
    details: 'Everything in Patron + post-event gratitude note from the organizers.'
  }
];

export const faqs: FAQ[] = [
  {
    question: 'When will I get the link?',
    answer: 'The private YouTube viewing link will be emailed exactly 1 day before the concert. The public channel is listed in the hero section.'
  },
  {
    question: 'Do I need a YouTube account?',
    answer: 'No account is required to watch, but signing in can help with chat participation.'
  },
  {
    question: 'Can I donate without attending?',
    answer: 'Yes. You can choose the “Donate Only” option and still support the cause directly.'
  },
  {
    question: 'Will there be replay access?',
    answer: 'Replay access will be available for 48 hours after the live concert ends.'
  }
];
