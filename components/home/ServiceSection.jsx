"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import TextGenerateEffect from "../ui/typewriter";
import { notFound } from "next/navigation";

const ServiceSection = ({ servicesData }) => {
  if (!servicesData || servicesData.length === 0) {
    notFound(); 
  }
  return (
    <section className="lg:px-20 md:px-10 px-5 py-10">
      <div className="mx-auto flex justify-center object-center px-4 py-16 sm:py-24 lg:max-w-7xl">
        <div className="flex flex-col justify-center items-center">
          <TextGenerateEffect
            words={"Our Services"}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-highlight to-bsilver bg-clip-text text-transparent"
          />

          <div className="grid gap-5 pt-10 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
            {servicesData.map((service, index) => {
              const slug = service.name.replace(/\s+/g, "-").toLowerCase();
              return (
                <Link
                  href={`services/${service.id}/${slug}`}
                  key={index}
                  className="group flex justify-center [perspective:1000px]"
                >
                  <div className="relative lg:h-[400px] lg:w-96 md:h-[365px] md:w-60 sm:h-[365px] sm:w-60 h-[450px] w-[300px] rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    {/* Front Face */}
                    <div className="absolute inset-0 h-full w-full rounded-xl [backface-visibility:hidden]">
                      <Image
                        src={service.image}
                        alt={service.name}
                        className="object-cover cursor-pointer object-left h-full w-full rounded-xl"
                        width="350"
                        height="250"
                        priority={index === 0}
                      />
                    </div>

                    {/* Gradient Overlay */}
                    <div className="absolute rounded-xl inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-blue/70" />

                    {/* Front name */}
                    <div className="absolute inset-0 translate-y-[78%] px-8 text-center">
                      <p className="font-dmserif text-xl font-bold text-white">
                        {service.name}
                      </p>
                    </div>

                    {/* Back Face */}
                    <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-5 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                      <div className="flex min-h-full flex-col items-center justify-center">
                        <h2 className="text-xl font-bold mb-4">
                          {service.name}
                        </h2>
                        <p className="text-lg text-pretty text-center mb-4">
                          {service.short_details}
                        </p>
                        <div className="inline-flex">
                          <button className="bg-yellow-800 hover:bg-yellow-700 text-white font-bold py-1 px-4 w-auto rounded-full inline-flex items-center">
                            <span>Read More</span>
                            <svg
                              className="h-6 w-6 ml-2"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              {/* You can replace this with an actual icon */}
                              <path d="M12 4l1.41 1.41L7.83 11H20v2H7.83l5.58 5.59L12 20l-8-8z" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
