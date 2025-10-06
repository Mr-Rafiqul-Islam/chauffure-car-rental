import Banner from "@/components/home/Banner";
import BlogSection from "@/components/home/BlogSection";
import FleetShowcase from "@/components/home/FleetShowcase";
import PopularRoutesSection from "@/components/home/PopularRoutesSection";
import ServiceSection from "@/components/home/ServiceSection";
import TestimonialsCarousel from "@/components/home/TestimonialsCarousel";
import WhyWeBest from "@/components/home/WhyWeBest";
import FeatureSteps from "@/components/mvpblocks/feature-2";
import { getBlogs, getFleets, getServices } from "@/server-action";

export default async function Home() {
  const services  = await getServices();
  const fleets = await getFleets();
  const blogs = await getBlogs();
  return (
    <>
      <Banner />
      <ServiceSection servicesData={services}/>
      <FeatureSteps />
      <FleetShowcase fleetData={fleets}/>
      <TestimonialsCarousel />
      <PopularRoutesSection />
      <BlogSection blogData={blogs}/>
      <WhyWeBest />
    </>
  );
}
