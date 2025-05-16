import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';


 // Corrected import path (using fa6)

const inter = Inter({ subsets: ["latin"] });

// Define colors based on new direction (using blue  #2596be as logo green approximation)
const accentColor = 'text-[#1f2a3f]'; // Logo green
const accentBgColor = 'bg-[#1f2a3f]';
const hoverAccentBgColor = 'hover:bg-[#256d45]'; // Darker shade for hover

export const metadata: Metadata = {
  title: "Alshaali Law Firm  - Attorneys at Law", // Replace with actual name later
  description: "Expert legal services in Dubai, UAE. Contact us for consultation on civil, commercial, labor law, and more.",
   icons: {
    icon: '/assets/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.className)}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        {/* Floating WhatsApp Icon */}
        <Link 
          href="https://wa.me/971567778217" // Using number from reference site, adjusted format
          target="_blank" 
          rel="noopener noreferrer"
          className={`${accentBgColor} ${hoverAccentBgColor} fixed bottom-5 right-5 z-50 p-3 rounded-full text-white shadow-lg transition-transform duration-300 hover:scale-110 flex items-center justify-center`}
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp size={28} />
        </Link>
      </body>
    </html>
  );
}

