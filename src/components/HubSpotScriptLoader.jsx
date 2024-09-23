"use client";

import { useEffect } from "react";

export default function HubSpotScriptLoader() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//js-eu1.hs-scripts.com/145325737.js";
    script.async = true;
    script.defer = true;
    script.id = "hs-script-loader";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
}
