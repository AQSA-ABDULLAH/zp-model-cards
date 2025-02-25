"use client";

import dynamic from "next/dynamic";
import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";

const images = [
  "/assest/22335.jpg",
  "/assest/24342.jpg",
  "/assest/63421.jpg",
  "/assest/131123.jpg",
  "/assest/424221.jpg",
  "/assest/534521.jpg",
  "/assest/535421.jpg",
];

const UpperSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="text-white w-full h-[275px]">
      <div className="relative rounded-t-2xl overflow-hidden">
        {/* Background Image Carousel */}
        <div
          className="h-[275px] bg-cover bg-center relative"
          style={{
            backgroundImage: `url(${images[currentImageIndex]})`,
          }}
        ></div>

        <div className="absolute flex justify-between items-center w-full top-3 px-3 z-20">
          {/* Left Logo */}
          <img
            src="/assest/Logo/ZigPro.svg"
            alt="ZigPro Logo"
            className="h-[16px] 3xl:h-[25px] opacity-50"
          />

          {/* Right Flag */}
          <img
            src="/assest/Logo/ZigPro.svg"
            alt="Flag"
            className="h-[16px] 3xl:h-[25px] opacity-50"
          />
        </div>

        {/* Navigation Buttons */}
        <div className="absolute top-1/2 left-6 transform -translate-y-1/2">
          <button className="rounded-full text-white" onClick={prevImage}>
            <img src="/assest/Path2.png" alt="previous-button" />
          </button>
        </div>
        <div className="absolute top-1/2 right-6 transform -translate-y-1/2">
          <button className="rounded-full text-white" onClick={nextImage}>
            <img src="/assest/Path1.png" alt="next-button" />
          </button>
        </div>

        {/* Share And Like */}
        <div className="absolute bottom-7 right-7">
          {isLiked ? (
            <IoMdHeart
              className="cursor-pointer text-red-500 w-5 h-5 md:w-6 md:h-6"
              onClick={() => setIsLiked(false)} // Toggle to unliked state
            />
          ) : (
            <FaRegHeart
              className="cursor-pointer text-white w-5 h-5 md:w-6 md:h-6"
              onClick={() => setIsLiked(true)} // Toggle to liked state
            />
          )}
        </div>

          {/* Slide Indicators */}
          <div className="absolute bottom-4 flex w-full justify-center ">
            {images.map((_, index) => (
              <span
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`cursor-pointer mx-1 h-0.5 w-5 md:w-3 ${
                  index === currentImageIndex ? "bg-gold" : "bg-gray-400"
                }`}
              ></span>
            ))}
          </div>
        </div>
      </div>

  );
};

export default UpperSection;
