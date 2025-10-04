import { getSingleService } from "@/server-action";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

const ServiceDetailsPage = async ({ params }) => {
  const details = await getSingleService(params.id);
  
  if (!details) {
      notFound(); // ❌ redirects to 404 page
    }

  return (
    <main>
        <section className="pt-28 justify-center flex flex-col items-center">
            <h2 className="text-4xl lg:text-6xl text-center mb-10">{details.name}</h2>
            <Image src={details.image} alt={details.name} width={800} height={500}/>
            <p className="mt-5 text-lg md:text-xl lg:text-2xl text-center text-ivory/60">
                {details.details}
            </p>
        </section>
    </main>
  );
};

export default ServiceDetailsPage;
