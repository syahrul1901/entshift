import React from "react";
import Image from "next/image";
import { ChatIcon } from "@heroicons/react/solid"; // Import ikon Chat dari Heroicons

function Cta() {
  const nomorWhatsapp = "+62895700990716";
  const whatsappLink = `https://wa.me/${nomorWhatsapp}`;

  const handleClick = () => {
    window.open(whatsappLink, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center z-0 space-x-2 bg-bg/100 shadow-orange-200/60 shadow-[0_20px_35px] px-5 py-2 hover:bg-orange-600 text-white rounded-xl transition-colors cursor-pointer"
    >
      <Image
        src="images/logowa.svg"
        alt=""
        width={30}
        height={30}
        className="w-6 md:w-8 mx-auto"
      />
      {/* Ikon WhatsApp */}
      <span>Hubungi Kami</span>
    </button>
  );
}

export default Cta;
