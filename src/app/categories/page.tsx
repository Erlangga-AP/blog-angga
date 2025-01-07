import { getAllCategories } from "@/utils/contentful-data";
import Image from "next/image";
import Link from "next/link";

export default async function Categories() {
  const categories = await getAllCategories();

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 p-5 bg-white">
      {categories?.map((item) => {
        return (
          <div
            key={item.slug as string}
            className="flex flex-col font-LibreFranklin bg-white   overflow-hidden"
          >
            <div className="relative  h-[300px] sm:h-[400px] lg:h-[500px] w-full">
              <Image
                src={item.image}
                alt="image"
                fill
                className="object-cover"
              />
            </div>

            <div className="pt-5">
              <h2 className="font-bold text-[30px]">{item.title as string}</h2>
              <p className="font-medium text-[15px] text-gray-600 mt-2">
                {item.description as string}
              </p>

              <Link
                className="flex items-center  hover:bg-gray-300 text-[20px] p-2 rounded-[4px] w-fit text-black py-2 gap-2 font-bold mt-4 mb-9"
                href={`/categories/${item.slug}`}
              >
                Lihat Motornya
                <Image src="/arrow-right.svg" height={15} width={15} alt="" />
              </Link>
            </div>
          </div>
        );
      })}
    </section>
  );
}
