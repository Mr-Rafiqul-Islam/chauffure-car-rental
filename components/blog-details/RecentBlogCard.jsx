import Image from "next/image";
import Link from "next/link";
import React from "react";

const RecentBlogCard = ({ post }) => {
    const slug = post.title.replace(/\s+/g, "-").toLowerCase();
  return (
    <Link href={`/blogs/${post.id}/${slug}`} className="inline-block">
      <div className="group flex items-center space-x-4">
        <div className="relative h-16 w-16 rounded-md overflow-hidden flex-shrink-0">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
        <h4 className="font-semibold text-ivory group-hover:text-highlight transition-colors">
          {post.title}
        </h4>
      </div>
    </Link>
  );
};

export default RecentBlogCard;
