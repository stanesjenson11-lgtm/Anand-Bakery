import type { Metadata } from "next";
import { Fraunces, Syne, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Anand Bakery (Ananth Bakery) | Est. 1968 | Sawyerpuram's Heritage Star Cake",
  description: "Home of the iconic 100% pure coconut oil Star Cake and artisanal Hot Americano. Three generations of wood-fired baking heritage in Sawyerpuram, Thoothukudi since 1968.",
  keywords: ["Anand Bakery", "Ananth Bakery", "Star Cake", "Sawyerpuram", "Thoothukudi bakery", "Coconut Oil Cake", "Americano", "Heritage Bakery 1968"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${syne.variable} ${jakarta.variable} scroll-smooth`}>
      <body className="font-sans bg-cream-100 text-espresso-950 selection:bg-gold-500 selection:text-cream-50 antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
