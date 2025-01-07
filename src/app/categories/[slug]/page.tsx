import { getAllBlogPost } from "@/utils/contentful-data";
import Image from "next/image";
import Link from "next/link";

export default async function SlugCategories({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const posts = await getAllBlogPost();
  const filteredPosts = posts?.filter((item) => item.category.slug === slug);

  return (
    <section className="bg-white">
      <div className="px-4 sm:px-6 md:px-10">
        {filteredPosts?.map((item) => {
          return (
            <div
              key={item.slug as string}
              className="font-LibreFranklin flex flex-col sm:flex-row gap-6 pt-10 md:pb-16"
            >
              <div className="relative h-[250px] sm:h-[300px] md:h-[400px] w-full sm:w-[350px] md:w-[700px] mb-6 ">
                <Image
                  src={item.blogImage}
                  alt="image"
                  fill
                  className="object-cover rounded-md"
                />
              </div>

              <div className="">
                <h1 className="font-extrabold text-[20px] sm:text-[25px] md:text-[30px]">
                  {item.title as string}
                </h1>

                <p className="font-medium my-2 pb-1 pr-4 sm:pr-8 md:pr-10 text-base sm:text-lg">
                  {item.description as string}
                </p>

                <span className="font-medium bg-gray-300 p-2 px-4 rounded-full text-sm sm:text-base">
                  {item?.category?.name as string}
                </span>

                <Link
                  className="flex items-center hover:bg-gray-300 rounded-[4px] w-fit text-black p-2 gap-2 font-bold mt-4 sm:mt-5 mb-10"
                  href={`/blog/${item.slug}`}
                >
                  Lihat Motornya
                  <Image src="/arrow-right.svg" height={15} width={15} alt="" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
