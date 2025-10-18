import { ServiceDetailsSection } from "@/components/service-details/SeviceDetailsSection";
import { getServices, getSingleService } from "@/server-action";
import { notFound } from "next/navigation";
import React from "react";
export async function generateStaticParams() {
  const services = await getServices();
  return services.map((service) => ({
    slug: service.slug,
  }));
}
export async function generateMetadata({ params }) {
  const title = params.slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  return {
    title,
  };
}

const ServiceDetailsPage = async ({ params }) => {
  const details = await getSingleService(params.slug);

  if (!details) {
    notFound();
  }
  return (
    <main className="">
      <ServiceDetailsSection service={details} />
    </main>
  );
};

export default ServiceDetailsPage;
