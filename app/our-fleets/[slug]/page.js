
import { FleetDetailsSection } from "@/components/fleet-details/FleetDetails";
import { getFleetDetails, getFleets } from "@/server-action";
import { notFound } from "next/navigation";
import React from "react";

export async function generateStaticParams() {
  const fleets = await getFleets();
  return fleets.map((fleet) => ({
    slug: fleet.slug,
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

const FleetDetails = async ({ params }) => {
  const { slug } = params;
  const details = await getFleetDetails(slug);
  if (!details) {
    notFound();
  }
  return (
    <main className="pt-28">
      <FleetDetailsSection fleet={details}/>
    </main>
  );
};

export default FleetDetails;
