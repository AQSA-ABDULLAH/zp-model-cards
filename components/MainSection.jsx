"use client";
import React, { useState, useEffect } from "react";
import Card from "./card/Card";
import SplashScreen from "./card/SplackScreen"; // Import SplashScreen component

const flagImages = [
  "/assest/Logo/Group 6394.png",
  "/assest/Logo/SPAIN.png",
  "/assest/Logo/UNITED ARAB EMIRATES.png",
  // "/assest/Logo/UNITED STATES.png",
];

const logoImages = [
  "/assest/agents_logos/Barnes_IR.svg",
  "/assest/agents_logos/Savills.svg",
  // "/assest/agents_logos/John_Taylor.svg",
  "/assest/agents_logos/Knight Frank.svg",
];

function MainSection() {
  const [theme, setTheme] = useState("light");
  const [showSplash, setShowSplash] = useState(true);

  // Remove splash screen after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // Toggle Theme
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="font-lato">
      {/* Show Splash Screen for 3 seconds */}
      {showSplash ? (
        <SplashScreen />
      ) : (
        <>
          {/* Theme Toggle Button */}
          <div className="flex justify-end p-4">
            <button
              className="px-4 py-2 border rounded-md text-white bg-black dark:bg-white dark:text-black transition"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              {theme === "light" ? "Dark Mode" : "Light Mode"}
            </button>
          </div>

          {/* Cards */}
          <div className="flex p-[60px] justify-between bg-[black] dark:bg-[white]">
            {flagImages.map((flag, index) => (
              <Card key={index} flagImage={flag} logoImage={logoImages[index]} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default MainSection;


