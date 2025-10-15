import React from "react";
import BlogCard from "../common/BlogCard";
import SectionTitle from "../common/SectionTitle";
import AnimatedBtn1 from "../mvpblocks/animatedbtn";
import Link from "next/link";
import { notFound } from "next/navigation";


export default function BlogSection({ from, blogData }) {
  if (!blogData || blogData.length === 0) {
    notFound(); 
  }
  return (
    <section className="bg-black text-zinc-300 py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <SectionTitle title="From Our Blogs" />
          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Stay updated with the latest in luxury travel, get tips for your
            journey, and discover hidden gems with our expert insights.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogData.map((post) => (
            <BlogCard key={post.title} post={post} />
          ))}
        </div>
        <div className="mt-10">
          {!from && (
            <Link href="/blogs" className="">
              <AnimatedBtn1>Explore More</AnimatedBtn1>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
