import { getFleetDetails } from "@/server-action";
import Image from "next/image";
import React from "react";

const FleetDetails = async ({ params }) => {
  const { id } = params;
  const details = await getFleetDetails(id);

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
