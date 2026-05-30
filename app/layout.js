import Navbar from "@/components/Navbar";
import "./globals.css";

import { DM_Serif_Display, Inter } from "next/font/google";
import Footer from "@/components/Footer";

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-dmserif",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Monarch Evo Design",
  description: "MONARCHEVO offers expert architectural design, interior design, and construction services in Ernakulam, Thrissur, and Malappuram. Trusted construction and design solutions since 2020",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`
          ${dmSerif.variable}
          ${inter.variable}
        `}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
