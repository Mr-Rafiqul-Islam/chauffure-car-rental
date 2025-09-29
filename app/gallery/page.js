import MaintenancePage from "@/components/common/MaintenancePage";
import MasonryGallery from "@/components/mvpblocks/masonry-grid-1";
import TextGenerateEffect from "@/components/ui/typewriter";
import React from "react";

const page = () => {
  return (
    <div className="py-10 lg:pt-20 mt-16 mx-auto text-center">
      {/* <MaintenancePage pageName="Gallery" /> */}
      <TextGenerateEffect words="Luxury Chauffeur Gallery" className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-highlight to-bsilver bg-clip-text text-transparent" />
      <MasonryGallery/>
    </div>
  );
};

export default page;
