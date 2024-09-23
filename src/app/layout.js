import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

import { Lexend } from "next/font/google";
import "./globals.css";

import HubSpotScriptLoader from "@/components/HubSpotScriptLoader";

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
        {/* HubSpot script */}
        <HubSpotScriptLoader />
        <Theme appearance="light">{children}</Theme>
      </body>
    </html>
  );
}
