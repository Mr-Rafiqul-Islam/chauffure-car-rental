import BlogSection from "@/components/home/BlogSection";
import PageHeader from "@/components/ui/lamp";
import React from "react";

const page = () => {
  return (
    <div>
      <PageHeader
        pageName="Blogs"
        subheading="Insights, Tips & Stories from the Road"
      />
      <BlogSection from="blogs"/>
    </div>
  );
};

export default page;
