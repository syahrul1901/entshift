import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Cta2 from "components/cta2";
import Cta from "components/cta";

const About = () => {
  return (
    <>
      <Head>
        <title>EntShift</title>
        <meta name='description" content="EntiShift Software HR' />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <div id="#about" className="mb-20 mt-10 ">
          <div className="container max-w-full mx-auto pt-10">
            <div className="flex justify-center">
              <div className="max-w-4xl">
                <h1 className="font-sans font-bold text-3xl text-center text-textblackblue lg:font-bold lg:text-[40px] leading-snug mb-10 mt-5">
                  Tentang <span className="text-orange-500">EntShift</span>
                </h1>
                <p className="text-text text-left text-base max-w-10 leading-7 mx-4  mb-4 ">
                  PT Quadra Conary Indonesia adalah perusahaan penyedia platform
                  bisnis profesional dengan fokus yang kuat pada Human Resource
                  Information System (HRIS), Human Resource Management (HRM),
                  Talent Management dan Payroll Service.
                </p>
                <p className="text-text text-left text-base max-w-10 leading-7 mx-4  mb-4 ">
                  EntShift adalah sebuah produk aplikasi atau Software yang kami
                  usung, mampu menjadi solusi untuk membantu mengelola aktivitas
                  HR dan Payroll pada perusahaan anda. Pada pertengahan tahun
                  2023, khususnya sekitar bulan Agustus PT Quadra Conary
                  Indonesia. EntShift hadir untuk mengubah sistem Sumber Daya
                  Manusia (SDM) perusahaan Anda menjadi lebih efektif dan
                  efisien.
                </p>
                <p className="text-text text-left text-base max-w-10 leading-7 mx-4  mb-6 ">
                  EntShift bertujuan untuk memfasilitasi optimalisasi kinerja
                  dan pemantauan karyawan. Proses pemantauan karyawan yang
                  sebelumnya manual, memakan waktu dan mahal, kini dapat
                  diperbaiki dengan solusi yang disediakan oleh EntShift.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" max-w-6xl mx-auto">
          <div className="w-full mx-auto">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="mx-3 lg:text-[32px] lg:font-semibold font-sans text-textblackblue mb-3">
                Bersama EntShift Percepat Pertumbuhan Bisnismu
                <p className="text-gray-600 text-center text-base mt-3">
                  Optimalkan pengelolaan operasi HR Anda dengan bantuan solusi
                  terintegrasi dari EntShift
                </p>
              </h1>
              <div className="flex items-center justify-center">
                <Cta />
              </div>
            </div>
          </div>
        </div>
        <div id="#" className="mb-36 mt-10">
          <div className="container max-w-6xl mx-auto ">
            <div className="flex flex-wrap">
              <div className="w-full self-center px-4 lg:w-1/2">
                <h1 className="font-sans font-semibold text-xl md:text-3xl lg:text-4xl text-text leading-tight mx-3 mb-6">
                  Sebuah solusi untuk berbagai kebutuhan HR dan Bisnismu
                </h1>
                <ul className="flex flex-col gap-y-5 pl-2 pr-7 mx-2">
                  <li className="flex items-center">
                    <span className="bg-primary rounded-full flex flex-none text-white items-center justify-center lg:w-12 lg:h-12">
                      <span className="material-symbols-outlined">
                        check_circle
                      </span>
                    </span>
                    <div className="flex flex-col ml-4 leading-5">
                      <h6 className="text-base text-gray-800">
                        Solusi untuk transformasi digital dan otomatisasi dalam
                        bidang HR
                      </h6>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-primary rounded-full flex flex-none text-white items-center justify-center lg:w-12 lg:h-12">
                      <span className="material-symbols-outlined">
                        check_circle
                      </span>
                    </span>
                    <div className="flex flex-col ml-4 leading-5">
                      <h6 className="text-base text-gray-800">
                        Solusi untuk menjalankan praktik kerja dari rumah, model
                        kerja hybrid, dan bekerja dari lokasi jarak jauh.
                      </h6>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-primary rounded-full flex flex-none text-white items-center justify-center lg:w-12 lg:h-12">
                      <span className="material-symbols-outlined">
                        check_circle
                      </span>
                    </span>
                    <div className="flex flex-col ml-4 leading-5">
                      <h6 className="text-base text-gray-800">
                        Solusi untuk mengelola sumber daya manusia dan
                        meningkatkan produktivitas kerja
                      </h6>
                    </div>
                  </li>
                </ul>
                <div className="flex items-center justify-center pt-10 mt-10 animate-bounce lg:hidden">
                  <Cta />
                </div>
              </div>

              <div className="w-full self-end px-4 lg:w-1/2">
                <div className="relative mt-20">
                  {/* <div className="absolute w-40 h-60 -bottom-6 rounded-xl blur-2xl bg-orange-200 left-10 translate-x-1/2 -translate-y-1/4 -z-10"></div> */}
                  <div className="relative mt-10 lg:mt-0 lg:right-0">
                    <Image
                      layout=""
                      width={400}
                      height={200}
                      src="/images/iPhoneMockup.svg"
                      alt=""
                      className=" pb-12 w-2/3 mx-auto"
                    />
                  </div>
                  <span className="absolute -bottom-12 lg:bottom-10 -z-10 left-1/2 -translate-x-1/2">
                    <svg
                      width={300}
                      height={600}
                      viewBox="0 0 200 200"
                      xmlns="http://www.w3.org/2000/svg"
                      className="lg:scale-150"
                    >
                      <path
                        fill="#F65E21"
                        d="M33.9,-24.1C45.9,-22,58.9,-11,63.2,4.4C67.6,19.7,63.4,39.5,51.4,56C39.5,72.5,19.7,85.8,2.9,82.8C-13.8,79.9,-27.7,60.7,-37.9,44.2C-48.1,27.7,-54.6,13.8,-50.2,4.4C-45.9,-5.1,-30.6,-10.3,-20.4,-12.4C-10.3,-14.5,-5.1,-13.7,2.9,-16.6C11,-19.5,22,-26.2,33.9,-24.1Z"
                        transform="translate(100 100) scale(1.2)"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
