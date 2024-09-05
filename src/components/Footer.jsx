import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex justify-between mt-20 pt-8 border-t-2 border-[#000] bottom-0 flex-col md:flex-row w-full">
      <span className="font-[400] text-[14px]">
        2023 propertytoolkit. All right reserved.
      </span>
      <div className="flex space-x-6">
        <Link
          className="font-[900] text-[14px] border-b-2 border-[#000]"
          href=""
        >
          Privacy Policy
        </Link>
        <Link
          className="font-[900] text-[14px] border-b-2 border-[#000]"
          href=""
        >
          Terms of Service
        </Link>
      </div>
    </div>
  );
}
