import React from 'react';
import BlogCard from '../common/BlogCard';
import SectionTitle from '../common/SectionTitle';
import AnimatedBtn1 from '../mvpblocks/animatedbtn';
import Link from 'next/link';

const blogData = [
  {
    image: '/assets/services/Wedding Chauffeurs.png',
    title: "Your Complete Guide to Chauffeured Vineyard Tours",
    description: "Explore the best-kept secrets of the Yarra Valley in comfort and style—no driving, no stress. Here's how to plan the ideal wine day out.",
    link: '/blog/vineyard-tours-guide',
  },
  {
    image: '/assets/services/Airport Transfers.png',
    title: '5 Essential Tips for a Smooth Airport Transfer',
    description: 'Melbourne Airport doesn’t have to be overwhelming. Use these practical tips to enjoy a seamless, timely, and comfortable transfer experience.',
    link: '/blog/stress-free-airport-transfers',
  },
  {
    image: '/assets/services/Corporate Transfers.jpeg',
    title: 'How Chauffeur Services Enhance Your Corporate Image',
    description: 'In business, presentation is everything. Discover how professional chauffeur transport can elevate your brand and leave a lasting impression.',
    link: '/blog/elevate-corporate-image',
  },
];



// --- The Main Blog Section Component ---
export default function BlogSection() {
  return (
    <section className="bg-black text-zinc-300 py-16 sm:py-24">
      <div className="container mx-auto px-4">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <SectionTitle title="From Our Blogs" />
          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Stay updated with the latest in luxury travel, get tips for your journey, and discover hidden gems with our expert insights.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogData.map((post) => (
            <BlogCard key={post.title} post={post} />
          ))}
        </div>
        <div className=' mt-10'>

          <Link href="/blogs" className="">
            <AnimatedBtn1>Explore More</AnimatedBtn1>
          </Link>
        </div>
      </div>
    </section>
  );
}
