import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EkoliX Limited - Building the Future",
  description:
    "EkoliX Limited is an independent software research and development company building tools, experiences, and systems for the edge of what's possible on the web.",
  generator: "EkoliX Limited",

  icons: {
    icon: "/ekolix-app-icon.png",
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#08090b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="antialiased">{children}</body>
    </html>
  );
}