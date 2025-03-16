import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "../components/ClientLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Davide Petti | Software Developer & Web3 Security Researcher",
  description: "Professional portfolio of Davide Petti, a Software Developer and Web3 Security Researcher specializing in secure, innovative solutions.",
  keywords: "software developer, web3, security researcher, blockchain, smart contracts, portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-text-primary`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
