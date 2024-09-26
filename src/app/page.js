import Footer from "@/components/Footer";

import Image from "next/image";
import YoutubeVideo from "@/components/YoutubeVideo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faChartLine,
  faGift,
} from "@fortawesome/free-solid-svg-icons";
import Header from "@/components/Header";
import Form from "@/components/Form";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center w-full bg-gray-50">
        {/* Hero Section with Image */}
        <div className="flex flex-col-reverse md:w-[80vw] lg:w-[100vw] lg:flex-row ld:px-6 xl:px-10 w-full md:min-h-[84vh] items-center justify-center">
          {/* Text & Button Content */}
          <div className="flex flex-col py-6 md:py-20 items-start justify-center text-left text-black px-6 w-full lg:w-1/2">
            <h2 className="text-xl md:text-5xl font-bold mb-4">
              Want to get your Property Investment Edge
            </h2>
            <p className="text-md md:text-lg mb-4">
              Claim your first 14 days for FREE plus our HMO Package for the
              first 90 days.
            </p>
            <a href="#cta-form" className="mt-4">
              <button className="px-6 pb-2 md:px-8 py-2 md:py-3 bg-pt-orange text-white font-semibold rounded-lg hover:bg-[#d85a2a] transition duration-200">
                Start Your Free Trial Now
              </button>
            </a>

            {/* Highlights Section */}
            <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0 justify-start items-start w-full py-8">
              <div className="flex items-center">
                <div className="w-12 h-12 p-3 flex items-center justify-center bg-[#303c81] text-white rounded-full mr-4">
                  <FontAwesomeIcon icon={faClock} className="text-2xl" />
                </div>
                <p className="text-gray-700 text-sm sm:text-base">Save Time</p>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 p-3 flex items-center justify-center bg-[#303c81] text-white rounded-full mr-4">
                  <FontAwesomeIcon icon={faChartLine} className="text-2xl" />
                </div>
                <p className="text-gray-700 text-sm sm:text-base">
                  Find Best ROI Deal
                </p>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 p-3 flex items-center justify-center bg-[#303c81] text-white rounded-full mr-4">
                  <FontAwesomeIcon icon={faGift} className="text-2xl" />
                </div>
                <p className="text-gray-700 text-sm sm:text-base">
                  Try For Free
                </p>
              </div>
            </div>
          </div>

          {/* Image */}

          <div className="flex w-full lg:w-1/3 pt-6 px-6 items-center">
            <Image
              src="/norwich.webp"
              alt="Property Image"
              width={700}
              height={700}
              className="border-solid border-2 rounded-2xl p-2 border-orange-500 object-contain w-full"
            />
          </div>
        </div>

        {/* Partners Section */}
        <div className="py-8 w-full bg-pt-blue flex flex-col items-center text-center">
          <p className="text-md text-white mb-4">
            All Property Deals In one place
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-20 items-center">
            <Image
              src="/rightmove-logo.png"
              alt="Rightmove"
              width={200}
              height={100}
              className="mx-auto"
            />
            <Image
              src="/zoopla-logo.png"
              alt="Zoopla"
              width={200}
              height={100}
              className="mx-auto"
            />
            <Image
              src="/onthemarket-logo.png"
              alt="OnTheMarket"
              width={200}
              height={100}
              className="mx-auto"
            />
          </div>
        </div>

        {/* Property Toolkit Section */}
        <div className="w-full px-4 py-12 bg-white flex flex-col items-center">
          <h3 className="text-2xl text-center md:text-3xl font-bold text-[#303c81] mb-6">
            Discover the Best Yielding Property Deals in Your Location
          </h3>
          <p className="text-gray-700 text-lg md:text-xl text-center max-w-3xl mb-12">
            At the click of a button, access the top property deals tailored for
            your investment needs.
          </p>

          {/* Investor Types */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl w-full text-left">
            {/* Investor Category 1 */}
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg text-center">
              <h4 className="text-xl font-semibold text-[#303c81] mb-4">
                BRRR Investors
              </h4>
              <p className="text-gray-600">
                Investors focused on Buy, Rehab, Rent, Refinance, Repeat.
              </p>
            </div>

            {/* Investor Category 2 */}
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg text-center">
              <h4 className="text-xl font-semibold text-[#303c81] mb-4">
                HMO Investors
              </h4>
              <p className="text-gray-600">
                Specialized for Houses in Multiple Occupation deals.
              </p>
            </div>

            {/* Investor Category 3 */}
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg text-center">
              <h4 className="text-xl font-semibold text-[#303c81] mb-4">
                Finding Motivated Sellers
              </h4>
              <p className="text-gray-600">
                Get access to properties from motivated sellers for better
                deals.
              </p>
            </div>

            {/* Investor Category 4 */}
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg text-center">
              <h4 className="text-xl font-semibold text-[#303c81] mb-4">
                Below Market Value Deals
              </h4>
              <p className="text-gray-600">
                Find properties selling for less than their market value.
              </p>
            </div>

            {/* Investor Category 5 */}
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg text-center">
              <h4 className="text-xl font-semibold text-[#303c81] mb-4">
                Cheap Square Meter Deals
              </h4>
              <p className="text-gray-600">
                Discover properties with the best price per square meter in your
                area.
              </p>
            </div>

            {/* Coming Soon */}
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg text-center">
              <h4 className="text-xl font-semibold text-[#303c81] mb-4">
                (Coming Soon) Serviced Accommodation Investor
              </h4>
              <p className="text-gray-600">
                New tools for short-term rental investors arriving soon.
              </p>
            </div>
          </div>

          {/* Coming in 2025 */}
          <div className="mt-12 w-full text-center">
            <h4 className="text-xl font-semibold text-[#303c81]">
              Coming 2025 - Rent to Rent
            </h4>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="flex flex-col items-center justify-center w-full py-8 pb-20 space-y-12 px-6">
          {/* How It Works Steps */}
          <div className="w-full max-w-3xl px-4 py-8 mx-6">
            <h3 className="text-2xl font-bold text-center text-[#303c81] mb-6">
              How It Works
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Step 1 */}
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-lg">
                <div className="w-12 h-12 flex items-center justify-center bg-[#303c81] text-white rounded-full mb-4">
                  1
                </div>
                <h4 className="text-lg font-semibold text-[#303c81] mb-2">
                  Sign Up
                </h4>
                <p className="text-gray-700">Get your free account today</p>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-lg">
                <div className="w-12 h-12 flex items-center justify-center bg-[#303c81] text-white rounded-full mb-4">
                  2
                </div>
                <h4 className="text-lg font-semibold text-[#303c81] mb-2">
                  Search your area
                </h4>
                <p className="text-gray-700">
                  Discover all property deals in your area{" "}
                </p>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-lg">
                <div className="w-12 h-12 flex items-center justify-center bg-[#303c81] text-white rounded-full mb-4">
                  3
                </div>
                <h4 className="text-lg font-semibold text-[#303c81] mb-2">
                  Get top deals
                </h4>
                <p className="text-gray-700">
                  Maximise your investment opportunities
                </p>
              </div>
            </div>
          </div>

          {/* Screenshots */}
          <div className="w-full max-w-3xl text-center space-y-6">
            <h3 className="text-2xl font-bold text-[#303c81]">
              See It in Action
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Image
                src="/mac-screenshot.jpg"
                alt="Screenshot of the software"
                width={600}
                height={400}
                className="rounded-lg shadow-md"
              />
              <Image
                src="/phone-screenshot.jpg"
                alt="Screenshot of the software"
                width={600}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>

          {/* Video Section */}
          <div className="w-full max-w-3xl text-center space-y-6">
            <h3 className="text-2xl font-bold text-[#303c81]">
              Watch Our Quick Demo
            </h3>
            <YoutubeVideo />
          </div>

          {/* User Testimonials */}
          <div className="w-full max-w-3xl px-4 py-6">
            <h3 className="text-2xl font-bold text-center text-[#303c81] mb-6">
              What Our Users Are Saying
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {/* Testimonial Card 1 */}
              <div className="flex flex-col items-center p-6 rounded-lg shadow-md">
                <p className="text-gray-700 font-medium mb-2 text-center">
                  &quot;This software has transformed my property
                  investments!&quot;
                </p>
                <p className="text-gray-500 text-sm text-center">- Jane Doe</p>
              </div>

              {/* Testimonial Card 2 */}
              <div className="flex flex-col items-center p-6 rounded-lg shadow-md">
                <p className="text-gray-700 font-medium mb-2 text-center">
                  &quot;Simple, effective, and a game-changer for
                  landlords.&quot;
                </p>
                <p className="text-gray-500 text-sm text-center">
                  - John Smith
                </p>
              </div>

              {/* Testimonial Card 3 */}
              <div className="flex flex-col items-center p-6 rounded-lg shadow-md">
                <p className="text-gray-700 font-medium mb-2 text-center">
                  &quot;Highly recommend this tool for every property
                  investor!&quot;
                </p>
                <p className="text-gray-500 text-sm text-center">
                  - Emily Johnson
                </p>
              </div>
            </div>
          </div>

          {/* Simplicity of Use */}
          <div className="w-full max-w-3xl text-center space-y-6">
            <h3 className="text-2xl font-bold text-[#303c81]">
              Simplicity at Its Core
            </h3>
            <p className="text-gray-700">
              No learning needed. Get started in minutes!
            </p>
          </div>

          {/* What's Included Section */}
          <div className="w-full max-w-3xl text-center bg-white shadow-lg rounded-lg p-6 md:p-8">
            <h3 className="text-2xl md:text-3xl font-bold text-[#303c81] mb-4">
              What&apos;s Included in Your Free Trial
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left text-gray-700">
              <li className="flex items-start space-x-2">
                <span className="text-[#f26a31]">✔</span>
                <span>Access to all features</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-[#f26a31]">✔</span>
                <span>Free HMO Package for 90 days</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-[#f26a31]">✔</span>
                <span>24/7 customer support</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-[#f26a31]">✔</span>
                <span>Access to exclusive webinars</span>
              </li>
            </ul>
          </div>
        </div>
        {/* Call to Action Form */}
        <div
          id="cta-form"
          className="w-full min-h-screen flex items-center justify-center py-20 px-6 bg-pt-blue"
        >
          <div className="w-full max-w-3xl text-center py-12 px-6 bg-white rounded-lg shadow-lg mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-[#303c81]">
              What are you waiting for?
            </h3>
            <p className="text-gray-700">Sign up for FREE today.</p>
            <Form />
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}
