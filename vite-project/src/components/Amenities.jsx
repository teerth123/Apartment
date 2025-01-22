import { useMemo } from 'react';
import { Flower2, Dumbbell, Users, HeartPulse as Yoga, FishIcon as Swim, Home, Puzzle, Building2, Leaf, GamepadIcon, Library, Baby } from "lucide-react";
import { MagicCard } from "./MagicCards";



export default function AmenitiesSection() {
  const amenities = useMemo(() => [
    { icon: Flower2, name: "Multipurpose Court" },
    { icon: Dumbbell, name: "Outdoor Fitness Zone" },
    { icon: Users, name: "Working Pods" },
    { icon: Yoga, name: "Yoga Lawn" },
    { icon: Baby, name: "Toddlers Play Area" },
    { icon: Home, name: "Swing Plaza" },
    { icon: Puzzle, name: "Squash Court" },
    { icon: Building2, name: "Multipurpose Hall" },
    { icon: Leaf, name: "Gym" },
    { icon: GamepadIcon, name: "Gaming Zone" },
    { icon: Library, name: "Library" },
    { icon: Swim, name: "Creche and Indoor Games" },
  ], []);
  const handleAmenityClick = (amenity) => {
    console.log(`Clicked on: ${amenity.name}`);
    // Add your desired functionality (e.g., navigate, show modal, etc.)
  };

  return (
    <section className="py-16 bg-gradient-to-b ">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Amenities</h2>
          <p className="mt-4 text-lg text-gray-600">Raynav in Piramal Revanta Mulund</p>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {amenities.map((amenity) => (
            <MagicCard
              key={amenity.name}
              className="p-6 flex flex-col items-center text-center shadow-lg bg-white group hover:shadow-2xl transition-shadow duration-300"
              gradientFrom="#74EBD5"
              gradientTo="#9FACE6"
            >
              {/* Icon */}
              <div className="cursor-pointer" onClick={() => handleAmenityClick(amenity)}>
                <amenity.icon className="h-12 w-12 mb-4 text-[#0B3B2D] group-hover:scale-110 transition-transform duration-300" />
              </div>

              {/* Amenity Name */}
              <p className="text-base font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                {amenity.name}
              </p>
            </MagicCard>
          ))}
        </div>
      </div>
    </section>
  );
}
