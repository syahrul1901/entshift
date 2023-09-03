import react from "react";
import Image from "next/image";

function Ctaapplestore() {
  const Link = `https://play.google.com/store/apps/eventdetails/4828923920322845534?hl=id-ID`;
  const handleClick = () => {
    window.open(Link, "blank");
  };
  return (
    <button onClick={handleClick} className="-ml-8">
      <Image
        src="/images/applestore.svg"
        alt=""
        width={173}
        height={56}
        className="scale-75"
      />
    </button>
  );
}
export default Ctaapplestore;
