import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero/Hero";
import Intro from "@/components/Intro";
import Collections from "@/components/Collections";
import Bespoke from "@/components/Bespoke";
import Quote from "@/components/Quote";
import ContactFooter from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Milestones from "@/components/Milestones";
import SocialProof from "@/components/SocialProof";
import WhyChoose from "@/components/WhyChoose";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
});
const inter = Inter({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-inter" });

export const metadata = {
  title: "Heaven Furniture Mart — Designed. Crafted. Customized.",
  description: "Bespoke furniture and interior styling from Chattogram, Bangladesh.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${inter.variable} bg-[#F5F2EC] font-sans bg-ivory text-brown`}>
        <Navbar></Navbar>
        <Hero></Hero>
        <Intro></Intro>
        <WhyChoose></WhyChoose>
        <Collections></Collections>
        <Bespoke></Bespoke>
        <Quote></Quote>
        <Gallery></Gallery>
        <SocialProof></SocialProof>
        <Milestones></Milestones>
        {children}
        <ContactFooter></ContactFooter>
  
      </body>
    </html>
  );
}
