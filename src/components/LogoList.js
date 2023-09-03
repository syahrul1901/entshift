import React from "react";
import Image from "next/image";

const LOGOS = [
  <Image
    src="/images/sponsor/pngwing1.png"
    alt=""
    key="logo1"
    width={60}
    height={60}
  />,
  <Image
    src="/images/sponsor/pngwing.com (2).png"
    alt=""
    key="logo1"
    width={60}
    height={60}
  />,
  <Image
    src="/images/sponsor/pngwing.com (3).png"
    alt=""
    key="logo1"
    width={60}
    height={60}
  />,
  <Image
    src="/images/sponsor/pngwing.com (4).png"
    alt=""
    key="logo1"
    width={80}
    height={80}
  />,
  <Image
    src="/images/sponsor/pngwing.com (5).png"
    alt=""
    key="logo1"
    width={60}
    height={60}
  />,
  <Image
    src="/images/sponsor/pngwing.com (6).png"
    alt=""
    key="logo1"
    width={100}
    height={100}
  />,
  <Image
    src="/images/sponsor/pngwing.com (7).png"
    alt=""
    key="logo1"
    width={60}
    height={60}
  />,
  <Image
    src="/images/sponsor/pngwing.com (8).png"
    alt=""
    key="logo1"
    width={60}
    height={60}
  />,
  <Image
    src="/images/sponsor/pngwing.com (9).png"
    alt=""
    key="logo1"
    width={60}
    height={60}
  />,
  <Image
    src="/images/sponsor/pngwing.com (10).png"
    alt=""
    key="logo1"
    width={60}
    height={60}
  />,
];

export const LogoList = () => {
  return (
    <div className="relative m-auto w-[400px] md:w-[1500px] overflow-hidden before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] after:content-['']">
      <div className="animate-infiniteslider flex w-[calc(250px*10)] md:w-[calc(250px*10)]">
        {LOGOS.map((logo, index) => (
          <div
            className="slide scale-90 flex w-[125px] md:w-[125px] items-center justify-center"
            key={index}
          >
            {logo}
          </div>
        ))}
        {LOGOS.map((logo, index) => (
          <div
            className="slide scale-90 flex w-[125px] md:w-[125px] items-center justify-center"
            key={index}
          >
            {logo}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoList;
