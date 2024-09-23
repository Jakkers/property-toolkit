// RootLayout.js (your current layout file)
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

import { Lexend } from "next/font/google";
import "./globals.css";

// Import the HubSpotScriptLoader component
import HubSpotScriptLoader from "@/components/HubSpotScriptLoader"; // Adjust the path as needed

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
        {/* Load the HubSpot script client-side */}
        <HubSpotScriptLoader />
        <Theme appearance="light">{children}</Theme>
      </body>
    </html>
  );
}

//importing radix theme
// import "@radix-ui/themes/styles.css";
// import { Theme } from "@radix-ui/themes";

// import { Lexend } from "next/font/google";
// import "./globals.css";

// const lexend = Lexend({
//   subsets: ["latin"],
//   weight: "variable",
// });

// export const metadata = {
//   title: "Property Toolkit - Sign Up Today",
//   description:
//     "Get your Property Investment Edge and claim your first 14 days free & get our HMO Package for FREE for the first 90 days",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html className={`${lexend.className} antialiased`} lang="en">
//       <body>
//         <Theme appearance="light">{children}</Theme>
//       </body>
//     </html>
//   );
// }
