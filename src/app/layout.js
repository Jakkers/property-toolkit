import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { Lexend } from "next/font/google";
import "./globals.css";

import CookieBanner from "@/components/CookieBanner";
import Header from "@/components/Header";

const lexend = Lexend({
  subsets: ["latin"],
  weight: "variable",
});

export const metadata = {
  title: "Property Toolkit - Sign Up Today",
  description:
    "Get your Property Investment Edge and claim your first 14 days free & get our HMO Package for FREE for the first 90 days",
};

export default function RootLayout({ children }) {
  return (
    <html className={`${lexend.className} antialiased`} lang="en">
      <body>
        <Header />
        {/* Cookie Banner with HubSpot script management */}
        <CookieBanner />
        <Theme appearance="light">{children}</Theme>
      </body>
    </html>
  );
}
