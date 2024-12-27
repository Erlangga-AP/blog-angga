import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <>
      <section className="text-white relative min-h-[80vh] overflow-hidden mb-5 flex items-center font-LibreFranklin">
        <div className="absolute w-full h-full">
          <Image src="/hd-bg.webp" fill alt="" className="object-cover" />
        </div>
        <div className="relative pl-5">
          <div className="font-bold text-[50px]">
            <h1>DRIVE SMART</h1>
            <h1>DRIVE SAFE</h1>
          </div>

          <p className="pt-2 pb-5">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Class magnis
          </p>

          <Link
            className="flex bg-white rounded-[4px] w-fit text-black p-2 gap-8 font-bold"
            href=""
          >
            Lihat Motornya
            <Image src="/arrow-right.svg" height={15} width={15} alt="" />
          </Link>
        </div>
      </section>
    </>
  );
}
