
import TestimonialsCarousel from "@/components/home/TestimonialsCarousel";
import AboutUs from "@/components/mvpblocks/about-us-1";
import PageHeader from "@/components/ui/lamp";
import React from "react";

const page = () => {
  return (
    <div>
      <PageHeader pageName="About Us" subheading="Melbourne’s Trusted Name in Chauffeur Services" />
      <AboutUs/>
      <TestimonialsCarousel/>
    </div>
  );
};

export default page;
