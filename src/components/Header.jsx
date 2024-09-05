import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-lg:flex max-lg:justify-between">
        <div className="flex py-5 justify-between">
          <div className="shrink-0 flex items-center">
            <Link href="https://propertytoolkit.io/sale">
              <Image
                className="block"
                src={"/images/logo.png"}
                alt="logo"
                width={220}
                height={51}
              />
            </Link>
          </div>
          <div className="hidden lg:space-x-8 md:lg:space-x-4 sm:-my-px sm:ms-10 md:lg:flex items-center">
            <Link
              className="text-[20px] font-[400] border-b-[#353277] border-b-4 rounded"
              href="https://propertytoolkit.io/sale"
            >
              {" "}
              Sale{" "}
            </Link>
            <Link
              className="text-[20px] font-[400] pb-1"
              href="https://propertytoolkit.io/rent"
            >
              {" "}
              Rent{" "}
            </Link>
            <Link
              className="text-[20px] font-[400] pb-1"
              href="https://propertytoolkit.io/pricing"
            >
              {" "}
              Pricing{" "}
            </Link>
            <Link
              className="text-[20px] font-[400] pb-1"
              href="https://propertytoolkit.io/about"
            >
              {" "}
              About{" "}
            </Link>
            <Link
              className="px-[20px] py-[8px] border-[2px] border-[#BCBBCB] border-solid font-[400] text-[20px]"
              href="https://propertytoolkit.io/login"
            >
              {" "}
              Login{" "}
            </Link>
            <Link
              className="text-[20px] font-[400] pb-1"
              href="https://propertytoolkit.io/register"
            >
              {" "}
              Register{" "}
              <button className="px-[20px] py-[8px] bg-[var(--primary)] text-[#FFF] font-[400] text-[20px] uppercase">
                {" "}
                Try now for free{" "}
              </button>
            </Link>
          </div>
        </div>
        <div className="-me-2 flex items-center lg:hidden">
          <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
            <Image
              className="h-6 w-6"
              src={"/images/hamburger.svg"}
              alt="hamburger menu"
              width={24}
              height={24}
            />
          </button>
        </div>
      </div>
      <div className="hidden lg:hidden flex justify-center text-center pb-5">
        <div className="flex flex-col space-y-4">
          <Link
            className="text-[20px] font-[400] border-b-[#353277] border-b-4 rounded"
            href="https://propertytoolkit.io/sale"
          >
            {" "}
            Sale{" "}
          </Link>
          <Link
            className="text-[20px] font-[400] pb-1"
            href="https://propertytoolkit.io/rent"
          >
            {" "}
            Rent{" "}
          </Link>
          <Link
            className="text-[20px] font-[400] pb-1"
            href="https://propertytoolkit.io/pricing"
          >
            {" "}
            Pricing{" "}
          </Link>
          <Link
            className="text-[20px] font-[400] pb-1"
            href="https://propertytoolkit.io/about"
          >
            {" "}
            About{" "}
          </Link>
          <Link
            className="px-[20px] py-[8px] border-[2px] border-[#BCBBCB] border-solid font-[400] text-[20px]"
            href="https://propertytoolkit.io/login"
          >
            {" "}
            Login{" "}
          </Link>
          <Link
            className="text-[20px] font-[400] pb-1"
            href="https://propertytoolkit.io/register"
          >
            {" "}
            Register{" "}
            <button className="px-[20px] py-[8px] bg-[var(--primary)] text-[#FFF] font-[400] text-[20px] uppercase">
              {" "}
              Try now for free{" "}
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
