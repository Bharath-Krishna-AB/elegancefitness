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
  name: "ELEGANCE FITNESS CLUB",
  established: "2019",
  tagline: "1 Life 1 Body 1 Change",
  subTagline: "Transform To Elegance",
  about: "Welcome to Elegance Fitness Club, a professional men's fitness gym established in 2019. Located in Jleeb Al Shuwaikh, we provide state-of-the-art equipment, certified trainers, sauna facilities, and a dedicated environment for serious training.",
  philosophy: "We believe that true transformation requires uncompromised dedication, expert coaching, and an elite training atmosphere.",
  facilitiesDesc: "Our facility is equipped with dedicated lifting platforms, turf conditioning tracks, and luxury sauna suites designed for athletic excellence.",

  hours: {
    morning: "5:00 AM - 2:00 PM",
    evening: "4:00 PM - 9:00 PM"
  },

  location: "Block-4, Street-9, Building-130, Jleeb Al Shuwaikh, Kuwait",
  phone: "+965 65170357 / +965 65106074",

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
