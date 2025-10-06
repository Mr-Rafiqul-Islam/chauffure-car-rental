import { getFleetDetails, getFleets } from "@/server-action";
import Image from "next/image";
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
      <section className="justify-center flex flex-col items-center">
        <h1 className="text-4xl lg:text-6xl text-center mb-10">
          {details.name}
        </h1>
        <Image
          src={details.image}
          alt={details.name}
          width={800}
          height={500}
        />
        <div
          className="mt-5 prose prose-sm max-w-none text-center"
          dangerouslySetInnerHTML={{ __html: details.details }}
        />
      </section>
    </main>
  );
};

export default FleetDetails;
