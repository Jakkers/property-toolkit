import { Lexend } from "next/font/google";
import "./globals.css";

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
    <html lang="en">
      <body className={`${lexend.className} antialiased`}>{children}</body>
    </html>
  );
}
