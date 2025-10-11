"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { useState } from "react";
import SigninModal from "../common/SigninModal";
import { useAuth } from "@/contexts/AuthContext";

export default function FooterGlow() {
  const [isSigninOpen, setIsSigninOpen] = useState(false);
  const { logout, isAuthenticated } = useAuth();
  return (
    <footer className="relative z-10 mt-8 w-full overflow-hidden pt-16 pb-8">
      <style jsx global>{`
        .glass {
          display: flex
          backdrop-filter: blur(2px) !important;
          background: radial-gradient(circle, #ffffff1a 0%, #1e00001a 60%, #2a0e0e 100%) !important;
          border: 1px solid #ffffff0d !important;
          border-radius: 16px !important;
          justify-content: center !important;
          align-items: center !important;
        }
        .glass:where(.dark, .dark *) {
          display: flex
          backdrop-filter: blur(2px) !important;
          background: radial-gradient(circle, #ffffff1a 0%, #1e00001a 60%, #2a0e0e 100%) !important;
          border: 1px solid #ffffff0d !important;
          border-radius: 16px !important;
          justify-content: center !important;
          align-items: center !important;
        }
      `}</style>
      <div className="pointer-events-none absolute top-0 left-1/2 z-0 h-full w-full -translate-x-1/2 select-none">
        <div className="absolute -top-32 left-1/4 h-72 w-72 rounded-full bg-rose-600/20 blur-3xl"></div>
        <div className="absolute right-1/4 -bottom-24 h-80 w-80 rounded-full bg-rose-600/20 blur-3xl"></div>
      </div>
      <div className="glass relative mx-auto flex max-w-6xl flex-col items-center gap-8 rounded-2xl px-6 py-10 md:flex-row md:items-start md:justify-between md:gap-12">
        <div className="flex flex-col items-center md:items-start">
          <Link href="#" className="mb-4 flex items-center gap-2">
            <Image
              src="/logo_transparent.png"
              alt="logo"
              width={100}
              height={100}
            />
          </Link>
          <p className="text-foreground mb-6 max-w-sm text-center text-sm md:text-left">
            Ride in style with Luxury Chauffeur, Melbourne’s trusted choice for
            premium transport. Whether it’s an airport transfer, corporate trip,
            or special occasion, we provide reliable, elegant, and professional
            chauffeur services tailored to your needs.
          </p>
          <div className="mt-2 flex gap-3 text-rose-400">
            <Link
              href="#"
              aria-label="Twitter"
              className="hover:text-foreground transition"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.633 7.997c.013.176.013.353.013.53 0 5.387-4.099 11.605-11.604 11.605A11.561 11.561 0 010 18.29c.373.044.734.074 1.12.074a8.189 8.189 0 005.065-1.737 4.102 4.102 0 01-3.834-2.85c.25.04.5.065.765.065.37 0 .734-.049 1.08-.147A4.092 4.092 0 01.8 8.582v-.05a4.119 4.119 0 001.853.522A4.099 4.099 0 01.812 5.847c0-.02 0-.042.002-.062a11.653 11.653 0 008.457 4.287A4.62 4.62 0 0122 5.924a8.215 8.215 0 002.018-.559 4.108 4.108 0 01-1.803 2.268 8.233 8.233 0 002.368-.648 8.897 8.897 0 01-2.062 2.112z" />
              </svg>
            </Link>
            <Link
              href="#"
              aria-label="Facebook"
              className="hover:text-foreground transition"
            >
              <FaFacebook className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              aria-label="Instagram"
              className="hover:text-foreground transition"
            >
              <FaInstagram className="w-5 h-5" />
            </Link>
          </div>
        </div>
        <nav className="flex w-full flex-col gap-9 text-center md:w-auto md:flex-row md:justify-end md:text-left">
          <div>
            <div className="mb-3 text-xs font-semibold tracking-widest text-rose-400 uppercase">
              Quick Links
            </div>
            <ul className="space-y-2">
              <li>
                {isAuthenticated ? (
                  <button
                    onClick={logout}
                    className="text-foreground/70 hover:text-ivory transition-all duration-300"
                  >
                    Logout
                  </button>
                ) : (
                  // If not logged in, show Login button and include the modal
                  <>
                    <button
                      onClick={() => setIsSigninOpen(true)}
                      className="text-foreground/70 hover:text-ivory transition-all duration-300"
                    >
                      Login
                    </button>
                    <SigninModal
                      open={isSigninOpen}
                      onOpenChange={setIsSigninOpen}
                    />
                  </>
                )}
              </li>
              <li>
                <Link
                  href="/our-fleets"
                  className="text-foreground/70 hover:text-ivory transition-all duration-300"
                >
                  Our Fleets
                </Link>
              </li>
              <li>
                <Link
                  href="/booking"
                  className="text-foreground/70 hover:text-ivory transition-all duration-300"
                >
                  Booking
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-foreground/70 hover:text-ivory transition-all duration-300"
                >
                  Gallery
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="mb-3 text-xs font-semibold tracking-widest text-rose-400 uppercase">
              Pages
            </div>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about-us"
                  className="text-foreground/70 hover:text-ivory transition-all duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="text-foreground/70 hover:text-ivory transition-all duration-300"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-foreground/70 hover:text-ivory transition-all duration-300"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs"
                  className="text-foreground/70 hover:text-ivory transition-all duration-300"
                >
                  Blogs
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="mb-3 text-xs font-semibold tracking-widest text-rose-400 uppercase">
              Others
            </div>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-foreground/70 hover:text-ivory transition-all duration-300"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-and-conditions"
                  className="text-foreground/70 hover:text-ivory transition-all duration-300"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="text-foreground relative z-10 mt-10 text-center text-xs">
        <span>
          &copy; {new Date().getFullYear()} Luxury Chauffeur. All rights
          reserved.
        </span>
      </div>
    </footer>
  );
}
