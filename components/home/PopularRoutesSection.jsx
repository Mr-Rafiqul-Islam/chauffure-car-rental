import React from "react";
import RouteDotCard from "../common/RouteDotCard";
import TextGenerateEffect from "../ui/typewriter";

const routesData = [
  {
    routeName: "Melbourne CBD to Melbourne Airport",
    price: 93,
    link: "/booking",
  },
  {
    routeName: "Southbank to Melbourne Airport",
    price: 95,
    link: "/booking",
  },
  {
    routeName: "Cruise Terminal to Melbourne Airport",
    price: 95,
    link: "/booking",
  },
  {
    routeName: "East Melbourne to Melbourne Airport",
    price: 94,
    link: "/booking",
  },
  {
    routeName: "Geelong to Melbourne Airport",
    price: 179,
    link: "/booking",
  },
  {
    routeName: "Mornington to Melbourne Airport",
    price: 208,
    link: "/booking"
  },
];

export default function PopularRoutesSection() {
  return (
    <section className="bg-black/60 text-zinc-300 py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mb-12 mx-auto">
          <TextGenerateEffect
            words={"Most Popular Chauffeur Routes"}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-highlight to-bsilver bg-clip-text text-transparent"
          />
          <p className="mt-6 text-lg leading-8 text-zinc-400 text-center">
            Luxury Chauffeur offers professional chauffeur services across
            Melbourne and Victoria, including airport transfers, corporate
            travel, scenic tours, and special events. Enjoy a smooth, stylish,
            and reliable ride tailored to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {routesData.map((route) => (
            <RouteDotCard key={route.routeName} route={route} />
          ))}
        </div>
      </div>
    </section>
  );
}
