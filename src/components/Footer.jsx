import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex justify-between mt-10 bottom-0 flex-col md:flex-row w-[90%] pb-8">
      <span className="font-[400] text-[14px] pb-4 md:pb-0">
        2024 propertytoolkit. All rights reserved.
      </span>
      <div className="flex space-x-6">
        <Link
          className="font-[900] text-[14px] border-b-2 border-[#000]"
          href="/privacy-policy"
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
