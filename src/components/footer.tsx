import Image from "next/image";

export default function Footer() {
  return (
    <footer className="h-full bg-black text-white font-LibreFranklin px-14">
      <h2 className="py-[37px] flex items-center text-[25px] font-black pl-36">
        <span>HARLEY</span>
        <div className="bg-orange-600 w-2 h-[2px] mx-2"></div>
        <span>DAVIDSON</span>
      </h2>

      <div className="bg-gray-500 w-full h-[1px]"></div>

      <div className="grid grid-cols-3 pl-36 mb-[80px]">
        <div className="pt-10">
          <h3 className="font-bold mb-3 text-[20px]">BELAJAR BERSAMA</h3>
          <ul>
            <li>Pelatihan Motor</li>
          </ul>
        </div>

        <div className="pt-10">
          <h3 className="font-bold mb-3 text-[20px]">SERVICE MOTOR</h3>
          <ul className="flex flex-col gap-4">
            <li>Servis Resmi</li>
            <li>Manual Pemilik</li>
            <li>Jadwal Pemeliharaan</li>
            <li>Pembaruan Perangkat Lunak</li>
          </ul>
        </div>

        <div className="pt-10">
          <h3 className="font-bold mb-3 text-[20px]">TENTANG KAMI</h3>
          <ul className="flex flex-col gap-4">
            <li>Perusahaan Kami</li>
            <li>Investor</li>
            <li>Pelestarian</li>
            <li>Menjadi Dealer</li>
            <li>Tur Pabrik</li>
            <li>Museum</li>
          </ul>
        </div>

        <div className="-mt-[160px]">
          <h3 className="font-bold mb-3 text-[20px]">DUKUNGAN PELANGGAN</h3>
          <ul className="flex flex-col gap-4">
            <li>Hubungan kami</li>
            <li>Penawaran</li>
          </ul>
        </div>

        <div className="-mt-[50px]">
          <h3 className="font-bold mb-3 text-[20px]">PEMBIAYAAN</h3>
          <ul>
            <li>Pembiayaan Motor</li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-500 w-full h-[1px]"></div>

      <div className="flex justify-between p-10">
        <div>Peta Situs</div>
        <ul className="flex gap-5">
          <li>Syarat-Syarat Penggunaan</li>
          <li>Kebijakan Privasi</li>
          <li>Kebijakan Cookie</li>
          <li>Kelola Preferensi Cookie</li>
          <li>Kebijakan untuk UGC</li>
          <li>Kami Peduli Pada Anda</li>
        </ul>
      </div>

      <div className="bg-gray-500 w-full h-[1px]"></div>

      <div className="grid grid-cols-3 mt-12 gap-10 ml-28 pb-[50px]">
        <div className="flex gap-7 border border-orange-600 w-fit rounded-md px-4 items-center">
          <div className="h-7 w-7 relative rounded-full overflow-hidden">
            <Image src="/indo.png" fill alt="" />
          </div>

          <div className="flex items-center gap-10">
            <div className="flex items-center gap-[1px]">
              <span>Indonesia</span>
              <div className="bg-orange-600 w-2 h-[2px] mx-2"></div>
              <span>Bahasa Indonesia</span>
            </div>

            <div className="h-3 w-3 relative">
              <Image src="/down.svg" fill alt="" />
            </div>
          </div>
        </div>

        <div className="text-zinc-500 text-[12px]">
          ©2024 H-D atau afiliasinya. HARLEY-DAVIDSON, HARLEY, H-D, dan Logo Bar
          and Shield adalah merek dagang H-D U.S.A., LLC. Merek dagang pihak
          ketiga dimiliki oleh pemiliknya masing-masing.
        </div>

        <div className="flex gap-10">
          <div className="relative h-6 w-6">
            <Image src="/x-logo.svg" fill alt="" />
          </div>
          <div className="relative h-6 w-6">
            <Image src="/instagram-logo.svg" fill alt="" />
          </div>
          <div className="relative h-6 w-6">
            <Image src="/youtube-logo.svg" fill alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
}
