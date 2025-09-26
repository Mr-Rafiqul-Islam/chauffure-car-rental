"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { EffectFade, Autoplay } from "swiper/modules";
import Image from "next/image";
import TextRevealLetters from "../mvpblocks/text-reveal-1";
import BookingForm from "./BookingForm";
import GoogleMapsLoader from "../common/GoogleMapsLoader";

export default function Banner() {
  return (
    <>
      <GoogleMapsLoader>
        <section className="w-full relative">
          <div className="bg-[rgba(0,0,0,0.51)] z-10 absolute top-0 left-0 w-full h-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 xl:translate-x-0 xl:left-[12.5%] transform -translate-y-1/2 z-40 w-full xl:max-w-[500px] 2xl:max-w-[700px] text-center xl:text-start">
            <TextRevealLetters />
          </div>
          <div className="absolute hidden xl:block top-1/2 right-[12.5%] transform -translate-y-1/2 z-40">
            <BookingForm />
          </div>
          <Swiper
            modules={[Autoplay, EffectFade]}
            autoplay={{ delay: 5000 }}
            speed={1000}
            slidesPerView={1}
            effect="fade"
            className="custom-swiper"
          >
            <SwiperSlide>
              <Image
                src="/assets/banner/banner1.jpg"
                alt=""
                className="w-full h-auto object-contain"
                width={10000}
                height={500}
                priority
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/assets/banner/main-banner.png"
                className="w-full h-auto object-contain"
                alt=""
                width={10000}
                height={500}
                priority
              />
            </SwiperSlide>
          </Swiper>
        </section>
        <div className="xl:hidden flex justify-center py-10">
          <BookingForm />
        </div>
      </GoogleMapsLoader>
    </>
  );
}
