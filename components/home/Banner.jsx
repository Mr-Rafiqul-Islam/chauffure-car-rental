"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { EffectFade, Autoplay } from "swiper/modules";
import Image from "next/image";
import TextRevealLetters from "../mvpblocks/text-reveal-1";
import BookingForm from "../booking-form/BookingForm";
import TextType from "../TextType";
import { Spotlight } from "../ui/spotlight";

export default function Banner({ servicesData, fleetData, bannerImages }) {
  return (
    <>
      <section className="w-full relative">
        {/* Dark overlay */}
        <div className="bg-[rgba(0,0,0,0.51)] z-10 absolute top-0 left-0 w-full h-full" />

        {/* Text content */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 xl:translate-x-0 xl:left-[12.5%] transform -translate-y-1/2 z-40 w-full xl:max-w-[515px] 2xl:max-w-[765px]  text-center xl:text-start">
          <TextRevealLetters />
          <TextType
            text={["Driven by Excellence", "Defined by Luxury"]}
            typingSpeed={100}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="_"
            className="text-[14px] sm:text-[18px] md:text-3xl xl:text-2xl 2xl:text-4xl font-bold text-white mt-2 sm:mt-4 md:mt-6 lg:mt-8 xl:mt-10"
          />
        </div>

        {/* Booking form (Desktop only) */}
        <div className="absolute hidden 2xl:block top-1/2 right-[12.5%] transform -translate-y-1/2 z-40">
          <BookingForm servicesData={servicesData} fleetData={fleetData} />
        </div>

        {/* ✅ Dynamic Swiper */}
        <Swiper
          modules={[Autoplay, EffectFade]}
          autoplay={{ delay: 5000 }}
          speed={1000}
          slidesPerView={1}
          effect="fade"
          className="custom-swiper"
        >
          {bannerImages.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="min-h-80 md:min-h-96 xl:min-h-screen w-full">
                <Image
                  src={src.image}
                  alt={`Banner Image ${index + 1}`}
                  className="object-cover"
                  fill
                  priority
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <section className="2xl:hidden relative w-full overflow-hidden">
        <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.2),transparent_60%)]" />
        <div className="bg-primary/5 absolute top-1/4 left-1/4 h-32 w-32 rounded-full blur-3xl" />
        <div className="bg-primary/10 absolute right-1/4 bottom-1/4 h-40 w-40 rounded-full blur-3xl" />
      </div>
        {/* Booking form (Mobile) */}
        <div className="flex justify-center py-10 px-4">
          <BookingForm servicesData={servicesData} fleetData={fleetData} />
        </div>
      </section>
    </>
  );
}
