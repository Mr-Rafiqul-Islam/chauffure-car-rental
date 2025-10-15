import { BlogDetailsSection } from "@/components/blog-details/BlogDetailsSection";
import { getBlogDetails, getBlogs } from "@/server-action";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

export async function generateStaticParams() {
  const blogs = await getBlogs();
  return blogs.map((blog) => ({
    id: blog.id.toString(),
    slug: blog.title.replace(/\s+/g, "-").toLowerCase(),
  }));
}
export async function generateMetadata({ params }) {
  const title = params.slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  return {
    title,
  };
}
const BlogDetailsPage = async ({ params }) => {
  const { id } = params;
  const blogDetails = await getBlogDetails(id);
  if (!blogDetails) {
    notFound();
  }

  return (
    <main>
      <BlogDetailsSection blog={blogDetails} />
    </main>
  );
};

export default BlogDetailsPage;
