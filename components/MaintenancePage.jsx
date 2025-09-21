"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function MaintenancePage({ pageName = "Site" }) {
  const handleReload = () => {
    if (typeof window !== "undefined") {
      window.location.reload();
    }
  };

  return (
    <div className="bg-charcoal min-h-screen flex flex-col justify-center items-center px-4 text-center">
      <Image
        src="/cogs-settings.svg"
        alt="Maintenance Logo"
        width={160}
        height={160}
        className="mb-8"
      />

      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ivory mb-4">
        {pageName} is under maintenance
      </h1>

      <p className="text-lg md:text-xl lg:text-2xl text-bsilver mb-8 max-w-2xl">
        We&apos;re working hard to improve the user experience. Stay tuned!
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <Link href="/">
          <Button
            className="bg-highlight hover:bg-[#c49b2f] text-charcoal font-bold"
          >
            Home
          </Button>
        </Link>

        <Button
          variant="outline"
          className="border-2 border-highlight text-ivory hover:bg-highlight hover:text-charcoal"
          onClick={handleReload}
        >
          Reload
        </Button>
      </div>
    </div>
  );
}
