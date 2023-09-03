import react from "react";
import Cta from "./cta";

function Cta2() {
  return (
    <>
      <div className="container max-w-4xl px-8 lg:px-0 mx-auto">
        <div className="rounded-2xl bg-bg text-white my-4 flex flex-col md:flex-row space-between items-center justify-between relative overflow-hidden">
          <div className="flex flex-col lg:ml-14 xl:ml-10 max-w-sm lg:max-w-xl z-10">
            <h4 className="text-xl lg:text-3xl text-center md:text-left md:pl-6 font-bold text-white pt-6 pb-2 md:pb-2 md:pt-2">
              Punya Pertanyaan lain?
            </h4>
            <p className="text-center text-sm md:pl-6 md:text-left text-white opacity-90 md:pb-6 px-2">
              Tidak mendapatkan jawaban yang diinginkan? Silahkan Hubingi Tim
              Kami.
            </p>
          </div>
          <div className="pt-5 pr-8 md:pt-0 justify-center lg:ml-auto z-10 ">
            <Cta />
          </div>

          <p className="pt-8 text-xs block md:hidden z-10 text-white"></p>

          <div className="absolute bg-orange-400 opacity-60 w-96 h-96 -top-10 -right-16 md:w-[800px] md:h-[800px] md:left-[45%] md:top-[-150%] rounded-full shadow-2xl z-0"></div>
        </div>
      </div>
      <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
        <div></div>
      </div>
    </>
  );
}

export default Cta2;
