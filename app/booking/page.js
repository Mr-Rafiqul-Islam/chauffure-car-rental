import { Spotlight } from "@/components/ui/spotlight";
import React from "react";
import Heading from "./Heading";
import BookingForm from "@/components/booking-form/BookingForm";
import { getFleets, getServices } from "@/server-action";
export const metadata = {
  title: "Booking | Luxury Chaffure",
  description: "A Premium Chaffure Car Service in Melbourne",
};
const page = async () => {
  const servicesData  = await getServices();
    const fleetData = await getFleets();
  return (
    <section className="relative w-full overflow-hidden pt-28">
      <Spotlight
        duration={5}
        gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(46, 65%, 52%, 0.18) 0%, hsla(46, 65%, 52%, 0.10) 50%, hsla(46, 65%, 52%, 0) 80%)"
        gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(46, 65%, 52%, 0.12) 0%, hsla(0, 0%, 69%, 0.08) 80%, transparent 100%)"
        gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(0, 0%, 69%, 0.08) 0%, hsla(46, 65%, 52%, 0.12) 80%, transparent 100%)"
      />
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <Heading />
        <div className="flex justify-center pt-4 pb-10">
          <BookingForm servicesData={servicesData} fleetData={fleetData} />
        </div>
      </div>
    </section>
  );
};

export default page;
