import TestimonialsCarousel from "@/components/home/TestimonialsCarousel";
import AboutUs from "@/components/mvpblocks/about-us-1";
import PageHeader from "@/components/common/PageHedar";
import React from "react";
export const metadata = {
  title: "About Us | Luxury Chaffure",
  description: "A Premium Chaffure Car Service in Melbourne",
};
const page = () => {
  return (
    <div>
      <PageHeader
        pageName="About Us"
        subheading="Melbourne’s Trusted Name in Chauffeur Services"
      />
      <AboutUs />
      <TestimonialsCarousel />
    </div>
  );
};

export default page;
