// components/ServiceDetailsPage.jsx

import Image from "next/image";
import Link from "next/link";
import { FaqAccordion } from "../common/FaqAccordion";
const faqData = [
  {
    id: "item-1",
    question: "What type of traveler is the premium sedan service ideal for?",
    answer:
      "This service is perfectly suited for business professionals, distinguished guests, and any traveler who prioritizes exceptional comfort, discretion, and a first-class travel experience from start to finish.",
  },
  {
    id: "item-2",
    question: "What is the passenger capacity of a premium sedan?",
    answer:
      "Each of our premium sedans can comfortably accommodate up to three passengers, along with their corresponding luggage, ensuring a spacious and relaxing journey.",
  },
  {
    id: "item-3",
    question: "Is a meet and greet service included for airport arrivals?",
    answer:
      "Yes, a complimentary meet and greet service is standard for all airport pickups. Your personal chauffeur will await your arrival inside the terminal with a personalized welcome sign to ensure a seamless and stress-free pickup.",
  },
  {
    id: "item-4",
    question: "Can I book this service for occasions other than airport transfers?",
    answer:
      "Certainly. While perfect for airport travel, our premium sedans are also an elegant choice for weddings, corporate functions, anniversaries, or any special event that calls for sophisticated and reliable transportation.",
  },
];

export function ServiceDetailsSection({ service }) {
  
  const serviceDescriptionMarkup = { __html: service.details };

  return (
    <div className="bg-charcoal text-ivory">
      {/* 1. Hero Image Banner Section */}
      <div className="relative h-80 md:h-96 w-full">
        <Image
          src={service.image}
          alt={service.name}
          fill
          className="brightness-50 object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent"></div>
        <div className="relative h-full flex flex-col justify-end items-center text-center p-8">
          <h1 className="text-4xl md:text-6xl font-bold text-highlight tracking-wider">
            {service.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl text-bsilver">
            {service.short_details}
          </p>
        </div>
      </div>

      {/* 2. Main Content Section (Details + FAQ) */}
      <div className="container mx-auto p-4 md:p-8 lg:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column: Service Details */}
          <div className="lg:col-span-2">
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
          </div>

          {/* Right Column: FAQ */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 ">
              <h3 className="text-2xl font-bold text-highlight mb-4 text-center">
                Frequently Asked Questions
              </h3>
              <FaqAccordion data={faqData}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
