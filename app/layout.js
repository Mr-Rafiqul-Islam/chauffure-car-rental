import WhatsAppBtn from "@/components/common/WhatsAppBtn";
import "./globals.css";
import FooterGlow from "@/components/mvpblocks/footer-glow";
import Header from "@/components/mvpblocks/header-1";
import { Toaster } from "@/components/ui/sonner";
import { AuthProvider } from "@/contexts/AuthContext";
import { getServices } from "@/server-action";
import { Playfair_Display, Inter } from "next/font/google";
import Script from "next/script"; // ✅ add this

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
  title: {
    default: "Premium Chauffeur Car Service Melbourne",
    template: "%s | Premium Chauffeur Car Service Melbourne",
  },
  description:
    "A Premium Chauffeur Car Service in Melbourne offering airport transfers, corporate travel, and special occasions.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Premium Chauffeur Car Service",
    description: "A Premium Chauffeur Car Service in Melbourne",
  },
};

export default async function RootLayout({ children }) {
  const services = await getServices();

  const formattedServicesList = services.map((service) => ({
    name: service.name,
    href: `/services/${service.slug}`,
  }));

  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-9H6QXYYY7T"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9H6QXYYY7T');
          `}
        </Script>
      </head>
      <body
        className={`${playfair.variable} ${inter.variable} antialiased bg-[#1F1F1F] text-[#FFFFF0]`}
      >
        <AuthProvider>
          <Toaster />
          <Header servicesDropdownItems={formattedServicesList} />
          {children}
          <WhatsAppBtn />
          <FooterGlow />
        </AuthProvider>
      </body>
    </html>
  );
}
