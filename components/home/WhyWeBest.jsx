"use client";
import {
  Award,
  Clock,
  UserCheck,
  ShieldCheck,
  Car,
  Headphones,
} from "lucide-react";
import Image from "next/image";
import TextGenerateEffect from "../ui/typewriter";

const WhyWeBest = () => {
  const features = [
    {
      icon: <Award className="h-8 w-8 text-[#D4AF37]" />,
      title: "Award-Winning Service",
      description:
        "5-star rated with 2000+ reviews. Melbourne’s best for 5 years running.",
    },
    {
      icon: <Clock className="h-8 w-8 text-[#D4AF37]" />,
      title: "100% On-Time",
      description: "Industry-leading punctuality. We arrive 10 minutes early.",
    },
    {
      icon: <UserCheck className="h-8 w-8 text-[#D4AF37]" />,
      title: "Elite Chauffeurs",
      description: "200+ hours training. Only top 5% of applicants selected.",
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-[#D4AF37]" />,
      title: "Perfect Safety Record",
      description: "Zero accidents in 10 years. Weekly servicing standard.",
    },
    {
      icon: <Car className="h-8 w-8 text-[#D4AF37]" />,
      title: "Newest Fleet",
      description:
        "100% luxury vehicles and world class brands. Mercedes, BMW, Audi, Lexus.",
    },
    {
      icon: <Headphones className="h-8 w-8 text-[#D4AF37]" />,
      title: "24/7 Support",
      description: "Round-the-clock assistance. Flight monitoring included.",
    },
  ];

  return (
    <>
      <section className="relative w-full bg-[#1F1F1F] text-white py-16 sm:py-24 overflow-hidden">
        {/* Background Gradient Blurs */}
        <div className="absolute top-[-10rem] left-[-10rem] w-96 h-96 bg-[#D4AF37]/10 rounded-full filter blur-3xl opacity-40 animate-[blob-animation_8s_infinite]"></div>
        <div className="absolute bottom-[-5rem] right-[-5rem] w-96 h-96 bg-[#B0B0B0]/10 rounded-full filter blur-3xl opacity-30 animate-[blob-animation_12s_infinite_ease-in-out]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 lg:gap-24 gap-12 items-center">
            {/* Left Column: Text & Car Image */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <TextGenerateEffect
                words={"Why We Are The Best ?"}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-highlight to-bsilver bg-clip-text text-transparent"
              />
              <p className="text-[#B0B0B0] text-lg max-w-xl mb-8 mt-5">
                Trusted by thousands of clients, we&apos;ve set the standard for
                luxury chauffeur services in Melbourne. Our perfect safety
                record, elite chauffeurs, and newest luxury fleet deliver an
                unmatched experience. Choose excellence for your next journey.
              </p>
              <div className="mt-4 w-full">
                <Image
                  src="/assets/feature/car.png"
                  alt="Luxury Chauffeur Car"
                  className="w-full !max-w-lg h-auto object-contain filter drop-shadow-lg"
                  width={500}
                  height={300}
                />
              </div>
            </div>

            {/* Right Column: Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/20"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="font-semibold text-xl mb-2 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-[#B0B0B0] text-sm">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyWeBest;
