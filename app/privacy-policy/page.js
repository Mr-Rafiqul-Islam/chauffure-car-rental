import { ShieldCheck } from "lucide-react";
import Link from "next/link";
import React from "react";
export const metadata = {
  title: "Privacy Policy | Luxury Chaffure",
};
const page = () => {
  return (
    <div>
      <div className="container mx-auto px-4 py-16 md:py-24">
        {/* 1. Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-highlight">
            Privacy Policy
          </h1>
          <p className="mt-4 text-bsilver">
            Your privacy is our priority. Last Updated: October 27, 2025
          </p>
        </div>

        {/* 2. Main Content Section */}
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Our Commitment */}
          <section>
            <h2 className="text-2xl md:text-3xl font-semibold text-highlight border-b border-copper/30 pb-3 mb-6">
              Our Commitment to Your Privacy
            </h2>
            <p className="text-lg leading-relaxed text-ivory/90">
              Luxury Chauffeur (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is deeply committed to protecting your privacy. This policy outlines our practices concerning the collection, use, and protection of your personal information. We operate a luxury chauffeur service where repeat business is built on trust, and safeguarding your data is fundamental to that trust.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-2xl md:text-3xl font-semibold text-highlight border-b border-copper/30 pb-3 mb-6">
              Information We Collect
            </h2>
            <p className="text-lg leading-relaxed text-ivory/90 mb-8">
              To provide our premium chauffeur services and ensure a seamless
              booking experience, we collect the following types of personal
              information:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Full Name",
                "Email Address",
                "Contact Phone Numbers",
                "Complete Booking Details",
              ].map((item) => (
                <div
                  key={item}
                  className="bg-white/5 p-4 rounded-lg flex items-center border border-transparent hover:border-copper/50 transition-colors"
                >
                  <ShieldCheck className="h-6 w-6 text-highlight mr-4 flex-shrink-0" />
                  <span className="text-ivory">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* How We Use Your Information */}
          <section>
            <h2 className="text-2xl md:text-3xl font-semibold text-highlight border-b border-copper/30 pb-3 mb-6">
              How We Use Your Information
            </h2>
            <p className="text-lg leading-relaxed text-ivory/90">
              Your personal information is used exclusively for the following
              purposes:
            </p>
            <ul className="list-disc list-inside space-y-3 mt-6 text-lg text-ivory/90">
              <li>
                To process and manage your bookings for our luxury car services.
              </li>
              <li>
                To communicate with you regarding your bookings, inquiries, or
                to provide customer support.
              </li>
              <li>
                To simplify future bookings by securely retaining your profile.
              </li>
              <li>
                To occasionally inform you about special offers, promotions, or
                new services, from which you can opt-out at any time.
              </li>
            </ul>
          </section>

          {/* Data Sharing and Disclosure */}
          <section>
            <h2 className="text-2xl md:text-3xl font-semibold text-highlight border-b border-copper/30 pb-3 mb-6">
              Data Sharing and Disclosure
            </h2>
            <blockquote className="border-l-4 border-highlight bg-white/5 p-6 my-6">
              <p className="text-xl italic text-ivory">
                Your trust is paramount. We do not sell, rent, or trade your
                personal information to any third parties for marketing
                purposes.
              </p>
            </blockquote>
            <p className="text-lg leading-relaxed text-ivory/90">
              The only instance where we share necessary details is with the
              assigned chauffeur to fulfill the service you have booked. We will
              only disclose your information if required by law or as permitted
              under applicable privacy principles.
            </p>
          </section>

          {/* Data Security and Cookies */}
          <section>
            <h2 className="text-2xl md:text-3xl font-semibold text-highlight border-b border-copper/30 pb-3 mb-6">
              Data Security and Website Cookies
            </h2>
            <p className="text-lg leading-relaxed text-ivory/90 mb-4">
              We implement industry-standard security measures to protect your
              data, including secure data centers and strict internal access
              controls. Our website uses cookies to enhance your experience by
              remembering your preferences. We also use analytics cookies to
              understand site traffic, but this data is largely aggregated and
              does not personally identify you. You can adjust your browser
              settings to refuse cookies.
            </p>
          </section>

          {/* Your Rights and Choices */}
          <section>
            <h2 className="text-2xl md:text-3xl font-semibold text-highlight border-b border-copper/30 pb-3 mb-6">
              Your Rights and Choices
            </h2>
            <p className="text-lg leading-relaxed text-ivory/90">
              You have the right to access or request changes to the personal
              information we hold about you. If you wish to review, update, or
              delete your data, please get in touch with our Privacy Officer via
              our contact page.
            </p>
          </section>

          {/* Third-Party Links */}
          <section>
            <h2 className="text-2xl md:text-3xl font-semibold text-highlight border-b border-copper/30 pb-3 mb-6">
              Third-Party Links
            </h2>
            <p className="text-lg leading-relaxed text-ivory/90">
              Our website may contain links to external sites. We are not
              responsible for the privacy practices of these other sites and
              encourage you to review their own privacy policies.
            </p>
          </section>

          {/* Contact Us */}
          <section className="text-center border-t border-copper/30 pt-10">
            <p className="text-lg text-bsilver">
              If you have any questions about this Privacy Policy, please
            </p>
            <Link
              href="/contact"
              className="inline-block mt-4 bg-highlight text-charcoal font-bold px-8 py-3 rounded-md hover:bg-highlight/90 transition-colors"
            >
              Contact Us
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
};

export default page;
