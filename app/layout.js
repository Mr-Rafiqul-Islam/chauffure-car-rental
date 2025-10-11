import "./globals.css";
import FooterGlow from "@/components/mvpblocks/footer-glow";
import Header from "@/components/mvpblocks/header-1";
import { Toaster } from "@/components/ui/sonner";
import { getServices } from "@/server-action";
import { Playfair_Display, Inter } from "next/font/google";

// Load Google Fonts
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Premium Chauffeur Car Service",
  description: "A Premium Chauffeur Car Service in Melbourne",
};

export default async function RootLayout({ children }) {
  const services = await getServices();

  // Format the data into the structure your Header component needs
  const formattedServicesList = services.map((service) => {
    const slug = service.name.replace(/\s+/g, "-").toLowerCase();
    return {
      name: service.name,
      href: `/services/${service.id}/${slug}`,
    };
  });

  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased bg-[#1F1F1F] text-[#FFFFF0]`}
      >
        <Toaster />
        <Header servicesDropdownItems={formattedServicesList} />
        {children}
        <FooterGlow />
      </body>
    </html>
  );
}
