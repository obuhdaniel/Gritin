import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Goliard | A Lifestyle Platform for Graduate Women",
  description:
    "Goliard is a lifestyle platform for women in graduate school navigating the beautiful contradiction of being deeply intellectual AND deeply alive: in love, in motion, in discovery.",
  keywords: [
    "Goliard",
    "graduate women",
    "lifestyle",
    "travel",
    "academic",
    "Pan-African",
    "women in grad school",
    "travel diary",
    "academic wellness",
  ],
  authors: [{ name: "Goliard" }],
  openGraph: {
    title: "Goliard | A Lifestyle Platform for Graduate Women",
    description:
      "You can be brilliant AND unbothered. Ambitious AND in love. Graduating AND going somewhere wild.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${dmSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
