"use client";

import Link from "next/link";
import { useEffect, useState, useCallback, useRef } from "react";
import Image from "next/image"; // Assuming you're using Next.js for image optimization

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0); // Create a ref to store the last scroll position

  const handleScroll = useCallback(() => {
    if (typeof window !== "undefined") {
      const scrollY = window.scrollY;
      if (scrollY > lastScrollY.current) {
        setIsVisible(false); // Scrolling down
      } else {
        setIsVisible(true); // Scrolling up
      }
      lastScrollY.current = scrollY; // Update the last scroll position
    }
  }, []); // Empty dependency array since we only need the initial function reference

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]); // Add handleScroll as a dependency

  const isHomePage =
    typeof window !== "undefined" && window.location.pathname === "/";

  return (
    <nav
      className={`bg-white fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex py-5 justify-between items-center">
          <div className="shrink-0 flex items-center">
            <Link href="/">
              <Image
                className="hidden md:block" // Hide on mobile
                src="/property-toolkit-logo.svg"
                alt="logo"
                width={220}
                height={51}
              />
              <Image
                className="block md:hidden" // Show on mobile
                src="/property-toolkit-logo-small.svg" // Use smaller logo for mobile
                alt="logo"
                width={120}
                height={30}
              />
            </Link>
          </div>
          <Link href={isHomePage ? "#cta-form" : "/#cta-form"}>
            <button className="px-6 pb-2 md:px-8 py-2 md:py-3 bg-pt-orange text-white font-semibold rounded-lg hover:bg-[#d85a2a] transition duration-200">
              Start Now
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
