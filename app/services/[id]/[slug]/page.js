import { getServices, getSingleService } from "@/server-action";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
export async function generateStaticParams() {
  const services = await getServices();
  return services.map((service) => ({
    id: service.id.toString(),
    slug: service.name.replace(/\s+/g, "-").toLowerCase(),
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
  const details = await getSingleService(params.id);

  if (!details) {
    notFound();
  }

  const serviceDescriptionMarkup = { __html: details.details };
  return (
    <main>
      <section className="pt-28 justify-center flex flex-col items-center lg:px-20 md:px-10 px-5">
        <h2 className="text-4xl lg:text-6xl text-center mb-10">
          {details.name}
        </h2>
        <Image
          src={details.image}
          alt={details.name}
          width={600}
          height={500}
        />

        <div
          className="mt-5 prose prose-sm max-w-none article-content"
          dangerouslySetInnerHTML={serviceDescriptionMarkup}
        />
        <div className="w-full my-4">
          <Link
            href="/booking"
            className="animate-pulse w-full text-center block bg-highlight text-ivory hover:bg-copper hover:animate-none font-bold text-lg tracking-wider px-10 py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            BOOK A SERVICE
          </Link>
        </div>
      </section>
    </main>
  );
};

export default ServiceDetailsPage;
