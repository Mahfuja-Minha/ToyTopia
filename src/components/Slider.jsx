import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { Autoplay, Pagination } from "swiper/modules";

const Slider = () => {
  return (
    <div className="w-full mx-auto rounded-xl overflow-hidden shadow-lg">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper h-[450px] "
      >
        <SwiperSlide>
          <img
            src="image-2.avif"
            className="w-full h-full object-cover object-center"
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="image.webp"
            className="w-full h-full object-cover object-center"
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="image-3.jpg"
            className="w-full h-full object-cover object-center"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="image-4.jpg"
            className="w-full h-full object-cover object-center"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
