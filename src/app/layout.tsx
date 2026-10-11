import type { Metadata } from "next";
import { Roboto, Great_Vibes } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

const vibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-vibes",
});

export const metadata: Metadata = {
  title: "CRM Admin Dashboard",
  description: "Very detailed & featured admin.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${roboto.variable} ${vibes.variable} h-full`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
