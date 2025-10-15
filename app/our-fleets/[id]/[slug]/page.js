
import { FleetDetailsSection } from "@/components/fleet-details/FleetDetails";
import { getFleetDetails, getFleets } from "@/server-action";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

export async function generateStaticParams() {
  const fleets = await getFleets();
  return fleets.map((fleet) => ({
    id: fleet.id.toString(),
    slug: fleet.name.replace(/\s+/g, "-").toLowerCase(),
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
  const { id } = params;
  const details = await getFleetDetails(id);
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
