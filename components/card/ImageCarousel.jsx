"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [
  "/assest/2313.jpg",
  "/assest/22335.jpg"
];

export default function ImageCarousel() {
  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        className="h-[211.5px] 3xl:h-[275px]"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="relative">
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              fill
              className="object-cover rounded-lg"
              priority={index === 0}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
