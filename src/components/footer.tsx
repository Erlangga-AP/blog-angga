import Image from "next/image";

export default function Footer() {
  return (
    <footer className="h-full bg-black text-white font-LibreFranklin px-5 md:px-14">
      {/* Logo Section */}
      <h2 className="py-[37px] flex items-center text-[20px] md:text-[25px] font-black md:pl-36 justify-center md:justify-start">
        <span>HARLEY</span>
        <div className="bg-orange-600 w-2 h-[2px] mx-2"></div>
        <span>DAVIDSON</span>
      </h2>

      <div className="bg-gray-500 w-full h-[1px]"></div>

      {/* Grid Content Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:pl-36 py-10">
        {/* Column 1 */}
        <div>
          <h3 className="font-bold mb-3 text-[18px] md:text-[20px]">
            BELAJAR BERSAMA
          </h3>
          <ul>
            <li>Pelatihan Motor</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="font-bold mb-3 text-[18px] md:text-[20px]">
            SERVICE MOTOR
          </h3>
          <ul className="flex flex-col gap-2">
            <li>Servis Resmi</li>
            <li>Manual Pemilik</li>
            <li>Jadwal Pemeliharaan</li>
            <li>Pembaruan Perangkat Lunak</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="font-bold mb-3 text-[18px] md:text-[20px]">
            TENTANG KAMI
          </h3>
          <ul className="flex flex-col gap-2">
            <li>Perusahaan Kami</li>
            <li>Investor</li>
            <li>Pelestarian</li>
            <li>Menjadi Dealer</li>
            <li>Tur Pabrik</li>
            <li>Museum</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="font-bold mb-3 text-[18px] md:text-[20px]">
            DUKUNGAN PELANGGAN
          </h3>
          <ul className="flex flex-col gap-2">
            <li>Hubungan kami</li>
            <li>Penawaran</li>
          </ul>
        </div>

        {/* Column 5 */}
        <div>
          <h3 className="font-bold mb-3 text-[18px] md:text-[20px]">
            PEMBIAYAAN
          </h3>
          <ul>
            <li>Pembiayaan Motor</li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-500 w-full h-[1px]"></div>

      {/* Footer Bottom Section */}
      <div className="flex flex-wrap justify-between items-center gap-5 p-5 md:p-10 text-sm">
        <div className="w-full md:w-auto text-center md:text-left">
          Peta Situs
        </div>
        <ul className="flex flex-wrap justify-center md:justify-start gap-5 text-center">
          <li>Syarat-Syarat Penggunaan</li>
          <li>Kebijakan Privasi</li>
          <li>Kebijakan Cookie</li>
          <li>Kelola Preferensi Cookie</li>
          <li>Kebijakan untuk UGC</li>
          <li>Kami Peduli Pada Anda</li>
        </ul>
      </div>

      <div className="bg-gray-500 w-full h-[1px]"></div>

      {/* Footer Additional Info */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-12 px-5 md:ml-28 pb-10">
        {/* Country Selector */}
        <div className="flex justify-center lg:justify-start gap-5 border border-orange-600 w-fit rounded-md px-4 items-center mx-auto lg:mx-0">
          <div className="h-7 w-7 relative rounded-full overflow-hidden">
            <Image src="/indo.png" fill alt="flag" />
          </div>

          <div className="flex items-center gap-5">
            <div className="flex items-center gap-[1px]">
              <span>Indonesia</span>
              <div className="bg-orange-600 w-2 h-[2px] mx-2"></div>
              <span>Bahasa Indonesia</span>
            </div>

            <div className="h-3 w-3 relative">
              <Image src="/down.svg" fill alt="down logo" />
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="text-zinc-500 text-[12px] text-center lg:text-left">
          ©2024 H-D atau afiliasinya. HARLEY-DAVIDSON, HARLEY, H-D, dan Logo Bar
          and Shield adalah merek dagang H-D U.S.A., LLC. Merek dagang pihak
          ketiga dimiliki oleh pemiliknya masing-masing.
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center lg:justify-end gap-5">
          <a href="https://x.com" target="_blank" className="relative h-6 w-6">
            <Image src="/x-logo.svg" fill alt="x logo" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            className="relative h-6 w-6"
          >
            <Image src="/instagram-logo.svg" fill alt="instagram logo" />
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            className="relative h-6 w-6"
          >
            <Image src="/youtube-logo.svg" fill alt="youtube logo" />
          </a>
        </div>
      </div>
    </footer>
  );
}
