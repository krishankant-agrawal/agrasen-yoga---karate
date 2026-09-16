import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Agrasen Yoga & Karate Classes | Murlipura, Jaipur",
  description:
    "Yoga and Karate classes in Murlipura, Jaipur. Build strength, flexibility, discipline and confidence with Agrasen Yoga & Karate Classes.",
  keywords: [
    "Yoga classes in Murlipura",
    "Karate classes in Murlipura",
    "Yoga classes in Jaipur",
    "Karate classes in Jaipur",
    "Agrasen Yoga",
    "Agrasen Karate",
  ],
  icons: {
    icon: "/images/logo.png",
  },
  openGraph: {
    title: "Agrasen Yoga & Karate Classes",
    description:
      "A healthier, stronger and more confident you — through Yoga & Karate.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
