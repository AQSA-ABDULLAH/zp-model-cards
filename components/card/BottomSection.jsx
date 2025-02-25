"use client";

import Image from "next/image";
import Timer from "./Timer";

export default function BottomSection() {
  return (
    <section className="flex flex-col w-full h-[50%] bg-[#000] text-white">
      {/* Countdown Timer */}
      <Timer />

      {/* Location */}
      <div className="text-[8px] flex justify-center items-center gap-2 mt-[16px]">
        <p>London</p>
        <p>SW1A</p>
        <p>United Kingdom</p>
      </div>

      {/* Price */}
      <p className="text-[10.7px] 3xl:text-[14px] text-center my-2.5 3xl:my-[16px]">
        <span dir="ltr">£</span>1,627,271 GBP
      </p>

      {/* Entry Button */}
      <div className="w-[75%] mx-auto flex flex-col gap-2.5 3xl:gap-4">
        <div className="h-[1px] 3xl:h-[2px] bg-current"></div>

        <button className="text-[10.7px] 3xl:text-[14px] border border-white py-[8px] flex justify-evenly transition-all duration-300 hover:bg-white hover:text-black">
          <p dir="ltr">
            <span dir="ltr">£</span>25.00 GBP
          </p>
          <p>BUY ENTRY NOW</p>
        </button>

        {/* Progress Bar */}
        <div>
          <div className="h-[1px] 3xl:h-[2px] relative bg-white/25">
            <div
              className="h-[1px] 3xl:h-[2px] absolute top-0 left-0 bg-current"
            ></div>
          </div>
          <p className="text-[7px] 3xl:text-[9px] mt-1.5">0%</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="px-3 3xl:px-[20px] mt-auto pb-3 3xl:pb-[20px] flex justify-between items-end">
        <p className="text-[7px] 3xl:text-[9px]">#ZM78612345622</p>
        <Image
          src="https://zimopro.com/assets/temp/agents_logos/Savills.svg"
          alt="Savills Logo"
          width={60}
          height={24}
          className="h-[24px]"
        />
      </footer>
    </section>
  );
}
