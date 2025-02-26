"use client";

import React, { useState, useEffect } from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";

const images = [
  "/assest/22335.jpg",
  "/assest/24342.jpg",
  "/assest/63421.jpg",
  "/assest/131123.jpg",
  "/assest/424221.jpg",
  "/assest/535421.jpg",
];

const UpperSection = ({ flagImage }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [progress, setProgress] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    let progressInterval;
    let imageTimeout;

    const startLoading = () => {
      setProgress(0);
      progressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(progressInterval);
            return 100;
          }
          return prev + 2; // Increase progress
        });
      }, 100);

      // Move to the next image when loading completes
      imageTimeout = setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000); // Change image after 5 seconds
    };

    startLoading();

    return () => {
      clearInterval(progressInterval);
      clearTimeout(imageTimeout);
    };
  }, [currentImageIndex]);

  return (
    <div className="text-white w-full h-[211.5px] 3xl:h-[275px]">
      <div className="relative overflow-hidden group">
        <div className="relative overflow-hidden">
          {/* Sliding Container */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translate3d(-${currentImageIndex * 100}%, 0, 0)`,
            }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="w-full h-[211.5px] 3xl:h-[275px] bg-cover bg-center shrink-0"
                style={{
                  backgroundImage: `url(${image})`,
                }}
              ></div>
            ))}
          </div>
        </div>

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
        {/* Previous Button - Hide if first image */}
        {currentImageIndex > 0 && (
          <div className="absolute top-1/2 left-6 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button className="rounded-full text-white" onClick={prevImage}>
              <img
                src="/assest/Path2.png"
                alt="previous-button"
                className="h-[16px] 3xl:h-[18px]"
              />
            </button>
          </div>
        )}

        {/* Next Button - Hide if last image */}
        {currentImageIndex < images.length - 1 && (
          <div className="absolute top-1/2 right-6 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button className="rounded-full text-white" onClick={nextImage}>
              <img
                src="/assest/Path1.png"
                alt="next-button"
                className="h-[16px] 3xl:h-[18px]"
              />
            </button>
          </div>
        )}

        {/* Share And Like */}
        <div className="absolute bottom-2 3xl:bottom-3 right-3 3xl:right-5">
          {isLiked ? (
            <img
              src="/assest/Logo/Heart Favourite Red (Model).svg"
              alt="red-heart"
              className="cursor-pointer md:w-[19px] 3xl:w-[25px] transition-transform duration-300 transform hover:scale-125"
              onClick={() => setIsLiked(false)}
            />
          ) : (
            <img
              src="/assest/Logo/Heart Standard (Model).svg"
              alt="red-heart"
              className="cursor-pointer md:w-[19px] 3xl:w-[25px] transition-transform duration-300 transform hover:scale-125"
              onClick={() => setIsLiked(true)}
            />
          )}
        </div>

        {/* Slide Indicators with Loading Effect */}
        <div className="absolute bottom-4 flex w-full justify-center">
          {images.map((_, index) => (
            <div
              key={index}
              className="relative mx-1 w-[16px] h-[1.5px] bg-gray-400 overflow-hidden rounded-full"
            >
              {index === currentImageIndex && (
                <div
                  className="h-full bg-white transition-all duration-500"
                  style={{ width: `${progress}%` }}
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpperSection;
