import react from "react";
import Image from "next/image";
import Cta from "components/cta";
import Ctaplaystore from "components/Ctaplaystore";
import Ctaapplestore from "components/Ctaaplestore";
import Ctaplaystore2 from "components/CtaPlaysote2";

const nomorWhatsapp = "+62895700990716";
const whatsappLink = `https://wa.me/${nomorWhatsapp}`;

const handleClick = () => {
  window.open(whatsappLink, "_blank");
};

export default function Footer() {
  return (
    <footer className="relative bg-white border shadow-inner pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex justify-center lg:justify-start py-2">
              <Image id="logo" src="logo.svg" alt="" width={144} height={144} />
            </div>
            <div className="mt-5 flex justify-center lg:justify-start lg:mb-0 mb-6">
              <button
                onClick={handleClick}
                className="bg-white px-2 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              >
                <Image src="images/logowa.svg" alt="" width={25} height={25} />
              </button>
              <button
                onClick={handleClick}
                className="bg-white px-2 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              >
                <Image
                  src="images/facebook.svg"
                  alt=""
                  width={25}
                  height={25}
                />
              </button>
              <button
                onClick={handleClick}
                className="bg-white px-2 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              >
                <Image
                  src="images/instagram.svg"
                  alt=""
                  width={25}
                  height={25}
                />
              </button>
              <button
                onClick={handleClick}
                className="bg-white px-2 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              >
                <Image
                  src="images/linkedin.svg"
                  alt=""
                  width={25}
                  height={25}
                />
              </button>
            </div>
            <div className=" flex justify-end lg:justify-start mt-3 left-4 ">
              <Ctaplaystore2 />
              <Ctaapplestore />
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mt-5 mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                  Tentang Kami
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="/about"
                    >
                      Tentang
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href=""
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href=""
                    >
                      Free Products
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                  Layanan
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href=""
                    >
                      Harga Paket
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href=""
                    >
                      Panduan Aplikasi
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href=""
                    >
                      Keamanan Layanan
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href=""
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-black" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-blueGray-500 font-semibold py-1">
              Copyright © <span id="get-current-year">2023</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
