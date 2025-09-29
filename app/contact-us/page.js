import ContactUs from "@/components/mvpblocks/contact-us-2";
import PageHeader from "@/components/ui/lamp";
import React from "react";

const page = () => {
  return (
    <div className="bg-slate-950">
      <PageHeader
        pageName="Contact Us"
        subheading="We're Here to Help — Get in Touch"
      />
      <ContactUs/>
    </div>
  );
};

export default page;
