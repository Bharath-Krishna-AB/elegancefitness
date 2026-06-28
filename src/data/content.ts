export interface ProgramItem {
  id: string;
  title: string;
  description: string;
  image: string;
  badge: string;
}

export const COMPANY_DATA = {
  name: "ELEGANCE FITNESS CLUB",
  established: "2019",
  tagline: "Life Body Change",
  subTagline: "Transform To Elegance - Professional Men's Fitness Gym",
  about: "Welcome to Elegance Fitness Club, a professional men's fitness gym established in 2019. Located in Jleeb Al Shuwaikh, we provide state-of-the-art equipment, certified trainers, and a dedicated fitness environment for serious training.",

  programs: [
    {
      id: "muscle-zone",
      title: "Muscle Zone",
      description: "Full strength training equipment. Build muscle and power with professional-grade equipment and certified trainer guidance.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80",
      badge: "STRENGTH"
    },
    {
      id: "aerobics-area",
      title: "Aerobics Area",
      description: "Cardio and conditioning. Improve cardiovascular health and endurance with modern aerobic equipment.",
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1000&q=80",
      badge: "CARDIO"
    },
    {
      id: "personal-training",
      title: "Personal Training",
      description: "Certified trainers provide personalized coaching to help you achieve your fitness goals with professional guidance.",
      image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1000&q=80",
      badge: "COACHING"
    },
    {
      id: "nutrition",
      title: "Nutrition Guidance",
      description: "Professional nutrition guidance to support your fitness goals and optimize your results.",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1000&q=80",
      badge: "NUTRITION"
    },
    {
      id: "sauna",
      title: "Sauna Facilities",
      description: "Premium sauna facilities for recovery and relaxation after your workouts.",
      image: "https://images.unsplash.com/photo-1600881333141-d282851a4e54?auto=format&fit=crop&w=1000&q=80",
      badge: "RECOVERY"
    }
  ] as ProgramItem[]
};
