// components/BlogDetailsPage.jsx

import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock } from "lucide-react";
import RecentPost from "./RecentPost";

// Helper to format the date nicely
const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

// Placeholder data for the "Recent Posts" sidebar
const recentPosts = [
  {
    id: 1,
    title: "5 Tips for a Stress-Free Airport Transfer",
    image: "/logo_transparent.png",
    href: "/blog/airport-transfer-tips",
  },
  {
    id: 2,
    title: "Why a Chauffeur Service Beats Ride-Sharing Apps",
    image: "/logo_transparent.png",
    href: "/blog/chauffeur-vs-rideshare",
  },
  {
    id: 4,
    title: "Making a Grand Entrance: Wedding Car Guide",
    image: "/logo_transparent.png",
    href: "/blog/wedding-car-guide",
  },
];

export function BlogDetailsSection({ blog }) {
  const blogContentHTML = { __html: blog.details };

  return (
    <div className="bg-charcoal text-ivory">
      {/* 1. Hero Section */}
      <div className="relative h-[50vh] w-full">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-transparent" />
        <div className="relative h-full flex flex-col justify-center items-center text-center p-8">
          <h1 className="text-4xl md:text-6xl font-bold text-highlight max-w-4xl">
            {blog.title}
          </h1>
          <div className="mt-4 flex items-center space-x-6 text-bsilver">
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5" />
              <span>{formatDate(blog.created_at)}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5" />
              <span>3 min read</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Content & Sidebar */}
      <div className="container mx-auto p-4 md:p-8 lg:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left Column: Blog Content */}
          <article className="lg:col-span-2">
            
           {/* dynamic content from the seek editor from backend */}
            <div className="prose prose-lg max-w-none text-ivory/90 article-content prose-headings:text-highlight" dangerouslySetInnerHTML={blogContentHTML} />

            {/* For a better visual, here is a hardcoded example of a styled article */}
            {/* <div className="space-y-6 text-ivory/90 text-lg leading-relaxed">
                <p className="text-xl italic text-bsilver">{blog.short_details}</p>
                <p>
                    A trip to a vineyard is more than just a tasting; it’s an experience. It’s about savoring award-winning wines, enjoying gourmet food, and soaking in breathtaking landscapes. However, the logistics of navigating unfamiliar country roads and appointing a designated driver can often detract from the day’s enjoyment. This is where a luxury chauffeur service transforms a great day out into an unforgettable one.
                </p>
                <h2 className="text-3xl font-semibold text-highlight !mt-10">Why Choose a Chauffeur for Your Wine Tour?</h2>
                <p>
                    Opting for a chauffeured tour allows you and your companions to fully immerse yourselves in the experience. There’s no need to worry about directions, parking, or, most importantly, enjoying the wine tastings to their fullest. Your professional chauffeur handles all the driving, ensuring you travel safely and comfortably between vineyards.
                </p>
                <blockquote className="border-l-4 border-copper pl-6 italic text-bsilver">
                    "The journey is as important as the destination. With a chauffeur, every moment is part of the luxury experience, not just the time spent at the vineyard."
                </blockquote>
                 <h2 className="text-3xl font-semibold text-highlight !mt-10">Planning Your Perfect Itinerary</h2>
                 <p>
                    Whether you have specific wineries in mind or prefer expert recommendations, we can help craft the perfect itinerary. From boutique family-run cellars to iconic estates, we tailor the day to your tastes. Your chauffeur can also make reservations for lunch at a renowned winery restaurant, ensuring your entire day is seamless and stress-free.
                </p>
            </div> */}
          </article>

          {/* Right Column: Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              <RecentPost/>
               <div className="bg-highlight p-6 rounded-lg text-center">
                <h3 className="text-2xl font-bold text-charcoal">Book Your Tour</h3>
                <p className="text-charcoal/80 my-2">
                  Whether you’re looking for a romantic getaway, a fun-filled day with friends, or a corporate event, our luxury chauffeur service will help you create unforgettable memories.
                </p>
                <Link href="/booking" className="inline-block mt-2 bg-charcoal text-ivory font-bold px-6 py-2 rounded-md hover:scale-105 transition-transform">
                  Inquire Now
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}