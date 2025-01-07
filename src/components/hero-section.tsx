import Image from "next/image";

export default function HeroSection() {
  return (
    <>
      <section className="text-white relative min-h-[80vh] overflow-hidden mb-5 flex items-center font-LibreFranklin">
        {/* Background Image */}
        <div className="absolute w-full h-full">
          <Image
            src="/hd-bg.webp"
            fill
            alt="bike image"
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="relative px-4 md:px-5 lg:px-5 max-w-4xl">
          <div className="font-bold text-4xl md:text-5xl lg:text-6xl leading-tight">
            <h1>DRIVE SMART</h1>
            <h1>DRIVE SAFE</h1>
          </div>

          <p className="pt-4 pb-6 text-sm md:text-base lg:text-lg">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Class magnis
          </p>
        </div>
      </section>
    </>
  );
}
