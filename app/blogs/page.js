import BlogSection from "@/components/home/BlogSection";
import PageHeader from "@/components/ui/lamp";
import { getBlogs } from "@/server-action";
import React from "react";
export const metadata = {
  title: "Blogs | Luxury Chaffure",
  description: "A Premium Chaffure Car Service in Melbourne",
};
const page = async () => {
  const blogs = await getBlogs();
  return (
    <div>
      <PageHeader
        pageName="Blogs"
        subheading="Insights, Tips & Stories from the Road"
      />
      <BlogSection from="blogs" blogData={blogs}/>
    </div>
  );
};

export default page;
