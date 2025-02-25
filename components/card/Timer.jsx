"use client";
import React, { useState, useEffect } from "react";

function Timer() {
  const targetDate = new Date("2024-12-31T00:00:00Z");

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
      return {
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      };
    }

    const formatNumber = (num) => String(num).padStart(2, "0");

    return {
      days: formatNumber(Math.floor(difference / (1000 * 60 * 60 * 24))),
      hours: formatNumber(Math.floor((difference / (1000 * 60 * 60)) % 24)),
      minutes: formatNumber(Math.floor((difference / 1000 / 60) % 60)),
      seconds: formatNumber(Math.floor((difference / 1000) % 60)),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Cleanup the interval
  }, []);

  return (
   
      <div className="uppercase flex items-center justify-center gap-4 w-max mx-auto relative mt-[4px] font-style">
        {["day(s)", "hour(s)", "minute(s)", "second(s)"].map((unit, index) => {
          const values = [timeLeft.days, timeLeft.hours, timeLeft.minutes, timeLeft.seconds];
          return (
            <div key={index} className="flex flex-col gap-1 items-center relative">
              <span className="text-[36px] 3xl:text-[40px] tracking-[4px] leading-[1]">{values[index]}</span>
              <span className="text-[7px] 3xl:text-[8px] tracking-[1.1px]">{unit}</span>
              {index < 3 && (
                <div className="w-[1px] h-[85%] bg-current absolute bottom-0.5 -right-1.5"></div>
              )}
            </div>
          );
        })}
      </div>

  );
}

export default Timer;

