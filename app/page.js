import Banner from "@/components/home/Banner";
import BlogSection from "@/components/home/BlogSection";
import FleetShowcase from "@/components/home/FleetShowcase";
import PopularRoutesSection from "@/components/home/PopularRoutesSection";
import ServiceSection from "@/components/home/ServiceSection";
import TestimonialsCarousel from "@/components/home/TestimonialsCarousel";
import WhyWeBest from "@/components/home/WhyWeBest";
import FeatureSteps from "@/components/mvpblocks/feature-2";
import { getBlogs, getFleets, getServices, getSliders } from "@/server-action";

export default async function Home() {
  const bannerImages = await getSliders();
  const services = await getServices();
  const fleets = await getFleets();
  const blogs = await getBlogs();
  const latestBlogs = blogs
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
    .slice(0, 3);
  // for booking form
  const filteredFleet = fleets.filter(
    (item) => item.name !== "Premium Luxury Sedan"
  );
  return (
    <>
      <Banner
        servicesData={services}
        fleetData={filteredFleet}
        bannerImages={bannerImages}
      />
      <ServiceSection servicesData={services} />
      <FeatureSteps />
      <FleetShowcase fleetData={fleets} />
      <TestimonialsCarousel />
      <PopularRoutesSection />
      <BlogSection blogData={latestBlogs} />
      <WhyWeBest />
    </>
  );
}
