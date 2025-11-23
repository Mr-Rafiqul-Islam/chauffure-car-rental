import React, { Suspense } from "react";
import PageHeader from "@/components/common/PageHedar";
import BlogSection from "@/components/home/BlogSection"; // The shared wrapper
import AsyncBlogList from "@/components/home/AsyncBlogList"; // The data fetcher
import Pagination from "@/components/common/Pagination"; // The buttons
import { getBlogs } from "@/server-action";
import BlogSkeleton from "@/components/home/BlogSkeleton";

const ITEMS_PER_PAGE = 6;

const Page = async ({ searchParams }) => {
  const resolvedParams = await searchParams;
  const currentPage = Number(resolvedParams?.page) || 1;

  // Get total count for pagination buttons
  const allBlogs = await getBlogs(); 
  const totalPages = Math.ceil(allBlogs.length / ITEMS_PER_PAGE);

  return (
    <div>
      <PageHeader
        pageName="Blogs"
        subheading="Insights, Tips & Stories from the Road"
      />

      {/* REUSING BLOG SECTION AS A WRAPPER */}
      <BlogSection from="blogs">
        
        {/* The Loading Area */}
        <Suspense key={currentPage} fallback={<BlogSkeleton />}>
           <AsyncBlogList currentPage={currentPage} />
        </Suspense>

        {/* The Pagination Buttons */}
        <div className="mt-10">
          <Pagination 
            currentPage={currentPage} 
            totalPages={totalPages} 
          />
        </div>

      </BlogSection>
    </div>
  );
};

export default Page;