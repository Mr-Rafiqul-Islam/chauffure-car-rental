import React from "react";

const SectionTitle = ({ title }) => {
  return (
    <h2 className="from-foreground to-foreground/40 mb-4 bg-gradient-to-b bg-clip-text text-3xl font-bold text-transparent md:text-5xl lg:text-6xl">
      {title}
    </h2>
  );
};

export default SectionTitle;
