import FleetCard from "../FleetCard";
import Link from "next/link";
import {
  Users,
  Briefcase,
  ArrowRight,
  MapPin,
  Plane,
  Wine,
} from "lucide-react";
import TextGenerateEffect from "../ui/typewriter";
const fleetData = [
  {
    name: "Luxury Sedan",
    type: "Mercedes-Benz V-Class",
    passengers: 3,
    luggage: 2,
    price: 299,
    imageUrl: "/assets/fleets/Luxury Sedan.png", // Replace with your actual image path
    isPopular: true,
    description:
      "Perfect for CBD and airport transfers, combining comfort and class.",
    tags: [
      { name: "City Travel", icon: <MapPin className="mr-1.5 h-3 w-3" /> },
      { name: "Airport Transfers", icon: <Plane className="mr-1.5 h-3 w-3" /> },
      {
        name: "Business Districts",
        icon: <Briefcase className="mr-1.5 h-3 w-3" />,
      },
    ],
    link: "/our-fleets/luxury-sedan",
  },
  {
    name: "Luxury SUV",
    type: "Audi Q7 or Similar",
    passengers: 4,
    luggage: 4,
    price: 249,
    imageUrl: "/assets/fleets/luxary suv.png", // Replace with your actual image path
    isPopular: true,
    description:
      "Ideal for eastern suburbs and Yarra Valley trips, offering space and style.",
    tags: [
      { name: "Yarra Valley", icon: <Wine className="mr-1.5 h-3 w-3" /> },
      { name: "Suburban Travel", icon: <MapPin className="mr-1.5 h-3 w-3" /> },
      { name: "Comfortable", icon: <Users className="mr-1.5 h-3 w-3" /> },
    ],
    link: "/our-fleets/luxury-suv",
  },
  {
    name: "Luxury People Mover",
    type: "Mercedes-Benz V-Class",
    passengers: 6,
    luggage: 6,
    price: 329,
    imageUrl: "/assets/fleets/Luxury People Mover.jpg", // Replace with your actual image path
    isPopular: true,
    description:
      "Premium Vehicles designed for large groups and family trips in ultimate comfort.",
    tags: [
      { name: "Group Tours", icon: <Wine className="mr-1.5 h-3 w-3" /> },
      { name: "Special Events", icon: <MapPin className="mr-1.5 h-3 w-3" /> },
      { name: "Family Friendly", icon: <Users className="mr-1.5 h-3 w-3" /> },
    ],
    link: "/our-fleets/luxury-suv",
  },
  // Add more vehicles here...
];

export default function FleetShowcase({ from }) {
  return (
    <section className="bg-charcoal py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-16">
          <TextGenerateEffect
            words={"Luxury Chauffeur Fleets"}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-highlight to-bsilver bg-clip-text text-transparent"
          />
          {!from && (
            <Link
              href="/our-fleets"
              className="text-sm font-semibold text-copper hover:text-copper transition-colors flex items-center"
            >
              More Fleet <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          )}
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {fleetData.map((vehicle) => (
            <FleetCard key={vehicle.name} vehicle={vehicle} />
          ))}
        </div>
      </div>
    </section>
  );
}
