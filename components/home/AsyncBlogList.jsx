import React from "react";
import BlogGrid from "../common/BlogGrid"; // Reusing the same grid layout
import { getBlogs } from "@/server-action";
import { notFound } from "next/navigation";

const ITEMS_PER_PAGE = 6;

export default async function AsyncBlogList({ currentPage }) {
  // 1. Fetch
  const allBlogs = (await getBlogs()).sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

  // 2. Slice
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentBlogData = allBlogs.slice(startIndex, endIndex);

  // 3. Render using the Shared Grid
  if (currentBlogData.length === 0 && currentPage > 1) notFound();

  return <BlogGrid data={currentBlogData} />;
}