import react from "react";
import Image from "next/image";

function Ctaplaystore() {
  const playstoreLink = `https://play.google.com/store/apps/eventdetails/4828923920322845534?hl=id-ID`;
  const handleClick = () => {
    window.open(playstoreLink, "blank");
  };
  return (
    <button
      onClick={handleClick}
      className="m-4 text-black inline-flex items-center justify-center px-4 py-2.5 cursor-pointer"
    >
      <Image
        src="images/playstore.svg"
        alt=""
        width={30}
        height={30}
        className="w-6 md:w-8 mx-auto"
      />
      <div className="text-left pl-2">
        <div className="mb-1 text-xs text-black font-bold">Get in on</div>
        <div className="-mt-1 font-sans text-sm">Google Play</div>
      </div>
    </button>
  );
}
export default Ctaplaystore;
