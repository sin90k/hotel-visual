import type { Metadata } from "next";
import "./globals.css";
import { LocaleProvider } from "@/components/locale-provider";

export const metadata: Metadata = {
  title: "Otter Stay｜海獭住伴",
  description:
    "Otter Stay helps hotels and vacation rentals improve room presentation, guest feedback and service recovery.",
  keywords: [
    "hotel photography",
    "room photo enhancement",
    "OTA optimization",
    "guest feedback QR",
    "vacation rental marketing",
    "hotel operations",
  ],
  icons: {
    icon: "/brand/otter-stay/otter-stay-selected-icon.png",
  },
  openGraph: {
    title: "Otter Stay — Together through every stay",
    description: "A hospitality partner for better room presentation and smoother guest feedback.",
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
