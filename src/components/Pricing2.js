import { SpeakerModerateIcon } from "@radix-ui/react-icons";
import React from "react";
const Pricing2 = () => {
  const nomorWhatsapp = "+62895700990716";
  const whatsappLink = `https://wa.me/${nomorWhatsapp}`;
  const handleClick = () => {
    window.open(whatsappLink, "_blank");
  };
  return (
    <>
      <div className=" max-w-6xl mx-auto mb-20">
        <div className=" w-full mx-auto px-5 text-gray-600 mb-10 lg:pt-10">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="font-sans text-3xl font-bold md:text-[40px] md:font-bold text-textwhite mb-3">
              Harga Paket Aplikasi EntShift
            </h1>
            <h3 className="text-sm md:text-base font-sans text-white px-5">
              Temukan paket yang sesuai dengan kebutuhan bisnis Anda
            </h3>
          </div>

          <div className="flex-wrap max-w-4xl mx-10 md:mx-auto md:flex z-50">
            <div className="w-full md:w-1/3 md:max-w-1/3 bg-white px-10 md:px-5 py-8 md:py-10 mb-3 mx-auto md:my-6 shadow-md shadow-gray-500 overflow-hidden mt-5 transform hover:scale-105 duration-500 ease-in-out rounded-md md:flex md:flex-col">
              <div className="w-full flex-grow">
                <h2 className="text-center font-bold uppercase mb-6 text-3xl -mt-3 bg-gradient-to-tr from-emerald-500 to-teal-600 bg-clip-text text-transparent">
                  Gratis
                </h2>
                <div className="mt-3">
                  <p className="mb-2 text-center ">
                    <span className="align-top pr-1">Rp</span>
                    <span className="text-center font-bold text-4xl mb-5">
                      0
                    </span>
                    <span className="text-sm font-sans font-normal">
                      /Selamanya
                    </span>
                  </p>
                </div>
                <div className="mt-8 space-y-4">
                  <div className=" flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-5 h-5 text-orange-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span className="text-sm pl-2 font-sans">
                      Maksimal 2 Karyawan
                    </span>
                  </div>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-5 h-5 text-orange-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span className="text-sm pl-2 font-sans">
                      1 Lokasi Kehadiran
                    </span>
                  </div>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-5 h-5 text-orange-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span className="text-sm pl-2 font-sans">
                      1 Administrator
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full mt-12">
                <button
                  onClick={handleClick}
                  className="font-bold bg-gradient-to-br from-emerald-500 to-teal-600 hover:bg-gray-700 text-white rounded-md  py-2 transition-colors w-full"
                >
                  Hubungi Sales
                </button>
              </div>
            </div>

            <div className="w-full md:w-1/3 md:max-w-none bg-white px-10 md:px-5 py-8 md:py-10 mb-5 mx-auto md:mb-0 rounded-md shadow-md shadow-gray-400 overflow-hidden mt-5 transform hover:scale-105 duration-500 ease-in-out md:z-10 md:flex md:flex-col">
              <div className="w-full flex-grow">
                <h2 className="text-center font-bold uppercase mb-6 text-3xl -mt-3 bg-gradient-to-tr from-primary_1 to-orange-400 bg-clip-text text-transparent">
                  Basic
                </h2>
                <div className="mt-3">
                  <p className="mb-2 text-center ">
                    <span className="align-top pr-1">Rp</span>
                    <span className="text-center font-bold text-4xl mb-5">
                      0
                    </span>
                    <span className="text-sm font-sans font-normal">
                      /Selamanya
                    </span>
                  </p>
                </div>
                <div className="mt-8 space-y-4">
                  <div className=" flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-5 h-5 text-orange-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span className="text-sm pl-2 font-sans">
                      Maksimal 2 Karyawan
                    </span>
                  </div>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-5 h-5 text-orange-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span className="text-sm pl-2 font-sans">
                      1 Lokasi Kehadiran
                    </span>
                  </div>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-5 h-5 text-orange-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span className="text-sm pl-2 font-sans">
                      1 Administrator
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full mt-12">
                <button
                  onClick={handleClick}
                  className="font-bold bg-gradient-to-br from-primary_1 to-orange-400 hover:bg-gray-700 text-white rounded-md mx-auto py-2 transition-colors w-full"
                >
                  Hubungi Sales
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/3 md:max-w-none bg-white px-10 md:px-5 py-8 md:py-10 mb-3 mx-auto md:my-6 rounded-md shadow-md shadow-gray-400 overflow-hidden mt-5 transform hover:scale-105 duration-500 ease-in-out md:flex md:-z-0 md:flex-col">
              <div className="w-full flex-grow">
                <h2 className="text-center font-bold uppercase mb-6 text-3xl -mt-3 bg-gradient-to-tr from-red-600 to-red-400 bg-clip-text text-transparent">
                  PRO
                </h2>
                <div className="mt-3">
                  <p className="mb-2 text-center ">
                    <span className="align-top pr-1">Rp</span>
                    <span className="text-center font-bold text-4xl mb-5">
                      0
                    </span>
                    <span className="text-sm font-sans font-normal">
                      /Selamanya
                    </span>
                  </p>
                </div>
                <div className="mt-8 space-y-4">
                  <div className=" flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-5 h-5 text-orange-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span className="text-sm pl-2 font-sans">
                      Maksimal 2 Karyawan
                    </span>
                  </div>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-5 h-5 text-orange-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span className="text-sm pl-2 font-sans">
                      1 Lokasi Kehadiran
                    </span>
                  </div>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-5 h-5 text-orange-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span className="text-sm pl-2 font-sans">
                      1 Administrator
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full mt-12">
                <button
                  onClick={handleClick}
                  className="font-bold bg-gradient-to-br from-red-500 to-red-600 hover:bg-gray-700 text-white rounded-md py-2 transition-colors w-full"
                >
                  Hubungi Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10"></div>
    </>
  );
};
export default Pricing2;
