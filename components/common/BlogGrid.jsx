import React from "react";
import BlogCard from "./BlogCard";

export default function BlogGrid({ data }) {
  if (!data || data.length === 0) {
    return (
      <div className="w-full py-24 text-center bg-charcoal rounded-lg border border-bsilver/10">
        <h3 className="text-2xl font-serif text-ivory">
          No blog posts found
        </h3>
        <p className="mt-3 text-bsilver max-w-md mx-auto">
          We are currently curating new luxury travel insights. 
          <span className="block mt-1 text-highlight">Check back soon.</span>
        </p>
      </div>
    );
  }

  // 2. Render Grid
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {data.map((post) => (
        <BlogCard key={post.id || post.title} post={post} />
      ))}
    </div>
  );
}