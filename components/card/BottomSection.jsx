"use client";
import Timer from "./Timer";

export default function BottomSection({ logoImage }) {
  return (
    <section className="flex flex-col w-full bg-white text-black dark:bg-black dark:text-white transition">
      {/* Countdown Timer */}
      <Timer />

      {/* Location */}
      <div className="text-[6px] 3xl:text-[8px] flex justify-center items-center gap-2 mt-[16px] tracking-[1px] uppercase">
        <p>London</p>
        <p>SW1A</p>
        <p>United Kingdom</p>
      </div>

      {/* Price */}
      <p className="text-[10.7px] 3xl:text-[14px] text-center my-[10px] 3xl:my-[16px] tracking-[0.6px]">
        <span dir="ltr">£</span>1,627,271 GBP
      </p>

      {/* Entry Button */}
      <div className="w-[75%] mx-auto flex flex-col gap-2.5 3xl:gap-4">
        <div className="h-[1px] 3xl:h-[2px] bg-black dark:bg-white"></div>

        <button className="text-[10.7px] 3xl:text-[14px] border border-black dark:border-white py-[8px] flex justify-evenly transition-all duration-300 bg-white dark:bg-black text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black tracking-[1.2px]">
          <p dir="ltr">
            <span dir="ltr">£</span>25.00 GBP
          </p>
          <p>BUY ENTRY NOW</p>
        </button>

        {/* Progress Bar */}
        <div>
          <div className="h-[1px] 3xl:h-[2px] relative bg-black/25 dark:bg-white/25">
            <div className="h-[1px] 3xl:h-[2px] absolute top-0 left-0 bg-black dark:bg-white"></div>
          </div>
          <p className="text-[7px] 3xl:text-[9px] mt-1.5">0%</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="px-[12px] 3xl:px-[20px] mt-auto pb-[12px] 3xl:pb-[20px] flex justify-between items-end">
        <p className="text-[7px] 3xl:text-[9px] tracking-[1px]">#ZM78612345622</p>
        <img
          src={logoImage}
          alt="Savills Logo"
          className="h-[18px] 3xl:h-[24px]"
        />
      </footer>
    </section>
  );
}
