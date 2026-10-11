import type { Metadata } from "next";
import { Google_Sans_Flex } from "next/font/google";
import "./globals.css";

const googleSansFlex = Google_Sans_Flex({
  subsets: ["latin"],
  variable: "--font-google-sans-flex",
});

export const metadata: Metadata = {
  title: "Donezo — Task Management Dashboard",
  description:
    "Overview dashboard of the Donezo task management app: projects, tasks, reminders and team activity.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${googleSansFlex.variable} h-full`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
