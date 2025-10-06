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
      <section className="pt-28 justify-center flex flex-col items-center">
        <h2 className="text-4xl lg:text-6xl text-center mb-10">
          {blogDetails.title}
        </h2>
        <Image
          src={blogDetails.image}
          alt={blogDetails.title}
          width={800}
          height={500}
        />

        <div
          className="mt-5 prose prose-sm max-w-none text-center"
          dangerouslySetInnerHTML={{ __html: blogDetails.details }}
        />
      </section>
    </main>
  );
};

export default BlogDetailsPage;
