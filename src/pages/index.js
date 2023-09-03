import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Header from "components/layouts/Navbar/Header";
import Cta from "../components/cta";
import FeatureBox from "components/featurebox";
import Card from "../components/card";
import FloatingWhatsAppButton from "components/FloatingWhatsAppButton";
import Pricing2 from "components/Pricing2";
import Faq from "components/faq";
import Cta2 from "components/cta2";
import Testimonial from "../components/testimonial";
import LogoList from "components/LogoList";
import Footer from "components/layouts/Footer/footer";
import Kelebihan from "components/kelebihan";
import Ctaplaystore from "components/Ctaplaystore";

export default function Home() {
  return (
    <div className="flex flex-col -mt-20">
      <Head>
        <title>EntShift</title>
        <meta name='description" content="EntiShift Software HR' />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* navbar */}

      {/* decor */}
      <section className="relative mb-32">
        <span className="absolute z-0 w-5/12 h-screen -left-3 md:left-0 md:top-20 bottom-0">
          <Image src="images/decore3.svg" alt="" width={250} height={600} />
        </span>
        <span className="absolute z-0 w-5/12 h-screen md:right-0 top-[580px] md:top-20 bottom-0">
          <Image src="images/decore2.svg" alt="" width={700} height={600} />
        </span>

        {/* hero */}
        <section id="home" className="pt-36 md:pt-56">
          <div className="container max-w-7xl mx-auto">
            <div className="flex flex-wrap">
              <div className="w-full self-center px-4 lg:w-1/2 motion-safe:animate-fadeIn">
                <h1 className="text-orange-500 font-bold text-base md:text-xl uppercase mb-3">
                  APLIKASI ABSEN ONLINE
                </h1>
                <h2 className="text-textblackblue font-sans font-bold text-3xl tracking-tight md:font-bold md:text-[50px] md:leading-[58px] leading-8 mb-6">
                  Kelola dan Tingkatkan Produktivitas Karyawan di Kantor
                </h2>
                <p className="text-gray-700 max-w-xl text-sm md:text-base leading-6 mb-6 ">
                  Kini, absensi karyawan tak lagi harus dilakukan di gedung
                  kantor. Nikmati kemudahan melakukan absensi di mana saja,
                  sesuai kebutuhan. Solusi ini cocok untuk berbagai industri dan
                  bisnis, membebaskan Anda dari keterbatasan fisik.
                </p>
                <div className="flex items-center">
                  <div className="flex">
                    <Cta />
                  </div>
                  <div className="z-30">
                    <Ctaplaystore />
                  </div>
                </div>
              </div>
              <div className="w-full self-end px-4 lg:w-1/2">
                <div className="relative mt-14 md:mt-10">
                  <Image
                    layout=""
                    width={400}
                    height={400}
                    src="/images/hero1.png"
                    alt=""
                    className="w-2/4 md:w-96 mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      {/* end hero */}

      {/* colab */}
      <section className="lg:mt-5 -mt-20">
        <div className="container max-w-full mx-auto">
          <div className=" p-6">
            <p className=" font-sans font-semibold text-center text-base lg:text-lg text-textblackblue">
              Lebih dari 1000+ perusahaan telah mempercayakan kebutuhan Payroll
              dan HR mereka kepada EniShift.
            </p>
            <div className="flex items-center justify-center pt-10">
              <LogoList />
            </div>
          </div>
        </div>
      </section>
      {/* colab end */}

      {/* fiture */}
      <section id="fitur" className="md:pt-20 pt-16">
        <div className="container max-w-screen-xl px-3 mx-auto">
          <div className="text-center flex flex-col mb-5">
            <h3 className="font-sans text-3xl font-bold md:text-[40px] text-text md:font-bold leading-tight ">
              Fitur Aplikasi<span className="text-orange-500"> EntShift</span>
            </h3>
            <h1 className="font-sans text-sm md:text-base text-center px-3 mt-2 text-gray-800 ">
              EntiShift menyediakan beberapa fitur untuk memudahkan perusahaan
              dalam mengelola performa perusahaan
            </h1>
          </div>

          <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-2 lg:gap-6 lg:gap-x-7 mx-10">
            <FeatureBox
              title="Attendence"
              status={true}
              icons="view_timeline"
              img_url="/images/logo-fitur1.svg"
              desc={`Pegawai melakukan pencatatan kehadiran melalui foto selfie menggunakan ponsel di lokasi yang telah ditetapkan. Foto serta lokasi kehadiran terdeteksi dan dicatat dengan akurat dalam waktu nyata, dan menjadi lebih akurat berkat adanya teknologi anti fake GPS.`}
            ></FeatureBox>
            <FeatureBox
              title="OverTime"
              status={false}
              icons="manage_history"
              img_url="/images/logo-fitur1.svg"
              desc={`Merupakan solusi yang dirancang untuk mengelola dan melacak jam kerja ekstra yang dilakukan oleh karyawan di luar jam kerja reguler. Fitur ini bertujuan untuk meningkatkan efisiensi, akurasi, dan transparansi dalam pengelolaan jam kerja ekstra yang dilakukan oleh karyawan.`}
            ></FeatureBox>
            <FeatureBox
              title="Time Off"
              icons="timer"
              status={false}
              className=""
              img_url="/images/logo-fitur1.svg"
              desc={`Mrupakan solusi yang dirancang untuk mengelola dan mengajukan cuti atau waktu istirahat bagi karyawan. Fitur ini bertujuan untuk mengoptimalkan proses pengajuan cuti, memastikan ketersediaan sumber daya manusia yang tepat, serta meningkatkan transparansi dan efisiensi dalam pengelolaan waktu istirahat karyawan.`}
            ></FeatureBox>
            <FeatureBox
              title="Note"
              status={false}
              icons="note"
              className="bg-primary rounded-full flex flex-none text-white items-center justify-center w-10 h-10"
              desc={`Dalam fitur ini memungkinkan karyawan dan manajer berkomunikasi secara efisien dan transparan melalui catatan yang terkait dengan absensi dan jadwal kerja. Fitur ini bertujuan untuk memfasilitasi pertukaran informasi penting, pengingat, atau instruksi antara tim, sehingga memperkuat kolaborasi dan pemahaman yang lebih baik di antara semua pihak terlibat.`}
            ></FeatureBox>
            <FeatureBox
              title="Employe Database"
              icons="database"
              status={false}
              img_url="/images/logo-fitur1.svg"
              desc={`Merupakan komponen penting yang dirancang untuk menyimpan dan mengelola informasi lengkap mengenai semua karyawan yang bekerja di perusahaan. Fitur ini bertujuan untuk menciptakan pusat data yang terorganisir dan terpadu, yang memudahkan pengelolaan informasi personal, riwayat pekerjaan, dan detail penting lainnya yang terkait dengan setiap karyawan.`}
            ></FeatureBox>
            <FeatureBox
              title="Payroll"
              icons="payments"
              status={false}
              img_url="/images/logo-fitur1.svg"
              desc={`Solusi terpadu yang dirancang untuk mengelola proses penggajian karyawan secara efisien dan akurat. Fitur ini memiliki tujuan utama untuk mengotomatisasi perhitungan gaji, memastikan kepatuhan terhadap regulasi, dan meminimalkan kesalahan dalam proses penggajian, yang pada gilirannya dapat meningkatkan kepuasan karyawan dan efisiensi operasional.`}
            ></FeatureBox>
          </div>
        </div>
        <div className="flex items-center justify-center pt-20 ">
          <Cta />
        </div>
      </section>
      {/* end fitur */}

      {/*Harga */}
      <section
        id="harga"
        className="flex md:mb-60 md:flex-col flex-1 mt-10 pt-10"
      >
        <div className="bg-gradient-to-br from-orange-600 to-orange-400 md:h-[450px] z-30">
          <div className=" flex flex-col mb-5 "></div>
          <div className="mx-auto flex justify-center items-center">
            <Pricing2 />
          </div>
        </div>
      </section>

      {/* kelebihan */}
      <section className="lg:mt-0 mt-16 lg:mb-8 mb-10">
        <Kelebihan />
      </section>

      {/* end keuntungan */}

      <section className="mb-3 lg:mb-10 lg:mt-28 mt-10">
        <Faq />
      </section>

      <section className="mb-3 lg:mb-10">
        <Cta2 />
      </section>

      <section className="mt-10 mb-48 lg:mt-14 lg:mb-32">
        <Testimonial />
      </section>

      {/* <section>
        <Footer />
      </section> */}
    </div>
  );
}
