import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogCard = ({ post }) => {
  const slug = post?.title.replace(/\s+/g, "-").toLowerCase();
  const id = post?.id;
  return (
    <Link href={`/blogs/${id}/${slug}`} className="group block h-full">
      {/* Gradient border and glow container */}
      <div className="relative h-full rounded-xl p-[2px] bg-gradient-to-tr from-[#D4AF37] via-[#B0B0B0] to-[#D4AF37] transition-all duration-300 shadow-lg shadow-[#D4AF37]/10 hover:shadow-2xl hover:shadow-[#D4AF37]/30 hover:-translate-y-1">
        <div className="relative h-full w-full rounded-[11px] bg-zinc-900 overflow-hidden">
          <div className="h-full flex flex-col">
            <Image
              src={post.image}
              alt={post.title}
              width={500}
              height={192}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-gray-100 transition-colors duration-300 group-hover:text-[#D4AF37]">
                {post.title}
              </h3>
              <p className="mt-2 text-zinc-400 text-sm flex-grow">
                {post.short_details}
              </p>

              <div className="mt-6 flex items-center text-sm font-bold text-[#D4AF37] transition-colors duration-300 group-hover:text-white">
                <span>Read More</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
