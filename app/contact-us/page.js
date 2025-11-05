import ContactUs from "@/components/mvpblocks/contact-us-2";
import PageHeader from "@/components/common/PageHedar";
import React from "react";
export const metadata = {
  title: "Contact Us | Luxury Chaffure",
  description: "A Premium Chaffure Car Service in Melbourne",
};
const page = () => {
  return (
    <div className="bg-slate-950">
      <PageHeader
        pageName="Contact Us"
        subheading="We're Here to Help — Get in Touch"
      />
      <ContactUs />
    </div>
  );
};

export default page;
