// import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <nav className="bg-white">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 max-lg:justify-between">
        <div className="flex py-5 justify-between">
          <div className="shrink-0 flex items-center">
            {/* <Link href="https://propertytoolkit.io/sale"> */}
            <Image
              className="block"
              src={"/property-toolkit-logo.svg"}
              alt="logo"
              width={220}
              height={51}
            />
            {/* </Link> */}
          </div>
          <a href="#cta-form">
            <button className="px-6 pb-2 md:px-8 py-2 md:py-3 bg-pt-orange text-white font-semibold rounded-lg hover:bg-[#d85a2a] transition duration-200">
              Start Now
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
}
