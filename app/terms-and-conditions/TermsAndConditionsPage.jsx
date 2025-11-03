// components/TermsAndConditionsPage.jsx
"use client";

import Link from "next/link";
import { ChevronRight, FileText } from "lucide-react";

// The main component for the Terms & Conditions Page
export function TermsAndConditionsPage() {
  const sections = [
    { href: "#general-terms", title: "General Terms of Carriage" },
    { href: "#cancellations", title: "Cancellations & Changes" },
    { href: "#waiting-time", title: "Waiting Time Policy" },
    { href: "#surcharges", title: "Surcharges & Holidays" },
    { href: "#child-restraints", title: "Child Restraints" },
    { href: "#liability", title: "Limits of Liability" },
    { href: "#privacy", title: "Privacy & Personal Information" },
  ];

  return (
    <div className="bg-charcoal text-ivory">
      <div className="container mx-auto px-4 py-16 md:py-24">
        {/* 1. Header Section */}
        <div className="text-center mb-16">
          <FileText className="h-16 w-16 text-highlight mx-auto mb-4" />
          <h1 className="text-4xl md:text-6xl font-bold text-highlight">
            Terms & Conditions
          </h1>
          <p className="mt-4 text-bsilver">
            Please read these terms carefully before booking. Last Updated:
            October 27, 2025
          </p>
        </div>

        {/* 2. Jump-to-Section Navigation */}
        <div className="max-w-4xl mx-auto bg-white/5 p-6 rounded-lg border border-copper/30 mb-16">
          <h2 className="text-xl font-semibold text-center text-ivory mb-4">
            Page Contents
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
            {sections.map((section) => (
              <li key={section.href}>
                <a
                  href={section.href}
                  className="flex items-center text-bsilver hover:text-highlight transition-colors"
                >
                  <ChevronRight className="h-5 w-5 mr-2 flex-shrink-0 text-highlight" />
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* 3. Main Content Sections */}
        <div className="max-w-4xl mx-auto space-y-12 prose-styles">
          <section id="general-terms">
            <h2 className="section-title">General Terms of Carriage</h2>
            <p>
              Luxury Chauffeur, including its partners and licensees, reserves
              the right to refuse service to any individual without providing a
              reason. By confirming a booking with us, you acknowledge that you
              have read, understood, and are legally bound by these Terms &
              Conditions. It is the customer&apos;s responsibility to inform us
              of any changes to their booking to avoid potential charges. All
              passengers must comply with local laws and regulations during
              their journey.
            </p>
            <p>
              To the fullest extent permitted by law, Luxury Chauffeur is not
              liable for any losses, including missed flights or connections,
              resulting from booking errors, delays, or changes. We are not
              responsible for injuries, loss or damage to property, or any
              indirect damages arising from our services.
            </p>
          </section>

          <section id="cancellations">
            <h2 className="section-title">Cancellations & Changes</h2>
            <p>
              To change or cancel a booking, please contact us via email or
              telephone. All modifications will be confirmed via email. Refunds
              will be processed to the original payment method. This policy does
              not override your rights under the Australian Consumer Law (ACL).
            </p>
            <div className="policy-box">
              <h3 className="policy-subtitle">
                Airport Transfer Cancellations
              </h3>
              <ul className="policy-list">
                <li>
                  <strong>Melbourne Airport/CBD Pickup:</strong> A minimum of 2
                  hours&apos; notice is required for a full refund.
                </li>
                <li>
                  <strong>Regional & All Other Airports:</strong> A minimum of
                  24 hours&apos; notice is required for a full refund.
                </li>
                <li>
                  A 100% cancellation fee applies for late cancellations or
                  no-shows.
                </li>
              </ul>
              <h3 className="policy-subtitle">Hourly & As-Directed Bookings</h3>
              <ul className="policy-list">
                <li>
                  <strong>Sedan/SUV:</strong> A 100% fee applies if canceled
                  within 12 hours. A 50% fee applies if canceled between 12-24
                  hours.
                </li>
                <li>
                  <strong>Minibus/Coach:</strong> A 100% fee applies if canceled
                  within 24 hours.
                </li>
              </ul>
              <h3 className="policy-subtitle">Wedding Services</h3>
              <ul className="policy-list">
                <li>
                  Cancellations for wedding bookings require a minimum of two
                  weeks&apos; notice. Cancellations made within this period will
                  incur a 100% cancellation fee due to vehicle allocation and
                  planning.
                </li>
              </ul>
            </div>
          </section>

          <section id="waiting-time">
            <h2 className="section-title">Waiting Time Policy</h2>
            <p>
              We provide a complimentary waiting period for all services. Once
              this period is exhausted, waiting time is charged in 10-minute
              increments at standard rates.
            </p>
            <div className="policy-box">
              <ul className="policy-list">
                <li>
                  <strong>Airport Pickups:</strong> For{" "}
                  <span className="text-white">Domestic Flights</span> after
                  landing is 45 minutes complimentary waiting time, and for{" "}
                  <span className="text-white">International Flights</span>{" "}
                  after landing is 60 minutes complimentary waiting time.
                </li>
                <li>
                  <strong>All Other Pickups:</strong> 15 minutes of
                  complimentary waiting time.
                </li>
              </ul>
            </div>
          </section>

          <section id="surcharges">
            <h2 className="section-title">Surcharges & Holidays</h2>
            <p>
              Bookings on public holidays, such as Christmas Day and New
              Year&apos;s Day, may be subject to a surcharge. An after-hours
              surcharge of 25% applies to all bookings that commence
              between 12:00 AM (Midnight) and 4:59 AM (04:59).
            </p>
          </section>

          <section id="child-restraints">
            <h2 className="section-title">Child Restraints</h2>
            <p>
              As a pre-booked service, we adhere to Australian laws requiring
              children under 8 to be secured in an appropriate child restraint
              (Baby Capsule, Seat, or Booster). While our chauffeurs are trained
              to install these restraints, the parent or guardian is ultimately
              responsible for inspecting the installation and ensuring their
              child&apos;s safety before the journey commences.
            </p>
          </section>

          <section id="liability">
            <h2 className="section-title">Limits of Liability & Insurance</h2>
            <p>
              Our maximum liability, in any case, is limited to a full refund
              for the specific trip in question. We are not liable for
              consequential losses, unforeseen circumstances, or other
              associated costs. Luxury Chauffeur will not be held responsible
              for indirect losses or expenses, including loss of profit, that
              may arise from a breach of this contract.
            </p>
          </section>

          <section id="privacy">
            <h2 className="section-title">Privacy & Personal Information</h2>
            <p>
              By using our website and services, you agree to our Terms &
              Conditions and our Privacy Policy. Your personal information is
              used solely to facilitate your booking and is not shared with
              third parties, except as required to fulfill the service. Credit
              card details are stored securely. For more detailed information,
              please review our full{" "}
              <Link
                href="/privacy-policy"
                className="text-highlight hover:underline"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </section>
        </div>
      </div>

      {/* Custom CSS for prose-like styling */}
      <style jsx>{`
        .section-title {
          font-size: 1.875rem; /* text-3xl */
          font-weight: 600; /* font-semibold */
          color: #d4af37; /* text-highlight */
          border-bottom: 1px solid #b87333; /* border-copper */
          padding-bottom: 0.75rem; /* pb-3 */
          margin-bottom: 1.5rem; /* mb-6 */
        }
        .prose-styles p {
          font-size: 1.125rem; /* text-lg */
          line-height: 1.75; /* leading-relaxed */
          color: rgba(255, 255, 240, 0.9); /* text-ivory/90 */
        }
        .prose-styles section {
          scroll-margin-top: 5rem; /* Offset for sticky nav */
        }
        .policy-box {
          background-color: rgba(255, 255, 255, 0.05); /* bg-white/5 */
          border: 1px solid rgba(184, 115, 51, 0.3); /* border-copper/30 */
          border-left: 4px solid #d4af37; /* border-l-4 border-highlight */
          padding: 1.5rem; /* p-6 */
          border-radius: 0.5rem; /* rounded-lg */
          margin-top: 1.5rem; /* mt-6 */
        }
        .policy-subtitle {
          font-size: 1.25rem; /* text-xl */
          font-weight: 600; /* font-semibold */
          color: #fffff0; /* text-ivory */
          margin-top: 1rem;
          margin-bottom: 0.5rem;
        }
        .policy-list {
          list-style-type: disc;
          padding-left: 1.5rem; /* pl-6 */
          font-size: 1rem; /* text-base */
          color: rgba(176, 176, 176, 1); /* text-bsilver */
          space-y: 0.5rem;
        }
      `}</style>
    </div>
  );
}
