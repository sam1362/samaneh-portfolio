import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import "./globals.css";

// Components
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";

// Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400"],
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
        className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} antialiased bg-[#FAFAFA] text-[#1A1A1A]`}
      >
        {/* Navigation globally visible */}
        <NavigationBar />

        <main className="min-h-screen">{children}</main>

        {/* Footer globally visible */}
        <Footer />
      </body>
    </html>
  );
}
