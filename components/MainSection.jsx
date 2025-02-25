"use client";
import React, { useState, useEffect } from "react";
import Card from "./card/Card";

const flagImages = [
  "/assest/Logo/Group 6394.png",
  "/assest/Logo/SPAIN.png",
  "/assest/Logo/UNITED ARAB EMIRATES.png",
  "/assest/Logo/UNITED STATES.png",
];

const logoImages = [
  "https://zimopro.com/assets/temp/agents_logos/Savills.svg",
  "/assest/Logo/g12.png",
  "https://zimopro.com/assets/temp/agents_logos/Savills.svg",
  "/assest/Logo/g12.png",
];

function MainSection() {
  const [theme, setTheme] = useState("light");

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
      <div className="grid grid-cols-3 3xl:grid-cols-4 gap-10 p-12 justify-between bg-[black] dark:bg-[white]">
        {flagImages.map((flag, index) => (
          <Card key={index} flagImage={flag} logoImage={logoImages[index]} />
        ))}
      </div>
    </div>
  );
}

export default MainSection;

