import React from "react";
import SectionTitle from "../common/SectionTitle";
import AnimatedBtn1 from "../mvpblocks/animatedbtn";
import Link from "next/link";
import BlogGrid from "../common/BlogGrid"; // Import the new Grid

export default function BlogSection({ from, blogData, children }) {
  return (
    <section id="blog-feed" className="bg-black text-zinc-300 py-16 sm:py-24">
      <div className="container mx-auto px-4">
        {/* Common Title Section */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <SectionTitle title="From Our Blogs" />
          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Stay updated with the latest in luxury travel, get tips for your
            journey, and discover hidden gems with our expert insights.
          </p>
        </div>

        {/* CONTENT SWITCHER */}
        {children ? (
            // 1. Used by BLOGS PAGE (for Suspense/Pagination)
            children
        ) : (
            // 2. Used by HOME PAGE (Static Data)
            <BlogGrid data={blogData} />
        )}

        {/* Explore More Button (Only show if NOT on the main blogs page) */}
        {from !== "blogs" && (
          <div className="mt-10 text-center">
            <Link href="/blogs">
              <AnimatedBtn1>Explore More</AnimatedBtn1>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}