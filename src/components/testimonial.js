import react, { useState, useRef, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";

import Image from "next/image";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectCreative,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const items = [
  {
    id: "1",
    desc: "Entshift memberikan kemudahan bagi karyawan dan tim SDM dalam pembuatan laporan. Tim Entshift juga responsif dalam menyediakan informasi dan menjaga kerahasiaan data. Semoga kerja sama ini terus berlanjut. Terima kasih kepada Entshift.",
    image: "user1.jpg",
    author: "Dimas Natsir",
    role: "Back-End",
  },
  {
    id: "1",
    desc: "Entshift memberikan kemudahan bagi karyawan dan tim SDM dalam pembuatan laporan. Tim Entshift juga responsif dalam menyediakan informasi dan menjaga kerahasiaan data. Semoga kerja sama ini terus berlanjut. Terima kasih kepada Entshift.",
    image: "user1.jpg",
    author: "nguyen ching",
    role: "Sumenep",
  },
  {
    id: "1",
    desc: "Entshift memberikan kemudahan bagi karyawan dan tim SDM dalam pembuatan laporan. Tim Entshift juga responsif dalam menyediakan informasi dan menjaga kerahasiaan data. Semoga kerja sama ini terus berlanjut. Terima kasih kepada Entshift.",
    image: "user1.jpg",
    author: "nguyen ching",
    role: "Sumenep",
  },
];

function Testimonial() {
  const [realSlide, setRealSlide] = useState(0);
  const swiper = useRef(null);

  const fnPrev = React.useCallback(() => {
    if (realSlide > 0) swiper?.current?.slidePrev();
  }, [swiper, realSlide]);

  const fnNext = React.useCallback(() => {
    if (realSlide < items.length) swiper?.current?.slideNext();
  }, [swiper, realSlide]);

  return (
    <div className="max-w-full lg:max-w-6xl mx-auto relative px-4">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-5/12 pl-2 lg:pl-8 lg:pr-16">
          <div className="flex flex-col mb-16">
            <h6 className="fomt-sans uppercase text-base text-gray-500">
              Testimonial
            </h6>
            <h6 className="font-sans font-bold text-3xl pr-5 lg:text-[40px] leading-snug text-gray-900 mb-5">
              <p> Apa yang orang katakan tentang</p>
              <span className="text-orange-500">Entshift</span>
            </h6>
            <ul className="flex gap-x-6 z-30 md:pl-0 pl-2">
              {items.map((item, i) => {
                return (
                  <li
                    key={item.id}
                    className={[
                      "w-2 h-2 rounded-full",
                      i === realSlide ? "bg-gray-600" : "bg-gray-400",
                    ].join(" ")}
                    onClick={() =>
                      i !== realSlide && swiper?.current?.slideTo(i)
                    }
                  ></li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-6/12 flex item-center justify-center relative h-[320px] lg:h-auto">
          <div className="absolute -inset-4 lg:-inset-10 lg:-top-20">
            <Swiper
              modules={[
                Navigation,
                Pagination,
                Scrollbar,
                A11y,
                Autoplay,
                EffectCreative,
              ]}
              spaceBetween={50}
              slidesPerView={1}
              effect="creative"
              creativeEffect={{
                prev: {
                  translate: [10, 30, 0],
                },
                next: {
                  translate: ["-100%", "-50%", 0],
                },
              }}
              simulateTouch={false}
              onSlideChange={(s) => setRealSlide(s.realIndex)}
              onSwiper={(s) => {
                swiper.current = s;
              }}
            >
              {items.map((item) => {
                return (
                  <SwiperSlide key={item.id}>
                    <div className="relative px-12 lg:px-32 lg:pb-20 pt-10 lg:pt-20 pb-20">
                      <div className="relative">
                        <div className="bg-white shadow-gray-300/50 shadow-lg rounded-xl p-6 relative z-20">
                          <span className="w-13 h-13 absolute top-0 left-0 overflow-hidden transform -translate-x-1/3 -translate-y-1/3 rounded-full flex-none mr-3">
                            <Image
                              className="object-cover h-14 w-14"
                              alt=""
                              width={50}
                              height={50}
                              src={`/images/${item.image}`}
                            />
                          </span>
                          <p className="text-gray-600 mb-4 mt-5 px-2">
                            {item.desc}
                          </p>

                          <h6 className="text-gray-900 text-lg px-2">
                            {item.author}
                          </h6>
                          <h6 className="text-gray-500 text-sm px-2">
                            {item.role}
                          </h6>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
        <div className="hidden lg:flex lg:w-1/12 items-center justify-center">
          <div className="flex flex-col">
            <button
              onClick={fnPrev}
              className={[
                realSlide === 0 ? "text-gray-300" : "text-gray-800",
              ].join(" ")}
            >
              <span className="material-symbols-outlined ml-5">
                keyboard_arrow_up
              </span>
            </button>
            <button
              onClick={fnNext}
              className={[
                realSlide === items.length - 1
                  ? "text-gray-300"
                  : "text-gray-800",
              ].join(" ")}
            >
              <span className="material-symbols-outlined ml-5">
                keyboard_arrow_down
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Testimonial;
