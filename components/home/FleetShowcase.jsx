import FleetCard from "../FleetCard";
import Link from "next/link";
import {
  ArrowRight,
} from "lucide-react";
import TextGenerateEffect from "../ui/typewriter";


export default function FleetShowcase({ from , fleetData}) {
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

        <div className={`grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 ${!from ? "xl:grid-cols-3" : "xl:grid-cols-4"}`}>
          {!from ? fleetData.slice(0, 3).map((vehicle) => (
            <FleetCard key={vehicle.name} vehicle={vehicle} />
          )): fleetData.map((vehicle) => (
            <FleetCard key={vehicle.name} vehicle={vehicle} />
          ))}
        </div>
      </div>
    </section>
  );
}
