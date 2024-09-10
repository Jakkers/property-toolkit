import Footer from "@/components/Footer";
import PlaceholderForm from "@/components/PlaceholderForm";
import Image from "next/image";

export default function hmo() {
  return (
    <>
      <main className="grid grid-cols-1 md:grid-cols-2 h-screen">
        {/* Mobile Image with Overlay Content */}
        <div className="relative block md:hidden h-[50vh] w-full">
          <Image
            className="object-cover w-full h-full"
            src="/property.jpg"
            alt="property image"
            layout="fill"
          />
          {/* Overlay Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-black bg-white/80 p-2">
            <Image
              src={"/property-toolkit-logo.svg"}
              alt="logo"
              width={300}
              height={150}
              className="mb-4"
            />
            <h2 className="text-2xl font-semibold text-center p-2">
              We hope you&apos;re enjoying the Landlord Investment Show
            </h2>
            <p className="mt-2 text-center max-w-sm p-2">
              Get your Property Investment Edge and claim your first 14 days
              free &amp; get our HMO Package for FREE for the first 90 days
            </p>
          </div>
        </div>

        {/* Content Below Overlay Image on Mobile */}
        <div className="block md:hidden flex-col items-center justify-center w-full px-4 py-2">
          <div className="w-full max-w-md mt-8">
            <PlaceholderForm />
          </div>
          <Footer />
        </div>

        {/* Left Section for Desktop */}
        <div className="hidden md:flex flex-col items-center justify-center px-4 py-8 md:px-8">
          <Image
            className="pt-10 max-w-full h-auto"
            src={"/property-toolkit-logo.svg"}
            alt="logo"
            width={520}
            height={200}
          />
          <h2 className="mt-6 text-2xl font-semibold text-center text-gray-800">
            We hope you&apos;re enjoying the Landlord Investment Show
          </h2>
          <p className="mt-4 text-center text-gray-600 max-w-lg">
            Get your Property Investment Edge and claim your first 14 days free
            &amp; get our HMO Package for FREE for the first 90 days
          </p>
          <div className="w-full max-w-md mt-8">
            <PlaceholderForm />
          </div>
          <Footer />
        </div>

        {/* Right Section - Full Page Split Placeholder Image for Desktop */}
        <div className="hidden md:flex h-full w-full">
          <Image
            className="object-cover w-full h-full"
            src="/property.jpg"
            alt="Property image"
            width={1000}
            height={1000}
          />
        </div>
      </main>
    </>
  );
}
