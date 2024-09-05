import Footer from "@/components/Footer";
import PlaceholderForm from "@/components/PlaceholderForm";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center justify-center  px-4 py-8">
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
      </main>
    </>
  );
}

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
