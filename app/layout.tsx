import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

// Components
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";

// Fonts
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Samaneh Portfolio",
  description: "UX/UI Designer & Front-end Developer based in Norway",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${inter.variable}
          ${fraunces.variable}
          antialiased
          bg-[#FAFAFA]
          text-[#1A1A1A]
        `}
      >
        {/* Global Navigation */}
        <NavigationBar />

        <main className="min-h-screen">{children}</main>

        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  );
}
