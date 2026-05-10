import Navbar from "@/components/Navbar";
import "./globals.css";

import { DM_Serif_Display, Inter } from "next/font/google";

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
  description: "Premium Construction Company",
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
      </body>
    </html>
  );
}
