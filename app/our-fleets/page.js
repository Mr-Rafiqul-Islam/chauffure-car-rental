import FleetShowcase from "@/components/home/FleetShowcase";
import PopularRoutesSection from "@/components/home/PopularRoutesSection";
import PageHeader from "@/components/ui/lamp";
import { getFleets } from "@/server-action";
import React from "react";

const page = async() => {
  const fleets= await getFleets();
  return (
    <div>
      <PageHeader
        pageName="Our Fleets"
        subheading="Explore Our Premium Chauffeur-Driven Fleet"
      />
      <FleetShowcase from="fleets" fleetData={fleets.fleets}/>
      <PopularRoutesSection/>
    </div>
  );
};

export default page;
