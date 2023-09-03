import React from "react";
import { ChatIcon } from "@heroicons/react/solid"; // Import ikon Chat dari Heroicons

function Cta1() {
  const nomorWhatsapp = "+62895700990716";
  const whatsappLink = `https://wa.me/${nomorWhatsapp}`;

  const handleClick = () => {
    window.open(whatsappLink, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center space-x-2 bg-bg shadow-orange-500/10  hover:bg-orange-600 shadow-[0_10px_35px] px-4 py-2 text-white text-sm rounded-3xl cursor-pointer"
    >
      <span>Hubungi Kami</span>
    </button>
  );
}

export default Cta1;
