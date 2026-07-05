import type { Metadata } from "next";
import "./globals.css";
import { LocaleProvider } from "@/components/locale-provider";

export const metadata: Metadata = {
  title: "Otter Visual｜让房间价值被看见",
  description:
    "Hospitality visual optimization for hotels, vacation rentals and property managers. Improve room presentation and booking performance.",
  keywords: [
    "hotel photography",
    "room photo enhancement",
    "OTA optimization",
    "vacation rental marketing",
    "hotel booking performance",
  ],
  openGraph: {
    title: "Otter Visual — Turn Better Room Photos Into More Bookings",
    description: "A hospitality growth partner for stronger room presentation and booking performance.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body><LocaleProvider>{children}</LocaleProvider></body>
    </html>
  );
}
