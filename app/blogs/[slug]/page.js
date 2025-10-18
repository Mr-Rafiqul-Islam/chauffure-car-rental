import { BlogDetailsSection } from "@/components/blog-details/BlogDetailsSection";
import { getBlogDetails, getBlogs } from "@/server-action";
import { notFound } from "next/navigation";
import React from "react";

export async function generateStaticParams() {
  const blogs = await getBlogs();
  return blogs.map((blog) => ({
    slug: blog.slug,
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
  const { slug } = params;
  const blogDetails = await getBlogDetails(slug);
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
