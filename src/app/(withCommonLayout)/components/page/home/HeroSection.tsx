"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { Image } from "@nextui-org/react";

const images = [
  "/banner1.jpg",
  "/banner2.jpg",
  "/banner3.jpg",
  "/banner4.jpg",
  "/banner5.jpg",
  "/banner6.jpg",
];

const HeroImages = () => {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={1}
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 2,
        },
      }}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={{ clickable: true }}
      modules={[EffectCoverflow, Pagination, Autoplay]}
      className="mySwiper">
      {images.map((src, index) => (
        <SwiperSlide key={index}>
          <Image
            isBlurred
            isZoomed
            src={src}
            alt={`Gallery Image ${index + 1}`}
            width="100%"
            height="auto"
            className="rounded-md"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroImages;
