import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <>
      <section className="text-white relative min-h-[80vh] overflow-hidden mb-5">
        <div className="absolute">
          <Image src="/hd-bg.webp" width={1500} height={1200} alt="" />
        </div>
        <div className="relative">
          <h1>DRIVE SMART</h1>
          <h1>DRIVE SAFE</h1>
          <p>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Class magnis
            urna sem pretium platea quam ligula vitae. Nisl montes porta euismod
            felis aenean. Vivamus amet convallis in, elementum tortor nisi.
            Lectus fermentum augue pellentesque mattis montes nisi facilisis
            turpis. Sed mauris iaculis in ultricies facilisi mattis? Euismod
            curae quam felis euismod, porta mollis.
          </p>
          <Link className="flex bg-white w-fit text-black" href="">
            Lihat Motornya
            <Image src="/arrow-right.svg" height={25} width={15} alt="" />
          </Link>
        </div>
      </section>
    </>
  );
}

//   <div>
//     <h1 className="font-Rethink_Sans">I&apos;m Erlangga</h1>
//     <p>
//       I work with React Ecosystem, and write to teach people how to rebuild
//       and redefine fundamental concepts through mental models.
//     </p>
//   </div>

//   <div>
//     <a href="">Learn How</a>
//     <Link href="about-me">More about me</Link>
//   </div>
