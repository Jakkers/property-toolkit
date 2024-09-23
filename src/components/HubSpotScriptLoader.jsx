// components/HubSpotScriptLoader.js
"use client"; // Ensure this runs on the client side

import { useEffect } from "react";

export default function HubSpotScriptLoader() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//js-eu1.hs-scripts.com/145325737.js";
    script.async = true;
    script.defer = true;
    script.id = "hs-script-loader";
    document.body.appendChild(script);

    // Cleanup function to remove the script if necessary
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // This component doesn't render anything visual
}
