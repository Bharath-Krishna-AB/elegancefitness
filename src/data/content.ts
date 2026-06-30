export interface ProgramItem {
  id: string;
  title: string;
  description: string;
  image: string;
  badge: string;
}

export interface TrainerItem {
  id: string;
  name: string;
  specialty: string;
  experience: string;
  image: string;
}

export interface PlanItem {
  id: string;
  duration: string;
  price: number;
  currency: string;
  features: string[];
  popular?: boolean;
}

export const COMPANY_DATA = {
  // Company Identity
  name: "ELEGANCE FITNESS CLUB",
  established: "2019",
  tagline: "1 Life 1 Body 1 Chance",
  subTagline: "Transform To Elegance",
  heroDescription: "Discover the true elegance of hardcore fitness. State-of-the-art facilities, specialized personal coaching, and an electric community dedicated to physical, mental, and emotional dominance.",

  // About & Philosophy
  about: "Welcome to Elegance Fitness Club, a professional men's fitness gym established in 2019. Located in Jleeb Al Shuwaikh, we provide state-of-the-art equipment, certified trainers, sauna facilities, and a dedicated environment for serious training.",
  mission: "To provide a professional fitness gym environment where dedicated men can train hard and achieve their fitness goals with certified trainer support and quality equipment.",
  philosophy: "We believe that true transformation requires uncompromised dedication, expert coaching, and an elite training atmosphere.",
  missionBelief: "We believe in dedication, hard work, and real results. Our professional team is committed to supporting your fitness journey with expert guidance, modern facilities, and unwavering support.",
  facilitiesDesc: "Our facility is equipped with dedicated lifting platforms, turf conditioning tracks, and luxury sauna suites designed for athletic excellence.",

  // Offerings Description
  offeringsDesc: "Professional fitness facilities and services designed for serious training. State-of-the-art equipment, certified trainers, and comprehensive wellness support.",

  // Classes Description
  classesDesc: "Our signature class collection designed to deliver maximum results with minimal time investment. Hardcore sessions tailored for men and women ready to push their boundaries.",

  // Trainers Description
  trainersDesc: "Our team of certified professionals with extensive experience are dedicated to guiding your fitness transformation.",

  // Pricing Description
  pricingDesc: "Choose the membership plan that fits your fitness goals. Save more with longer commitments.",

  // Contact Information
  contactHeading: "DISCOVER THE ELEGANCE OF FITNESS",
  contactDescription: "Our team of certified trainers is ready to build your customized training protocol. Whether you're focusing on strength, power, endurance, or recovery, we have the specialized zones and expertise to help you dominate your fitness goals.",

  // Locations
  locations: [
    {
      id: "main",
      name: "MAIN HEADQUARTERS",
      address: "Heart of the Community Plaza, 450 Elegance Way, Suite 100",
      hoursWeekday: "5:00 AM – 11:00 PM",
      hoursWeekend: "6:00 AM – 9:00 PM",
      phone: "+1 (800) 555-ELEGANCE",
      email: "join@elegancefitnessclub.com"
    },
    {
      id: "mens",
      name: "MEN'S DEDICATED GYM",
      address: "Elite District, 220 Power Ave, Suite 50",
      hoursWeekday: "5:00 AM – 11:00 PM",
      hoursWeekend: "6:00 AM – 9:00 PM",
      phone: "+1 (800) 555-MENS",
      email: "mens@elegancefitnessclub.com"
    }
  ],

  // Primary Location (Kuwait)
  hours: {
    morning: "5:00 AM - 2:00 PM",
    evening: "4:00 PM - 9:00 PM"
  },
  location: "Block-4, Street-9, Building-130, Jleeb Al Shuwaikh, Kuwait",
  phone: "+965 65170357 / +965 65106074",

  // Global Locations
  globalLocations: [
    "LONDON MAYFAIR",
    "TOKYO SHIBUYA",
    "NEW YORK TRIBECA",
    "GLOBAL ROSTER"
  ],

  // Social Media
  socialMedia: [
    { name: "INSTAGRAM", url: "https://instagram.com" },
    { name: "LINKEDIN", url: "https://linkedin.com" },
    { name: "X (TWITTER)", url: "https://twitter.com" },
    { name: "YOUTUBE", url: "https://youtube.com" }
  ],

  // Footer Information
  footerTagline: "ATHLETIC PERFORMANCE LEGACY",
  copyright: "2026 ELEGANCE CLUB",
  taglineFooter: "ARCHITECTURAL ATHLETICS",
  privacyNote: "100% PRIVACY GUARANTEED • NO SPAM",

  // Form Programs
  programs: [
    "Men's Gym Membership",
    "Functional Training Program",
    "1-on-1 Coaching & Rehab",
    "Recovery & Wellness Services"
  ],

  facilities: [
    {
      id: "muscle-zone",
      title: "Muscle Zone",
      description: "Professional strength training equipment for building muscle and power. Expert guidance available.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80",
      badge: "STRENGTH"
    },
    {
      id: "aerobics-area",
      title: "Aerobics Area",
      description: "Modern cardio equipment for cardiovascular training and conditioning.",
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1000&q=80",
      badge: "CARDIO"
    },
    {
      id: "personal-training",
      title: "Personal Training",
      description: "Certified trainers provide one-on-one coaching for personalized fitness programs.",
      image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1000&q=80",
      badge: "COACHING"
    },
    {
      id: "nutrition",
      title: "Nutrition Guidance",
      description: "Professional nutrition support to optimize your fitness results.",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1000&q=80",
      badge: "NUTRITION"
    },
    {
      id: "sauna",
      title: "Sauna Facilities",
      description: "Premium sauna for post-workout recovery and relaxation.",
      image: "https://images.unsplash.com/photo-1600881333141-d282851a4e54?auto=format&fit=crop&w=1000&q=80",
      badge: "RECOVERY"
    }
  ] as ProgramItem[],

  trainers: [
    {
      id: "trainer-1",
      name: "Ahmed Al-Mansoori",
      specialty: "Strength & Power Training",
      experience: "8+ Years",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "trainer-2",
      name: "Mohammad Al-Rashid",
      specialty: "Muscle Building & Hypertrophy",
      experience: "10+ Years",
      image: "https://images.unsplash.com/photo-1552072092-74c88901b8b3?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "trainer-3",
      name: "Khalid Al-Khater",
      specialty: "Cardio & Fat Loss",
      experience: "6+ Years",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "trainer-4",
      name: "Samir Al-Dosari",
      specialty: "Nutrition & Body Transformation",
      experience: "9+ Years",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80"
    }
  ] as TrainerItem[],

  plans: [
    {
      id: "plan-1-month",
      duration: "1 Month",
      price: 15,
      currency: "KD",
      features: [
        "Full access to Muscle Zone",
        "Full access to Aerobics Area",
        "Sauna facility access",
        "Professional environment",
        "Member benefits"
      ]
    },
    {
      id: "plan-3-months",
      duration: "3 Months",
      price: 35,
      currency: "KD",
      features: [
        "Full access to Muscle Zone",
        "Full access to Aerobics Area",
        "Sauna facility access",
        "Professional environment",
        "Member benefits",
        "10 KD savings"
      ],
      popular: true
    }
  ] as PlanItem[]
};
