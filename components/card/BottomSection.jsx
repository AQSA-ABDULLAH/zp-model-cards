"use client";

import Image from "next/image";

export default function BottomSection() {

  return (
    <section className="flex flex-col w-full max-w-sm mx-auto p-4 rounded-b-lg bg-gray-900 text-white">
      {/* Countdown Timer */}
      <div className="uppercase flex items-center justify-center gap-4 w-max mx-auto relative mt-1">
        {["days", "hours", "minutes", "seconds"].map((unit, index) => (
          <div key={index} className="flex flex-col gap-1 items-center relative">
            <span className="text-[36px] tracking-[4px] leading-[1]">kx</span>
            <span className="text-[7px] tracking-[1px]">{unit}</span>
            {index < 3 && <div className="w-[1px] h-[85%] bg-current absolute bottom-0.5 -right-1.5"></div>}
          </div>
        ))}
      </div>

      {/* Location */}
      <div className="text-[8px] flex justify-center items-center gap-2 mt-2.5">
        <p>London</p>
        <p>SW1A</p>
        <p>United Kingdom</p>
      </div>

      {/* Price */}
      <p className="text-[14px] text-center my-2.5">
        <span dir="ltr">£</span>1,627,271 GBP
      </p>

      {/* Entry Button */}
      <div className="w-[75%] mx-auto flex flex-col gap-2.5">
        <div className="h-[1px] bg-current"></div>
        <button className="text-[14px] border border-white py-2 flex justify-evenly transition-all duration-300 hover:bg-white hover:text-black">
          <p dir="ltr">
            <span dir="ltr">£</span>25.00 GBP
          </p>
          <p>BUY ENTRY NOW</p>
        </button>

        {/* Progress Bar */}
        <div>
          <div className="h-[2px] relative bg-white/25">
            <div className="h-[2px] absolute top-0 left-0 bg-current" style={{ width: "0%" }}></div>
          </div>
          <p className="text-[9px] mt-1.5">0%</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="px-5 mt-auto pb-5 flex justify-between items-end">
        <p className="text-[9px]">#ZM78612345622</p>
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
