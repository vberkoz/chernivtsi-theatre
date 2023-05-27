import "src/styles/globals.css";

import { Noto_Sans } from "next/font/google";
const sans = Noto_Sans({
  subsets: ["latin", "cyrillic"],
  style: ["normal", "italic"],
  variable: "--font-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

import { Noto_Serif_Display } from "next/font/google";
const serif = Noto_Serif_Display({
  subsets: ["latin", "cyrillic"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

import { IBM_Plex_Sans } from "next/font/google";
const admin = IBM_Plex_Sans({
  subsets: ["latin", "cyrillic"],
  style: ["normal", "italic"],
  variable: "--font-admin",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Chernivtsi Theatre",
  description: "Chernivtsi Theatre",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${sans.variable} ${serif.variable} ${admin.variable} font-serif`}
      >
        {children}
      </body>
    </html>
  );
}
