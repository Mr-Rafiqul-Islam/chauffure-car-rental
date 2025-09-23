import React from 'react';
import BlogCard from '../common/BlogCard';
import SectionTitle from '../common/SectionTitle';
import AnimatedBtn1 from '../mvpblocks/animatedbtn';
import Link from 'next/link';

const blogData = [
  {
    image: '/assets/services/Wedding Chauffeurs.png',
    title: 'The Ultimate Guide to Chauffeured Vineyard Tours',
    description: 'Discover the hidden gems of the Yarra Valley without worrying about the drive. Here’s how to plan your perfect day trip.',
    link: '/blog/vineyard-tours-guide',
  },
  {
    image: '/assets/services/Airport Transfers.png',
    title: '5 Tips for a Stress-Free Airport Transfer',
    description: 'Navigating Melbourne Airport can be hectic. Follow these simple tips to ensure your journey is smooth, comfortable, and always on time.',
    link: '/blog/stress-free-airport-transfers',
  },
  {
    image: '/assets/services/Corporate Transfers.jpeg',
    title: 'Why a Chauffeur Service Elevates Your Corporate Image',
    description: 'First impressions matter. Learn how arriving in a chauffeured vehicle can significantly boost your professional presence.',
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

          <Link href="/blog" className="">
            <AnimatedBtn1>Explore More</AnimatedBtn1>
          </Link>
        </div>
      </div>
    </section>
  );
}
