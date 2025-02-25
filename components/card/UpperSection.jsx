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

const UpperSection = ({ flagImage }) => {
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
      <div className="relative overflow-hidden group">
        {/* Background Image Carousel */}
        <div
          className="h-[275px] bg-cover bg-center relative"
          style={{
            backgroundImage: `url(${images[currentImageIndex]})`,
          }}
        ></div>

        <div className="absolute top-3 3xl:top-5 left-3 3xl:left-5">
          {/* Left Logo */}
          <img
            src="/assest/Logo/ZigPro.svg"
            alt="ZigPro Logo"
            className="h-[19px] 3xl:h-[25px] opacity-50"
          />
        </div>
        <div className="absolute top-3 3xl:top-5 right-3 3xl:right-5">
          {/* Right Flag (Dynamic) */}
          <img src={flagImage} alt="Flag" className="h-[19px] 3xl:h-[25px]" />
        </div>

        {/* Navigation Buttons (Hidden by default, visible on hover) */}
        <div className="absolute top-1/2 left-6 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="rounded-full text-white" onClick={prevImage}>
            <img src="/assest/Path2.png" alt="previous-button" />
          </button>
        </div>
        <div className="absolute top-1/2 right-6 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="rounded-full text-white" onClick={nextImage}>
            <img src="/assest/Path1.png" alt="next-button" />
          </button>
        </div>

        {/* Share And Like */}
        <div className="absolute bottom-2 3xl:bottom-3 right-3 3xl:right-5">
          {isLiked ? (
            <IoMdHeart
              className="cursor-pointer text-red-500 md:w-[19px] 3xl:w-[25px]"
              onClick={() => setIsLiked(false)}
            />
          ) : (
            <FaRegHeart
              className="cursor-pointer text-white md:w-[19px] 3xl:w-[25px] opacity-40"
              onClick={() => setIsLiked(true)}
            />
          )}
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 flex w-full justify-center">
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
