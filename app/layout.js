import localFont from "next/font/local";
import "./globals.css";
import FooterGlow from "@/components/mvpblocks/footer-glow";
import Header from "@/components/mvpblocks/header-1";
import { Toaster } from "@/components/ui/sonner";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Premium Chaffure Car Service",
  description: "A Premium Chaffure Car Service in Melbourne",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#1F1F1F] text-[#FFFFF0]`}
      >
        <Toaster  />
        <Header />
        {children}
        <FooterGlow/>
      </body>
    </html>
  );
}
