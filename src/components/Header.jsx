// import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <nav className="bg-white">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-5">
          {/* Logo: Smaller on mobile */}
          <div className="shrink-0 flex items-center">
            <Image
              className="block sm:hidden" // Smaller logo for mobile
              src={"/property-toolkit-logo-small.svg"} // Alternative smaller logo
              alt="logo"
              width={35} // Reduced width for smaller logo
              height={35} // Adjusted height for smaller logo
            />
            <Image
              className="hidden sm:block" // Regular logo for larger screens
              src={"/property-toolkit-logo.svg"}
              alt="logo"
              width={220}
              height={51}
            />
          </div>

          {/* Button: Ensure it fits on small screens */}
          <div className="ml-auto">
            <a href="#cta-form">
              <button className="px-4 sm:px-6 py-2 sm:py-3 bg-pt-orange text-white font-semibold rounded-lg hover:bg-[#d85a2a] transition duration-200">
                Start Now
              </button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

// export default function Header() {
//   return (
//     <nav className="bg-white">
//       <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 max-lg:justify-between">
//         <div className="flex py-5 justify-between">
//           <div className="shrink-0 flex items-center">
//             {/* <Link href="https://propertytoolkit.io/sale"> */}
//             <Image
//               className="block"
//               src={"/property-toolkit-logo.svg"}
//               alt="logo"
//               width={220}
//               height={51}
//             />
//             {/* </Link> */}
//           </div>
//           <a href="#cta-form">
//             <button className="px-6 pb-2 md:px-8 py-2 md:py-3 bg-pt-orange text-white font-semibold rounded-lg hover:bg-[#d85a2a] transition duration-200">
//               Start Now
//             </button>
//           </a>
//         </div>
//       </div>
//     </nav>
//   );
// }
