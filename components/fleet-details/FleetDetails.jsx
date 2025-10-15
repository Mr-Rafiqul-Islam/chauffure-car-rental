// components/FleetDetails.jsx

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";
import { Users, Briefcase, Package } from "lucide-react";
import Link from "next/link";

// Helper function to safely parse and clean the HTML details
const parseDetails = (htmlString) => {
  if (typeof window === "undefined") {
    return [
      "Start or end your journey in comfort and style with our premium airport transfer service.",
      "Our professional chauffeurs track your flight in real time to adjust for any delays or early arrivals.",
    ];
  }
  const doc = new DOMParser().parseFromString(htmlString, "text/html");
  return Array.from(doc.querySelectorAll("h1, p"))
    .map((el) => el.textContent.trim())
    .filter((text) => text.length > 10);
};

export function FleetDetailsSection({ fleet }) {
  const detailsParagraphs = parseDetails(fleet.details);

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
        {/* Left Column: Image */}
        <div className="lg:col-span-2 lg:sticky lg:top-24 self-start">
          <div className="overflow-hidden rounded-lg border-2 border-copper">
            <Image
              src={fleet.image}
              alt={fleet.name}
              width={800}
              height={600}
              className="object-cover w-full h-auto"
              priority
            />
          </div>
        </div>

        {/* Right Column: Details */}
        <div className="lg:col-span-3">
          <h1 className="text-4xl md:text-5xl font-bold text-highlight">
            {fleet.name}
          </h1>
          <p className="mt-2 text-xl text-bsilver">{fleet.short_details}</p>
          <div className="mt-6">
            <h3 className="font-semibold text-ivory/90 mb-3">
              Models Include:
            </h3>
            <div className="flex flex-wrap gap-2">
              {fleet.model.split(",").map((modelName) => (
                <span
                  key={modelName.trim()}
                  className="bg-white/10 text-bsilver px-3 py-1 rounded-full text-sm border border-copper/30"
                >
                  {modelName.trim()}
                </span>
              ))}
            </div>
          </div>
          <div className="w-full my-4">
            <Link
              href="/booking"
              className="animate-pulse w-full text-center block bg-highlight text-ivory hover:bg-copper hover:animate-none font-bold text-lg tracking-wider px-10 py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              BOOK YOUR CHAFFURE
            </Link>
          </div>
          <Separator className="my-6 bg-copper" />

          {/* Specifications Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <Card className="bg-white/5 border-none">
              <CardHeader>
                <Users className="mx-auto h-10 w-10 text-highlight" />
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-ivory">
                  {fleet.total_seats}
                </p>
                <p className="text-sm text-bsilver">Passengers</p>
              </CardContent>
            </Card>
            <Card className="bg-white/5 border-none">
              <CardHeader>
                <Briefcase className="mx-auto h-10 w-10 text-highlight" />
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-ivory">
                  {fleet.carry_bag}
                </p>
                <p className="text-sm text-bsilver">Carry-on Bags</p>
              </CardContent>
            </Card>
            <Card className="bg-white/5 border-none">
              <CardHeader>
                <Package className="mx-auto h-10 w-10 text-highlight" />
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-ivory">
                  {fleet.checking_bag}
                </p>
                <p className="text-sm text-bsilver">Checking Bags</p>
              </CardContent>
            </Card>
          </div>

          <Separator className="my-6 bg-copper" />

          {/* Pricing Section */}
          <h2 className="text-2xl font-semibold text-highlight mb-4">
            Pricing
          </h2>
          <Card className="bg-white/5 border border-copper">
            <Table>
              <TableBody>
                <TableRow className="border-copper/30">
                  <TableCell className="font-medium text-bsilver">
                    Base Fare
                  </TableCell>
                  <TableCell className="text-right text-lg font-semibold text-ivory">
                    ${fleet.base_fare}
                  </TableCell>
                </TableRow>
                <TableRow className="border-copper/30">
                  <TableCell className="font-medium text-bsilver">
                    Per Kilometer
                  </TableCell>
                  <TableCell className="text-right text-lg font-semibold text-ivory">
                    ${fleet.per_kilometer_fare}
                  </TableCell>
                </TableRow>
                <TableRow className="border-b-0">
                  <TableCell className="font-medium text-bsilver">
                    Per Hour Rate
                  </TableCell>
                  <TableCell className="text-right text-lg font-semibold text-ivory">
                    ${fleet.per_kilometer_fare_duration_wise}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Card>

          <Separator className="my-6 bg-copper" />

          {/* Details Section */}
          <h2 className="text-2xl font-semibold text-highlight mb-4">
            More Information
          </h2>
          <div
            className="mt-5 prose prose-sm max-w-none article-content"
            dangerouslySetInnerHTML={{ __html: fleet.details }}
          />

          <div className="w-full my-4">
            <Link
              href="/booking"
              className="animate-pulse w-full text-center block bg-highlight text-ivory hover:bg-copper hover:animate-none font-bold text-lg tracking-wider px-10 py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              BOOK YOUR CHAFFURE
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
