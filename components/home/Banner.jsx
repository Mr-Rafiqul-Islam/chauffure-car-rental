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

export default function Banner({ servicesData, fleetData }) {
  // ✅ Array of banner images
  const bannerImages = [
    "/assets/banner/0.jpg",
    "/assets/banner/1.jpg",
    "/assets/banner/2.jpg",
    "/assets/banner/3.jpg",
  ];

  return (
    <>
      <section className="w-full relative">
        {/* Dark overlay */}
        <div className="bg-[rgba(0,0,0,0.51)] z-10 absolute top-0 left-0 w-full h-full" />

        {/* Text content */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 xl:translate-x-0 xl:left-[12.5%] transform -translate-y-1/2 z-40 w-full xl:max-w-[500px] 2xl:max-w-[710px] text-center xl:text-start">
          <TextRevealLetters />
          <TextType
            text={["Driven by Excellence", "Defined by Luxury"]}
            typingSpeed={100}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="_"
            className="text-[14px] sm:text-[18px] md:text-3xl xl:text-2xl 2xl:text-4xl font-bold text-white mt-2 sm:mt-4 md:mt-6 lg:mt-8 xl:mt-10 2xl:mt-12"
          />
        </div>

        {/* Booking form (Desktop only) */}
        <div className="absolute hidden xl:block top-1/2 right-[12.5%] transform -translate-y-1/2 z-40">
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
                src={src}
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

      {/* Booking form (Mobile) */}
      <div className="xl:hidden flex justify-center py-10 px-4">
        <BookingForm servicesData={servicesData} fleetData={fleetData} />
      </div>
    </>
  );
}
