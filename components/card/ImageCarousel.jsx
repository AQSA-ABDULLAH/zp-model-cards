// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
// import Image from "next/image";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// const images = [
//   "/assest/2313.jpg",
//   "/assest/22335.jpg",
//   "/assest/24342.jpg",
//   "/assest/63421.jpg",
//   "/assest/131123.jpg",
//   "/assest/424221.jpg",
//   "/assest/534521.jpg",
//   "/assest/535421.jpg",
//   "/assest/5345211.jpg",
//   "/assest/7629812.jpg",
//   "/assest/ZP172561.png",
//   "/assest/ZP172594.jpg",
//   "/assest/ZP172597.jpg",
//   "/assest/ZP1725641.png"
// ];

// export default function ImageCarousel() {
//   return (
//     <div className="">
//       <Swiper
//         modules={[Navigation, Pagination]}
//         spaceBetween={10}
//         slidesPerView={1}
//         loop={true}
//         navigation
//         pagination={{ clickable: true }}
//         className="h-[211.5px] 3xl:h-[275px]"
//       >
//         {images.map((src, index) => (
//           <SwiperSlide key={index} className="relative">
//             <Image
//               src={src}
//               alt={`Slide ${index + 1}`}
//               fill
//               className="object-cover rounded-t-lg"
//               priority={index === 0}
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }
