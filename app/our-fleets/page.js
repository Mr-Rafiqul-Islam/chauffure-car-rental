import FleetShowcase from "@/components/home/FleetShowcase";
import PopularRoutesSection from "@/components/home/PopularRoutesSection";
import PageHeader from "@/components/ui/lamp";
import React from "react";

const page = () => {
  return (
    <div>
      <PageHeader
        pageName="Our Fleets"
        subheading="Explore Our Premium Chauffeur-Driven Fleet"
      />
      <FleetShowcase from="fleets"/>
      <PopularRoutesSection/>
    </div>
  );
};

export default page;
