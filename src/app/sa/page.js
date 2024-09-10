import Footer from "@/components/Footer";
import PlaceholderForm from "@/components/PlaceholderForm";
import Image from "next/image";

export default function sa() {
  return (
    <>
      <main className="grid grid-cols-1 md:grid-cols-2 h-screen">
        {/* Mobile Image with Overlay Content */}
        <div className="relative block md:hidden h-[50vh] w-full">
          <Image
            className="object-cover w-full h-full"
            src="/property.jpg" // Replace with actual image path
            alt="Top Background Image"
            width={1600}
            height={800}
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
              Attention all Serviced Accommodation Investors
            </h2>
            <p className="mt-2 text-center max-w-sm p-2">
              We have a cutting-edge product coming to the marketing in November
              2024. Sign up using the form below for early access and your first
              14 days on us.
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
            Attention all Serviced Accommodation Investors
          </h2>
          <p className="mt-4 text-center text-gray-600 max-w-lg">
            We have a cutting-edge product coming to the marketing in November
            2024. Sign up using the form below for early access and your first
            14 days on us.
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
            src="/property.jpg" // Replace with actual image path
            alt="Placeholder Image"
            width={1000}
            height={1000}
          />
        </div>
      </main>
    </>
  );
}
