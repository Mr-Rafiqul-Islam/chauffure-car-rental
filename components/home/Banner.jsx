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

export default function Banner() {
  return (
    <section className="w-full relative">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 text-center w-[1200px]">
            <TextRevealLetters />
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
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/assets/banner/main-banner.png"
            className="w-full h-auto object-contain"
            alt=""
            width={10000}
            height={500}
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
