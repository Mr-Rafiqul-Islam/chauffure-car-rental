import GlowingCard from "@/components/GolwingCard";
import Banner from "@/components/home/Banner";
import BlogSection from "@/components/home/BlogSection";
import FleetShowcase from "@/components/home/FleetShowcase";
import PopularRoutesSection from "@/components/home/PopularRoutesSection";
import ServiceSection from "@/components/home/ServiceSection";
import TestimonialsCarousel from "@/components/home/TestimonialsCarousel";
import WhyWeBest from "@/components/home/WhyWeBest";
import FeatureSteps from "@/components/mvpblocks/feature-2";

export default function Home() {
  return (
    <>
      <Banner />  
      <ServiceSection/>
      <FeatureSteps />
      <FleetShowcase/>
      <TestimonialsCarousel/>
      <PopularRoutesSection/>
      <BlogSection/>
      <WhyWeBest/>
    </>
  );
}
