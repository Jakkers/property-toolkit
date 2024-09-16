import Footer from "@/components/Footer";
import PlaceholderForm from "@/components/PlaceholderForm";
import Image from "next/image";
import { Card } from "@radix-ui/themes";

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center justify-center bg-gray-50">
        {/* Hero Section with Image */}
        <div className="flex flex-col-reverse md:w-[80vw] lg:w-[100vw] lg:flex-row ld:px-6 xl:px-10 w-full md:min-h-[84vh] items-center justify-center">
          {/* Text & Button Content */}
          <div className="flex flex-col py-6 md:py-20 items-start justify-center text-left text-black px-6 w-full lg:w-1/2">
            <h2 className="text-2xl md:text-5xl font-bold mb-4">
              We hope you&apos;re enjoying the Landlord Investment Show
            </h2>
            <p className="text-md md:text-lg mb-4">
              Get your Property Investment Edge and claim your first 14 days
              free &amp; get our HMO Package for FREE for the first 90 days.
            </p>
            <a href="#cta-form" className="mt-4">
              <button className="px-6 pb-2 md:px-8 py-2 md:py-3 bg-pt-orange text-white font-semibold rounded-lg hover:bg-[#d85a2a] transition duration-200">
                Start Your Free Trial Now
              </button>
            </a>
          </div>

          {/* Image */}

          <div className="flex w-[80vw] lg:w-1/3 min-h-[30vh] md:items-center">
            <Image
              src="/norwich.webp"
              alt="Property Image"
              width={400}
              height={600}
              className="object-cover border-solid border-2 rounded-2xl p-2 mt-6 mx-6 border-orange-500 md:object-contain w-full"
            />
          </div>
        </div>

        {/* Partners Section */}
        <div className="py-8 w-full bg-pt-blue flex flex-col items-center text-center">
          <p className="text-md text-white mb-4">All in one place</p>
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

        {/* Main Content Section */}
        <div className="flex flex-col items-center justify-center w-full px-4 py-8 space-y-12">
          {/* Types of Property Deals */}
          <div className="w-full max-w-2xl text-center space-y-6">
            <h3 className="text-2xl font-bold text-[#303c81]">Focus on HMOs</h3>
            <p className="text-gray-700">
              Our software is perfect for managing Houses in Multiple Occupation
              (HMOs). Plus, it works great for single lets, holiday rentals, and
              commercial properties too.
            </p>
          </div>
          {/* How It Works Steps */}
          <div className="w-full max-w-2xl px-4 py-8 ">
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
                <p className="text-gray-700">
                  Sign up for a free trial and get started in minutes.
                </p>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-lg">
                <div className="w-12 h-12 flex items-center justify-center bg-[#303c81] text-white rounded-full mb-4">
                  2
                </div>
                <h4 className="text-lg font-semibold text-[#303c81] mb-2">
                  Add Your Property
                </h4>
                <p className="text-gray-700">
                  Easily add your property details to our platform.
                </p>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-lg">
                <div className="w-12 h-12 flex items-center justify-center bg-[#303c81] text-white rounded-full mb-4">
                  3
                </div>
                <h4 className="text-lg font-semibold text-[#303c81] mb-2">
                  Manage with Ease
                </h4>
                <p className="text-gray-700">
                  Start managing your property deals with ease and confidence.
                </p>
              </div>
            </div>
          </div>

          {/* Screenshots */}
          <div className="w-full max-w-2xl text-center space-y-6">
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
          <div className="w-full max-w-2xl text-center space-y-6">
            <h3 className="text-2xl font-bold text-[#303c81]">
              Watch Our Quick Demo
            </h3>
            <video controls className="w-full rounded-lg shadow-md">
              <source src="/demo-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* User Testimonials */}
          <div className="w-full max-w-2xl px-4 py-6">
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
          <div className="w-full max-w-2xl text-center space-y-6">
            <h3 className="text-2xl font-bold text-[#303c81]">
              Simplicity at Its Core
            </h3>
            <p className="text-gray-700">
              No learning needed. Get started in minutes!
            </p>
          </div>

          {/* What's Included Section */}
          <div className="w-full max-w-2xl text-center bg-white shadow-lg rounded-lg p-6 md:p-8">
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

          {/* Call to Action Form */}
          <div id="cta-form" className="w-full max-w-md text-center">
            <h3 className="text-2xl font-bold mb-6 text-[#303c81]">
              Ready to Get Started?
            </h3>
            <PlaceholderForm />
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}
