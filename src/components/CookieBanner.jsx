"use client";

import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [isBannerVisible, setBannerVisible] = useState(false);
  const [cookiesAccepted, setCookiesAccepted] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookiesAccepted");
    if (consent === "true") {
      setCookiesAccepted(true);
      loadHubSpotScript();
    } else {
      setBannerVisible(true); // Show banner if consent is not given
    }
  }, []);

  const acceptCookies = () => {
    setCookiesAccepted(true);
    setBannerVisible(false);
    localStorage.setItem("cookiesAccepted", "true");

    loadHubSpotScript(); // Load HubSpot script after consent
  };

  const declineCookies = () => {
    localStorage.setItem("cookiesAccepted", "false");
    setCookiesAccepted(false);
    removeHubSpotScript(); // Remove script on opt-out
    setBannerVisible(false);
  };

  const loadHubSpotScript = () => {
    if (document.getElementById("hs-script-loader")) return;
    const script = document.createElement("script");
    script.src = "//js-eu1.hs-scripts.com/145325737.js";
    script.async = true;
    script.defer = true;
    script.id = "hs-script-loader";
    document.body.appendChild(script);
  };

  const removeHubSpotScript = () => {
    const script = document.getElementById("hs-script-loader");
    if (script) script.remove();
  };

  const handleOptOut = () => {
    localStorage.removeItem("cookiesAccepted");
    removeHubSpotScript();
    setCookiesAccepted(false);
    window.location.reload(); // Reload page after opt-out
  };

  return (
    <>
      {/* Cookie Banner */}
      {isBannerVisible && !cookiesAccepted && (
        <div className="cookie-banner fixed bottom-0 left-0 w-full bg-pt-blue text-white py-4 px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center shadow-lg z-50">
          <p className="text-xs sm:text-sm mb-2 sm:mb-0">
            We use cookies to improve your experience and analyze traffic. By
            clicking &quot;Accept&quot;, you consent to our use of cookies. Read
            our
            <a href="/privacy-policy" className="underline ml-1 text-pt-orange">
              Privacy Policy
            </a>
            .
          </p>
          <div className="flex space-x-2 sm:space-x-4">
            <button
              onClick={acceptCookies}
              className="bg-pt-orange text-white text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-2 rounded-md hover:bg-[#d85a2a] transition-colors duration-300"
            >
              Accept
            </button>
            <button
              onClick={declineCookies}
              className="bg-gray-600 text-white text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-2 rounded-md hover:bg-gray-500 transition-colors duration-300"
            >
              Decline
            </button>
          </div>
        </div>
      )}

      {/* Opt-out Option in Footer or Settings */}
      {cookiesAccepted && (
        <div className="fixed bottom-4 right-4">
          <button
            onClick={handleOptOut}
            className="bg-red-600 text-white text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-2 rounded-md hover:bg-red-500 transition-colors duration-300"
          >
            Opt-out of Cookies
          </button>
        </div>
      )}
    </>
  );
}
