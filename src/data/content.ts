export interface ProgramItem {
  id: string;
  title: string;
  category: 'Men' | 'Ladies' | 'Kids' | 'General';
  description: string;
  image: string;
  badge: string;
}

export const COMPANY_DATA = {
  name: "ELEGANCE FITNESS CLUB",
  established: "2019",
  tagline: "Discover the elegance of fitness with us!",
  subTagline: "Where your fitness journey begins and a healthier lifestyle awaits.",
  about: "Welcome to Elegance Fitness Club, your premier destination for health, wellness, and fitness since our establishment in 2019. Located in the heart of the community, we are dedicated to providing an exceptional fitness experience that combines state-of-the-art facilities, personalized training, and a supportive environment to help you achieve your fitness goals.",
  philosophy: "At Elegance Fitness Club, we understand that fitness is not just about working out—it's about fostering a lifestyle of wellness, confidence, and community. Our team of certified trainers and health experts is committed to guiding you on your fitness journey, whether you're a seasoned athlete or just beginning.",
  facilitiesDesc: "Our modern facilities boast cutting-edge equipment, spacious workout areas, and relaxation zones, creating an inviting atmosphere for all members. We believe in promoting not only physical fitness but also mental and emotional well-being, encouraging our members to connect, engage, and thrive together.",
  
  vision: [
    {
      title: "Empower Individuals",
      desc: "To inspire our members to take control of their health and well-being, encouraging lifelong fitness habits and personal growth."
    },
    {
      title: "Promote Inclusivity",
      desc: "To create a welcoming environment where all individuals, regardless of their fitness level, feel valued, supported, and motivated."
    },
    {
      title: "Champion Innovation",
      desc: "To continuously integrate the latest fitness trends, technologies, and research into our offerings, ensuring exceptional service and results."
    },
    {
      title: "Build Community",
      desc: "To foster a sense of belonging and connection among members, encouraging camaraderie, support, and shared success."
    },
    {
      title: "Advocate Holistic Wellness",
      desc: "To promote not just physical fitness, but also mental and emotional well-being, advocating for a balanced lifestyle."
    }
  ],

  mission: [
    {
      title: "Personalized Fitness",
      desc: "Offering tailored fitness programs and services that cater to the unique needs and goals of each member, ensuring everyone has the opportunity to thrive."
    },
    {
      title: "Exceptional Facilities",
      desc: "Maintaining state-of-the-art equipment, innovative classes, and a clean, welcoming space that enhances the workout experience."
    },
    {
      title: "Expert Guidance",
      desc: "Employing certified trainers and health professionals who are passionate about helping members succeed through expert coaching, motivation, and support."
    },
    {
      title: "Community Engagement",
      desc: "Building a strong, inclusive community that fosters friendship, encouragement, and accountability among members through events, challenges, and social interactions."
    },
    {
      title: "Holistic Health",
      desc: "Promoting overall well-being by encouraging a balanced approach to fitness that includes physical activity, nutrition, mental health, and self-care."
    }
  ],

  expansionGoals: [
    {
      category: "Expansion & Infrastructure",
      items: ["Open New Dedicated Men's Gym", "Renovate Existing Ladies' Gym", "Launch New Ladies' Gym Branch"]
    },
    {
      category: "Team Growth & Expertise",
      items: ["Increase certified trainers", "Specialized strength & transformation coaches", "Rehab & physical therapy specialists", "Group class master trainers"]
    },
    {
      category: "Programs & Classes",
      items: ["Start Kids Dance Classes", "Introduce Kids Yoga Programs", "Functional training & HIIT", "Zumba & Rhythmic Strength"]
    },
    {
      category: "Brand & Community Value",
      items: ["Position as a family-focused fitness brand", "Corporate wellness partnerships", "Kids fitness & youth athletic packages"]
    }
  ],

  programs: [
    {
      id: "mens-strength",
      title: "Men's Hardcore Strength & Power",
      category: "Men",
      description: "Dedicated powerlifting platforms, Olympic heavy lifting zones, and advanced hypertrophy equipment designed for maximum muscle transformation.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80",
      badge: "NEW MEN'S GYM"
    },
    {
      id: "ladies-sanctuary",
      title: "Ladies' Elite Studio & Fitness",
      category: "Ladies",
      description: "A renovated, comfortable, and highly equipped sanctuary offering privacy, specialized glute/core equipment, and high-energy group workouts.",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1000&q=80",
      badge: "NEW BRANCH"
    },
    {
      id: "functional-hiit",
      title: "Functional Combat & HIIT",
      category: "General",
      description: "Cut fat and build iron stamina with cutting-edge functional rigs, battle ropes, turf tracks, and high-intensity interval conditioning.",
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1000&q=80",
      badge: "POPULAR"
    },
    {
      id: "zumba-yoga",
      title: "Zumba Fitness & Holistic Yoga",
      category: "General",
      description: "Connect body and mind. Experience high-octane rhythmic Zumba dance routines and restorative yoga for mental and emotional balance.",
      image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1000&q=80",
      badge: "HOLISTIC"
    },
    {
      id: "kids-dance-yoga",
      title: "Kids Fitness, Dance & Yoga",
      category: "Kids",
      description: "Empowering the next generation with fun agility courses, structured kids dance classes, and youth yoga for focus and healthy habits.",
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1000&q=80",
      badge: "NEW PROGRAM"
    },
    {
      id: "personal-transformation",
      title: "1-on-1 Transformation & Rehab",
      category: "General",
      description: "Certified health experts guiding your nutrition, biomechanics, and injury rehab to guarantee breakthrough physique results.",
      image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1000&q=80",
      badge: "EXPERT COACHING"
    }
  ] as ProgramItem[]
};
