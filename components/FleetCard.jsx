import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Briefcase, Star, ArrowRight, Luggage } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const FleetCard = ({ vehicle }) => {
  return (
    <Card className="group relative w-full h-full overflow-hidden rounded-xl bg-white border-gray-200/80 shadow-sm transition-all duration-300 hover:shadow-[0_0_20px_2px_#D4AF37] hover:-translate-y-1">
      <Link
        href={`/our-fleets/${vehicle.slug}`}
        className="block cursor-pointer"
      >
        {vehicle.isPopular && (
          <Badge className="absolute top-4 right-4 z-10 bg-gray-900 text-white hover:bg-gray-700">
            <Star className="mr-1.5 h-3 w-3" />
            Popular
          </Badge>
        )}

        <div className="overflow-hidden bg-white p-6">
          <Image
            src={vehicle.image}
            alt={vehicle.name}
            width="400"
            height="225"
            className="w-full h-auto object-contain transform transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <CardContent className="p-6 pt-0 bg-white">
          <h3 className="text-xl font-bold text-gray-900">{vehicle.name}</h3>

          <div className="mt-2 flex items-center space-x-2 text-[10px] md:text-smfont-semibold text-orange-600">
            <div className="flex items-center">
              <Users className="mr-1.5 h-4 w-4" />
              UP TO {vehicle.total_seats} PASSENGERS
            </div>
            <div className="flex items-center">
              <Luggage className="mr-1.5 h-5 w-5" />
              {vehicle.checking_bag} CHECKED LUGGAGES
            </div>
            {vehicle.carry_bag && (
              <div className="flex items-center">
                <Briefcase className="mr-1.5 h-4 w-4" />
                {vehicle.carry_bag} CARRY LUGGAGES
              </div>
            )}
          </div>

          <p className="mt-3 text-sm text-gray-600">{vehicle.short_details}</p>

          <div className="mt-4 text-left">
            <p className="text-sm text-gray-500">
              Starts From{" "}
              <span className="text-2xl font-bold text-orange-500">
                AUD {vehicle.per_kilometer_fare_duration_wise}
              </span>{" "}
              / hour
            </p>
          </div>

          {/* <div className="mt-5 flex flex-wrap gap-2">
            {vehicle.tags.map((tag) => (
              <Badge
                key={tag.name}
                variant="outline"
                className="border-orange-200 bg-orange-50 text-orange-800"
              >
                {tag.icon}
                {tag.name}
              </Badge>
            ))}
          </div> */}
          <div className="subcategory-list mt-5">
            <span className="text-charcoal text-sm inline-block bg-[#f8f9fa] rounded-sm border border-[#e9ecef] py-[3px] px-2 mb-1 mr-2 subcategory-item">
              {vehicle.model}
            </span>
          </div>
        </CardContent>

        <div className="absolute bottom-6 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110">
          <ArrowRight className="h-5 w-5 text-orange-600" />
        </div>
      </Link>
    </Card>
  );
};

export default FleetCard;
