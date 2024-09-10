import Footer from "@/components/Footer";
import PlaceholderForm from "@/components/PlaceholderForm";
import Image from "next/image";
import { Container } from "@radix-ui/themes";

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center justify-center min-h-screen space-y-12 bg-gray-50">
        {/* Hero Section with Image */}
        <div className="relative w-full h-[60vh] md:h-[80vh]">
          <Image
            className="object-cover w-full h-full"
            src="/property.jpg"
            alt="Property image"
            width={1400}
            height={900}
          />
          {/* Overlay Content on Hero Image */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-black bg-white/80 p-6">
            <Image
              src={"/property-toolkit-logo.svg"}
              alt="logo"
              width={350}
              height={180}
              className="mb-4"
            />
            <h2 className="text-3xl font-bold text-center mb-2">
              We hope you&apos;re enjoying the Landlord Investment Show
            </h2>
            <p className="mt-2 text-lg text-center max-w-md">
              Get your Property Investment Edge and claim your first 14 days
              free &amp; get our HMO Package for FREE for the first 90 days.
            </p>
            <a href="#cta-form" className="mt-4">
              <button className="px-8 py-3 bg-[#f26a31] text-white font-semibold rounded-lg hover:bg-[#d85a2a] transition duration-200">
                Start Your Free Trial Now
              </button>
            </a>
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
                  "This software has transformed my property investments!"
                </p>
                <p className="text-gray-500 text-sm text-center">- Jane Doe</p>
              </div>

              {/* Testimonial Card 2 */}
              <div className="flex flex-col items-center p-6 rounded-lg shadow-md">
                <p className="text-gray-700 font-medium mb-2 text-center">
                  "Simple, effective, and a game-changer for landlords."
                </p>
                <p className="text-gray-500 text-sm text-center">
                  - John Smith
                </p>
              </div>

              {/* Testimonial Card 3 */}
              <div className="flex flex-col items-center p-6 rounded-lg shadow-md">
                <p className="text-gray-700 font-medium mb-2 text-center">
                  "Highly recommend this tool for every property investor!"
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
              What’s Included in Your Free Trial
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

// export default function Home() {
//   return (
//     <>
//       <main className="flex flex-col items-center justify-center min-h-screen">
//         {/* Hero Section with Image */}
//         <div className="relative w-full h-[50vh] md:h-[75vh]">
//           <Image
//             className="object-cover w-full h-full"
//             src="/property.jpg"
//             alt="Property image"
//             width={1400}
//             height={900}
//           />
//           {/* Overlay Content on Hero Image */}
//           <div className="absolute inset-0 flex flex-col items-center justify-center text-black bg-white/80 p-4">
//             <Image
//               src={"/property-toolkit-logo.svg"}
//               alt="logo"
//               width={300}
//               height={150}
//               className="mb-4"
//             />
//             <h2 className="text-2xl font-semibold text-center">
//               We hope you&apos;re enjoying the Landlord Investment Show
//             </h2>
//             <p className="mt-2 text-center max-w-md">
//               Get your Property Investment Edge and claim your first 14 days
//               free &amp; get our HMO Package for FREE for the first 90 days
//             </p>
//           </div>
//         </div>

//         {/* Main Content Section */}
//         <div className="flex flex-col items-center justify-center w-full px-4 py-8 space-y-12">
//           {/* Call to Action Form */}
//           <div className="w-full max-w-md">
//             <PlaceholderForm />
//           </div>

//           {/* User Testimonials */}
//           <div className="w-full max-w-2xl px-4">
//             <h3 className="text-xl font-semibold text-center mb-4">
//               What Our Users Are Saying
//             </h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//               {/* Testimonial Card 1 */}
//               <div className="bg-white shadow-md p-4 rounded-lg">
//                 <p className="text-gray-700 mb-2">
//                   "This software has transformed my property investments!"
//                 </p>
//                 <p className="text-gray-500 text-sm">- Jane Doe</p>
//               </div>

//               {/* Testimonial Card 2 */}
//               <div className="bg-white shadow-md p-4 rounded-lg">
//                 <p className="text-gray-700 mb-2">
//                   "Simple, effective, and a game-changer for landlords."
//                 </p>
//                 <p className="text-gray-500 text-sm">- John Smith</p>
//               </div>

//               {/* Testimonial Card 3 */}
//               <div className="bg-white shadow-md p-4 rounded-lg">
//                 <p className="text-gray-700 mb-2">
//                   "Highly recommend this tool for every property investor!"
//                 </p>
//                 <p className="text-gray-500 text-sm">- Emily Johnson</p>
//               </div>

//               {/* Add more testimonial cards as needed */}
//             </div>
//           </div>

//           {/* Screenshots */}
//           <div className="w-full max-w-2xl text-center space-y-6">
//             <h3 className="text-xl font-semibold">See It in Action</h3>
//             <Image
//               src="/screenshot1.jpg"
//               alt="Screenshot of the software"
//               width={600}
//               height={400}
//               className="rounded shadow-md"
//             />
//             <Image
//               src="/screenshot2.jpg"
//               alt="Screenshot of the software"
//               width={600}
//               height={400}
//               className="rounded shadow-md"
//             />
//           </div>

//           {/* Video Section */}
//           <div className="w-full max-w-2xl text-center space-y-6">
//             <h3 className="text-xl font-semibold">Watch Our Quick Demo</h3>
//             <video controls className="w-full rounded shadow-md">
//               <source src="/demo-video.mp4" type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>
//           </div>

//           {/* How it Works Steps */}
//           <div className="w-full max-w-2xl px-4 py-8 bg-blue-50 rounded-lg shadow-md">
//             <h3 className="text-2xl font-bold text-center text-blue-800 mb-6">
//               How It Works
//             </h3>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               {/* Step 1 */}
//               <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-lg">
//                 <div className="w-12 h-12 flex items-center justify-center bg-blue-800 text-white rounded-full mb-4">
//                   1
//                 </div>
//                 <h4 className="text-lg font-semibold text-blue-800 mb-2">
//                   Sign Up
//                 </h4>
//                 <p className="text-gray-700">
//                   Sign up for a free trial and get started in minutes.
//                 </p>
//               </div>

//               {/* Step 2 */}
//               <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-lg">
//                 <div className="w-12 h-12 flex items-center justify-center bg-blue-800 text-white rounded-full mb-4">
//                   2
//                 </div>
//                 <h4 className="text-lg font-semibold text-blue-800 mb-2">
//                   Add Your Property
//                 </h4>
//                 <p className="text-gray-700">
//                   Easily add your property details to our platform.
//                 </p>
//               </div>

//               {/* Step 3 */}
//               <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-lg">
//                 <div className="w-12 h-12 flex items-center justify-center bg-blue-800 text-white rounded-full mb-4">
//                   3
//                 </div>
//                 <h4 className="text-lg font-semibold text-blue-800 mb-2">
//                   Manage with Ease
//                 </h4>
//                 <p className="text-gray-700">
//                   Start managing your property deals with ease and confidence.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Types of Property Deals */}
//           <div className="w-full max-w-2xl text-center space-y-6">
//             <h3 className="text-xl font-semibold">Focus on HMOs</h3>
//             <p className="text-gray-700">
//               Our software is perfect for managing Houses in Multiple Occupation
//               (HMOs). Plus, it works great for single lets, holiday rentals, and
//               commercial properties too.
//             </p>
//           </div>

//           {/* Simplicity of Use */}
//           <div className="w-full max-w-2xl text-center space-y-6">
//             <h3 className="text-xl font-semibold">Simplicity at Its Core</h3>
//             <p className="text-gray-700">
//               No learning needed. Get started in minutes!
//             </p>
//           </div>

//           {/* What's Included Section */}
//           <div className="w-full max-w-2xl text-center space-y-6">
//             <h3 className="text-xl font-semibold">
//               What’s Included in Your Free Trial
//             </h3>
//             <ul className="list-none text-left text-gray-700">
//               <li>✔ Access to all features</li>
//               <li>✔ Free HMO Package for 90 days</li>
//               <li>✔ 24/7 customer support</li>
//               <li>✔ Access to exclusive webinars</li>
//             </ul>
//           </div>

//           {/* Another Call to Action Form */}
//           <div className="w-full max-w-md">
//             <PlaceholderForm />
//           </div>
//         </div>

//         {/* Footer */}
//         <Footer />
//       </main>
//     </>
//   );
// }

// export default function Home() {
//   return (
//     <>
//       <main className="flex flex-col items-center justify-center min-h-screen">
//         {/* Hero Section with Image */}
//         <div className="relative w-full h-[50vh] md:h-[75vh]">
//           <Image
//             className="object-cover w-full h-full"
//             src="/property.jpg"
//             alt="Property image"
//             width={1400}
//             height={900}
//           />
//           {/* Overlay Content on Hero Image */}
//           <div className="absolute inset-0 flex flex-col items-center justify-center text-black bg-white/80 p-4">
//             <Image
//               src={"/property-toolkit-logo.svg"}
//               alt="logo"
//               width={300}
//               height={150}
//               className="mb-4"
//             />
//             <h2 className="text-2xl font-semibold text-center">
//               We hope you&apos;re enjoying the Landlord Investment Show
//             </h2>
//             <p className="mt-2 text-center max-w-md">
//               Get your Property Investment Edge and claim your first 14 days
//               free &amp; get our HMO Package for FREE for the first 90 days
//             </p>
//           </div>
//         </div>

//         {/* Main Content Section */}
//         <div className="flex flex-col items-center justify-center w-full px-4 py-8">
//           <div className="w-full max-w-md">
//             <PlaceholderForm />
//           </div>
//         </div>

//         {/* Footer */}
//         <Footer />
//       </main>
//     </>
//   );
// }

// export default function Home() {
//   return (
//     <>
//       <main className="grid grid-cols-1 md:grid-cols-2 h-screen">
//         {/* Mobile Image with Overlay Content */}
//         <div className="relative block md:hidden h-[50vh] w-full">
//           <Image
//             className="object-cover w-full h-full"
//             src="/property.jpg"
//             alt="property image"
//             layout="fill"
//           />
//           {/* Overlay Content */}
//           <div className="absolute inset-0 flex flex-col items-center justify-center text-black bg-white/80 p-2">
//             <Image
//               src={"/property-toolkit-logo.svg"}
//               alt="logo"
//               width={300}
//               height={150}
//               className="mb-4"
//             />
//             <h2 className="text-2xl font-semibold text-center p-2">
//               We hope you&apos;re enjoying the Landlord Investment Show
//             </h2>
//             <p className="mt-2 text-center max-w-sm p-2">
//               Get your Property Investment Edge and claim your first 14 days
//               free &amp; get our HMO Package for FREE for the first 90 days
//             </p>
//           </div>
//         </div>

//         {/* Content Below Overlay Image on Mobile */}
//         <div className="block md:hidden flex-col items-center justify-center w-full px-4 py-2">
//           <div className="w-full max-w-md mt-8">
//             <PlaceholderForm />
//           </div>
//           <Footer />
//         </div>

//         {/* Left Section for Desktop */}
//         <div className="hidden md:flex flex-col items-center justify-center px-4 py-8 md:px-8">
//           <Image
//             className="pt-10 max-w-full h-auto"
//             src={"/property-toolkit-logo.svg"}
//             alt="logo"
//             width={520}
//             height={200}
//           />
//           <h2 className="mt-6 text-2xl font-semibold text-center text-gray-800">
//             We hope you&apos;re enjoying the Landlord Investment Show
//           </h2>
//           <p className="mt-4 text-center text-gray-600 max-w-lg">
//             Get your Property Investment Edge and claim your first 14 days free
//             &amp; get our HMO Package for FREE for the first 90 days
//           </p>
//           <div className="w-full max-w-md mt-8">
//             <PlaceholderForm />
//           </div>
//           <Footer />
//         </div>

//         {/* Right Section - Full Page Split Placeholder Image for Desktop */}
//         <div className="hidden md:flex h-full w-full">
//           <Image
//             className="object-cover w-full h-full"
//             src="/property.jpg"
//             alt="Property image"
//             width={1000}
//             height={1000}
//           />
//         </div>
//       </main>
//     </>
//   );
// }

// export default function Home() {
//   return (
//     <>
//       <main className="md:flex-row h-screen grid grid-cols-1 md:grid-cols-2">
//         {/* Left Section */}
//         <div className="flex flex-col items-center justify-center w-full px-4 py-8 md:px-8">
//           <Image
//             className="pt-10 max-w-full h-auto"
//             src={"/property-toolkit-logo.svg"}
//             alt="logo"
//             width={520}
//             height={200}
//           />
//           <h2 className="mt-6 text-2xl font-semibold text-center text-gray-800">
//             We hope you&apos;re enjoying the Landlord Investment Show
//           </h2>
//           <p className="mt-4 text-center text-gray-600 max-w-lg">
//             Get your Property Investment Edge and claim your first 14 days free
//             &amp; get our HMO Package for FREE for the first 90 days
//           </p>
//           <div className="w-full max-w-md mt-8">
//             <PlaceholderForm />
//           </div>
//           <Footer />
//         </div>

//         {/* Right Section - Full Page Split Placeholder Image */}
//         <div className="h-full order-1">
//           <Image
//             className="object-cover md:h-full h-[50vh] hidden md:block"
//             src="/property.jpg"
//             alt="Placeholder Image"
//             width={1000}
//             height={1000}
//           />
//         </div>
//       </main>
//     </>
//   );
// }

// export default function Home() {
//   return (
//     <>
//       <main className="flex flex-col items-center justify-center  px-4 py-8">
//         <Image
//           className="pt-10 max-w-full h-auto"
//           src={"/property-toolkit-logo.svg"}
//           alt="logo"
//           width={520}
//           height={200}
//         />
//         <h2 className="mt-6 text-2xl font-semibold text-center text-gray-800">
//           We hope you&apos;re enjoying the Landlord Investment Show
//         </h2>
//         <p className="mt-4 text-center text-gray-600 max-w-lg">
//           Get your Property Investment Edge and claim your first 14 days free
//           &amp; get our HMO Package for FREE for the first 90 days
//         </p>
//         <div className="w-full max-w-md mt-8">
//           <PlaceholderForm />
//         </div>
//         <Footer />
//       </main>
//     </>
//   );
// }

// export default function Home() {
//   return (
//     <>
//       <main className="flex justify-center items-center flex-col">
//         <Image
//           className="flex pt-10"
//           src={"/property-toolkit-logo.svg"}
//           alt="logo"
//           width={520}
//           height={200}
//         />
//         <h2 className="">
//           We hope you&apos;re enjoying the Landlord Investment Show
//         </h2>
//         <p>
//           Get your Property Investment Edge and Claim your first 14 days free &
//           get our HMO Package for FREE for the first 90 days
//         </p>
//         <PlaceholderForm />
//         <Footer />
//       </main>
//     </>
//   );
// }
