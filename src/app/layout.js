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

// Metadata including Font Awesome CSS
export const metadata = {
  title: "Property Toolkit - Sign Up Today",
  description:
    "Get your Property Investment Edge and claim your first 14 days free & get our HMO Package for FREE for the first 90 days",
  icons: {
    icon: "/path/to/your/favicon.ico", // Optional, path to your favicon
  },
  // Add external stylesheets in the `metadata` object
  stylesheets: [
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css",
  ],
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
