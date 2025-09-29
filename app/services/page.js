import ServiceSection from "@/components/home/ServiceSection";
import WhyWeBest from "@/components/home/WhyWeBest";
import FeatureSteps from "@/components/mvpblocks/feature-2";
import PageHeader from "@/components/ui/lamp";
import React from "react";

const page = () => {
  return (
    <div>
      <PageHeader
        pageName="Services"
        subheading="On Time. On Point. On Demand."
      />
      <ServiceSection />
      <WhyWeBest/>
      <FeatureSteps/>
    </div>
  );
};

export default page;
