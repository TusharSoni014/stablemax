import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";
import Provider from "./provider";

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

export const metadata: Metadata = {
  title: "StableMax - Generate Images for FREE",
  description:
    "Generate stunning images from text using AI models for free with StableMax. Turn your ideas into visual art instantly.",
  metadataBase: new URL("https://stablemax.com"),
  openGraph: {
    title: "StableMax - Free AI Image Generation",
    description: "Turn your text into images with our free AI-powered tool",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "StableMax AI Image Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "StableMax - Free AI Image Generation",
    description: "Turn your text into images with our free AI-powered tool",
    images: ["/twitter-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Provider>
            <Header />
            {children}
          </Provider>
        </ThemeProvider>
      </body>
    </html>
  );
}
