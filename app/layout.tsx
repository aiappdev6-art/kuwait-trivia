import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "State of Kuwait — Where Ancient Sands Meet Modern Skies",
  description:
    "A cinematic editorial journey through the history, culture, geography, and identity of Kuwait.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Cormorant+Garamond:wght@300;400;500;600;700&family=Tajawal:wght@300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
