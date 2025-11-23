import Link from 'next/link';
import React from 'react';

const Pagination = ({ currentPage, totalPages, baseUrl = '/blogs' }) => {
  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center items-center space-x-2 mt-12">
      {/* Previous Button */}
      {currentPage > 1 ? (
        <Link
          href={`${baseUrl}?page=${currentPage - 1}`}
          scroll={false}
          className="px-5 py-2 text-sm font-medium text-ivory bg-charcoal border border-bsilver/20 rounded hover:border-highlight hover:text-highlight transition duration-300"
        >
          Previous
        </Link>
      ) : (
        <span className="px-5 py-2 text-sm font-medium text-bsilver/40 bg-charcoal/50 border border-charcoal rounded cursor-not-allowed">
          Previous
        </span>
      )}

      {/* Page Numbers */}
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <Link
          key={page}
          href={`${baseUrl}?page=${page}`}
          scroll={false}
          className={`px-4 py-2 text-sm font-medium rounded transition duration-300 ${
            currentPage === page
              ? 'bg-highlight text-charcoal shadow-[0_0_10px_rgba(212,175,55,0.3)]' // Active: Gold bg, Dark text, Glow
              : 'text-bsilver hover:text-ivory hover:bg-charcoal'
          }`}
        >
          {page}
        </Link>
      ))}

      {/* Next Button */}
      {currentPage < totalPages ? (
        <Link
          href={`${baseUrl}?page=${currentPage + 1}`}
          scroll={false}
          className="px-5 py-2 text-sm font-medium text-ivory bg-charcoal border border-bsilver/20 rounded hover:border-highlight hover:text-highlight transition duration-300"
        >
          Next
        </Link>
      ) : (
        <span className="px-5 py-2 text-sm font-medium text-bsilver/40 bg-charcoal/50 border border-charcoal rounded cursor-not-allowed">
          Next
        </span>
      )}
    </div>
  );
};

export default Pagination;