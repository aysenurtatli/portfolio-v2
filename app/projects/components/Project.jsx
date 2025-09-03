"use client"
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

const Project = ({ title, lists }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); 
  }, []);

  if (!isClient) return null; 

  return (
    <div>
      <h3 className="text-zinc-300 font-mono text-[20px] font-bold my-5">{title}</h3>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        navigation={true}
        observer={true}
        observeParents={true}
        modules={[Autoplay, Pagination, Navigation]}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="carousel-container"
      >
        {lists.map((list, index) => (
          <SwiperSlide key={index}>
            <Link href={list.href} target="_blank">
              <div className="relative rounded-xl h-auto p-4 bg-blue-800/10 backdrop-blur-md border border-white/20 hover:border-indigo-200 duration-200">
                <Image
                  src={list.image}
                  alt={list.name}
                  width={0}
                  height={0}
                  className="w-full h-auto rounded-md"
                />
                <p className="text-xl text-zinc-200 font-semibold my-4">{list.name}</p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Project;
