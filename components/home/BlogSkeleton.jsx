import React from 'react';

export default function BlogSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 animate-pulse">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="flex flex-col bg-charcoal rounded-lg overflow-hidden h-[450px] border border-bsilver/5">
          {/* Image Placeholder */}
          <div className="h-48 bg-bsilver/10 w-full"></div>
          
          {/* Content Placeholder */}
          <div className="p-6 flex flex-col flex-1 gap-4">
            {/* Tag/Date */}
            <div className="h-3 w-24 bg-bsilver/20 rounded"></div>
            
            {/* Title */}
            <div className="h-6 w-full bg-bsilver/20 rounded"></div>
            <div className="h-6 w-2/3 bg-bsilver/20 rounded"></div>
            
            {/* Button */}
            <div className="mt-auto h-10 w-32 bg-bsilver/10 rounded"></div>
          </div>
        </div>
      ))}
    </div>
  );
}