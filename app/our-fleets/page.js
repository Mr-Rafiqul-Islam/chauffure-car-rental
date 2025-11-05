import FleetShowcase from "@/components/home/FleetShowcase";
import PopularRoutesSection from "@/components/home/PopularRoutesSection";
import PageHeader from "@/components/common/PageHedar";
import { getFleets } from "@/server-action";
import React from "react";

export const metadata = {
  title: "Our Fleets | Luxury Chaffure",
  description: "A Premium Chaffure Car Service in Melbourne",
};
const page = async () => {
  const fleets = await getFleets();
  return (
    <div>
      <PageHeader
        pageName="Our Fleets"
        subheading="Explore Our Premium Chauffeur-Driven Fleet"
      />
      <FleetShowcase from="fleets" fleetData={fleets} />
      <PopularRoutesSection />
    </div>
  );
};

export default page;
