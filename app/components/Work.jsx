"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

const Work = ({ title, lists }) => {
  return (
    <div>
      <h3 className="text-zinc-300 text-[20px] font-bold my-5">{title}</h3>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        loop={true}
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Autoplay, Navigation, Pagination]}
        className="carousel-container"
      >
        {lists.map((list, index) => (
          <SwiperSlide key={index}>
            <div className="relative overflow-hidden rounded-md">
              <Link href={list.href} target="_blank">
                <img
                  src={list.image}
                  alt={list.alt}
                  className="w-full h-auto object-cover hover:scale-105 duration-200"
                />
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Work;
