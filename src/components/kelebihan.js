import Image from "next/image";

function Kelebihan() {
  return (
    <div className="">
      <div className="container max-w-6xl mx-auto px-3 ">
        <div className="flex flex-wrap">
          <div className="w-full self-center px-4 lg:w-1/2">
            <h1 className="font-sans text-3xl md:text-[40px] font-bold text-gray-950 leading-snug mb-10">
              Kelebihan Aplikasi{" "}
              <span className="text-orange-500">EntShift</span>
            </h1>
            <ul className="flex flex-col gap-y-5">
              <li className="flex">
                <span className="bg-primary rounded-xl flex flex-none text-white items-center justify-center mt-1 w-10 h-10">
                  <span className="material-symbols-outlined">rocket</span>
                </span>
                <div className="flex flex-col ml-4 leading-5">
                  <h6 className="font-bold mb-1 text-base text-text">
                    Flexsible
                  </h6>
                  <p className="font-sans text-sm text-gray-700">
                    Aplikasi ini memungkinkan karyawan untuk melakukan absensi
                    tanpa harus berada di kantor, sehingga mendukung gaya kerja
                    fleksibel seperti bekerja dari rumah atau lokasi jarak jauh.
                  </p>
                </div>
              </li>
              <li className="flex ">
                <span className="bg-primary rounded-xl flex flex-none text-white items-center justify-center mt-1  w-10 h-10">
                  <span className="material-symbols-outlined">
                    data_thresholding
                  </span>
                </span>
                <div className="flex flex-col ml-4 leading-5">
                  <h6 className="font-bold mb-1 text-base text-text">
                    Lebih Praktis
                  </h6>
                  <p className="font-sans text-sm text-gray-700">
                    Melalui aplikasi absensi mobile, karyawan memiliki kemudahan
                    untuk melakukan absensi melalui perangkat seluler mereka, di
                    lokasi mana pun, tanpa perlu berada di kantor secara fisik.
                  </p>
                </div>
              </li>
              <li className="flex ">
                <span className="bg-primary rounded-xl flex flex-none text-white items-center justify-center mt-1 w-10 h-10">
                  <span className="material-symbols-outlined">
                    watch_screentime
                  </span>
                </span>
                <div className="flex flex-col ml-4 leading-5">
                  <h6 className="font-bold mb-1 text-base text-text">
                    Pemantauan Real-time
                  </h6>
                  <p className="font-sans text-sm  text-gray-700">
                    Management dapat melihat absensi karyawan secara real-time,
                    yang memungkinkan mereka untuk mengambil tindakan segera
                    jika ada keterlambatan atau ketidakhadiran yang tidak
                    tercatat.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="w-full self-end px-4 lg:w-1/2">
            <div className="relative mt-10">
              <div className="relative lg:mt-0 lg:right-0">
                <Image
                  width={400}
                  height={400}
                  src="/images/decorkelebihan.svg"
                  alt=""
                  className="lg:max-w-full md:w-2/4 mx-auto w-3/4 "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Kelebihan;
