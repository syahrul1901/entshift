import react from "react";

function Faq() {
  return (
    <div className=" max-w-6xl mx-auto bg-white">
      <div className="">
        <div className="w-full self-center px-6 lg:px-4 lg:w-full">
          <h2 className="font-bold text-4xl lg:text-[40px] tracking-tight text-center leading-tight">
            Pertanyaan Tentang Aplikasi{" "}
            <span className="text-orange-500">Entshift</span>
          </h2>
          <p className="text-neutral-700 text-lg lg:text-xl mt-3 text-center">
            Frequenty asked questions(FAQ)
          </p>
        </div>
      </div>
      <div className="grid divide-y divide-neutral-200 self-end lg:px-36 px-7">
        <div className="py-5 px-3 lg:px-0">
          <details className="group">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <span> Bagaimana saya bisa mendapatkan aplikasi enshift?</span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  shape-rendering="geometricPrecision"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
              Anda bisa mengunduh aplikasi enshift di Play Store untuk pengguna
              ponsel Android ataupun di App Store untuk pengguna ponsel iPhone.
            </p>
          </details>
        </div>
        <div className="py-5 px-3 lg:px-0">
          <details className="group">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <span>
                {" "}
                Apa keuntungan menggunakan aplikasi absensi entshift ?
              </span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  shape-rendering="geometricPrecision"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
              Pengguna dapat segera memanfaatkan aplikasi absensi online dengan
              fitur unggulan guna meningkatkan efisiensi kinerja karyawan.
              Pengguna hanya perlu membayar biaya sewa per bulan sesuai jumlah
              kebutuhan. Pendekatan ini jelas lebih praktis, menghilangkan
              kebutuhan untuk mengeluarkan modal untuk pengembangan internal
              (in-house development), menjalankan pemeliharaan, atau membeli
              lisensi yang berharga tinggi.
            </p>
          </details>
        </div>
        <div className="py-5 px-3 lg:px-0">
          <details className="group">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <span> Apa itu Cloud?</span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  shape-rendering="geometricPrecision"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
              Berbasis cloud artinya server entshift dikelola oleh pihak ketiga,
              dalam hal ini yaitu Google Cloud Platform, sehingga entshift dapat
              diakses di mana saja dan kapan saja selama pengguna/karyawan
              terkoneksi dengan jaringan internet.
            </p>
          </details>
        </div>
        <div className="py-5 px-3 lg:px-0">
          <details className="group">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <span> Kenapa perlu menggunakan entshift?</span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  shape-rendering="geometricPrecision"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <div className="text-neutral-600 mt-3 group-open:animate-fadeIn">
              <p>
                Entshift membantu perusahaan meningkatkan efisiensi dan
                efektivitas bisnis dengan risiko investasi yang minim, melalui
                pengelolaan kinerja karyawan yang efisien. Mengapa perusahaan
                Anda harus memilih Entshift?
              </p>
              <li>
                Entshift menyediakan platform aplikasi berbasis awan untuk
                merekam kehadiran karyawan, yang dapat digunakan di berbagai
                lokasi dengan smartphone.
              </li>
              <li>
                Dalam mengawasi kehadiran, Entshift memungkinkan perusahaan
                menentukan radius yang telah ditetapkan oleh HR di berbagai
                cabang.
              </li>
              <li>
                Terdapat menu Ringkasan yang berisi data real-time dari jadwal
                dan kegiatan karyawan langsung dari smartphone mereka.
              </li>
            </div>
          </details>
        </div>
        <div className="py-5 px-3 lg:px-0">
          <details className="group">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <span> Apa itu software HR?</span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  shape-rendering="geometricPrecision"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
              Software HR merupakan platform yang menyediakan sistem HR
              terotomasi dan berbasis komputasi cloud untuk memudahkan
              operasional perusahaan di saat mengelola karyawan. Menggunakan
              software HR, perusahaan dapat menghitung gaji karyawan secara
              otomatis, sesuai komponen gaji seperti THR, PPh 21, potongan cuti,
              uang lembur, dan juga bonus; mengelola database karyawan;
              mengelola absensi kehadiran dan cuti; hingga mengelola employee
              benefit. Untuk memudahkan akses bagi perusahaan dan karyawan,
              sering software HR dikembangkan berbasis online, sehingga dapat
              digunakan dari mana saja dan kapan saja. Fitur-fitur berbasis
              online tersebut akan memudahkan perusahaan beradaptasi dengan
              budaya remote working dan WFH di masa pandemi.
            </p>
          </details>
        </div>
        <div className="py-5 px-3 lg:px-0">
          <details className="group">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <span>
                {" "}
                Bagaimana software HR membantu perkembangan perusahaan?
              </span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  shape-rendering="geometricPrecision"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
              Menggunakan software HR yang komprehensif dapat memudahkan
              perusahaan ketika mengelola administrasi HR sehari-hari, seperti
              kehadiran karyawan, payroll, performance appraisal, database, dan
              analis. Menggunakan sistem berbasis online dan otomatis, HR
              perusahaan tidak akan lagi menghabiskan waktu terlalu banyak untuk
              operasional serta administrasi, sehingga dapat berfokus pada
              proses pengembangan karyawan dan penciptaan budaya yang produktif.
            </p>
          </details>
        </div>
        <div className="py-5 px-3 lg:px-0">
          <details className="group">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <span>
                {" "}
                Bagaimana kami membandingkannya dengan layanan serupa lainnya?
              </span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  shape-rendering="geometricPrecision"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
              Platform ini adalah layanan yang sangat andal dan kaya fitur yang
              menawarkan berbagai alat dan fungsi. Harganya kompetitif dan
              menawarkan berbagai opsi penagihan untuk memenuhi kebutuhan dan
              anggaran yang berbeda.
            </p>
          </details>
        </div>
        <div className="py-5 px-3 lg:px-0">
          <details className="group">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <span>
                {" "}
                Apakah saya bisa berhenti menggunakan layanan entshift?
              </span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  shape-rendering="geometricPrecision"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
              Anda bisa berhenti menggunakan aplikasi absensi entshift kapanpun
              juga saat masa berlangganan sudah habis. Akun Anda akan terhapus
              dari sistem entshift setelah 30 hari masa berlangganan habis.
              Apabila Anda menggunakan paket gratis selamanya, silakan
              menghubungi tim keren entshift untuk penghapusan akun Anda.
            </p>
          </details>
        </div>
        <div className="py-5 px-3 lg:px-0">
          <details className="group">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <span>
                Apa saya bisa melakukan pengecekan aktivitas yang ada di akun
                perusahaan saya?
              </span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  shape-rendering="geometricPrecision"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
              Bisa. Semua log aktivitas pengguna tersimpan di server entshift
              dan bisa dilakukan pengecekan saat diperlukan.
            </p>
          </details>
        </div>
      </div>
    </div>
  );
}
export default Faq;
