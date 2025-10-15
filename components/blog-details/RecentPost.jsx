
import React from "react";
import RecentBlogCard from "./RecentBlogCard";
import { getBlogs } from "@/server-action";

const RecentPost = async () => {
    const blogs = await getBlogs();
      const latestBlogs = blogs
        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
        .slice(0, 4);
      
  return (
    <div className="bg-white/5 p-6 rounded-lg border border-copper/30">
      <h3 className="text-2xl font-bold text-highlight mb-4 text-center">
        Recent Posts
      </h3>
      <div className="space-y-4">
        {latestBlogs.map((post) => (
          <RecentBlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default RecentPost;
